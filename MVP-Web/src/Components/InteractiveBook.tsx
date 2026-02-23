import React, { useState, useRef, useCallback, useEffect, useMemo } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import HTMLFlipBook from "react-pageflip";
import BackButton from "./Common/BackButton";
import ForwardButton from "./Common/ForwardButton";
import type { InteractiveBookProps } from "../types";
import "./css/InteractiveBook.css";
import libro1 from "../assets/MVP_II.pdf";
import portada1 from "../assets/Books/Portada1.jpeg";
import portada2 from "../assets/Books/Portada_MVP_I.png";
import portada3 from "../assets/Books/imagen 1.png";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


function pdfPageToFlipIndex(pdfPage: number): number {
    if (pdfPage <= 1) return 0;
    return pdfPage % 2 === 0 ? pdfPage - 1 : pdfPage - 1;
}

/** Pages within this distance from the visible spread are rendered as canvases.  */
const RENDER_WINDOW = 4;

// ─── Types ────────────────────────────────────────────────────────────────────

interface TocEntry {
    label: string;
    page: number;
    section?: string;
}

// ─── Table of Contents ────────────────────────────────────────────────────────

const DEFAULT_TOC: TocEntry[] = [
    { label: "I. El día en que todo cambió", page: 3, section: "SECCIÓN I: Consecuencias" },
    { label: "II. Luces y sombras", page: 5 },
    { label: "III. Decisiones", page: 7 },
    { label: "IV. El entrenamiento", page: 11, section: "SECCIÓN II: El viaje" },
    { label: "V. El pecado", page: 13 },
    { label: "VI. La partida", page: 15 },
    { label: "VII. Aura", page: 19, section: "SECCIÓN III" },
    { label: "VIII. Justicia", page: 21 },
    { label: "IX. Exilio", page: 23 },
    { label: "X. La tormenta", page: 27, section: "SECCIÓN IV: La tormenta" },
    { label: "XI. Cenizas", page: 29 },
    { label: "XII. Renacimiento", page: 31 },
];

// ─── Clickable page indicator ─────────────────────────────────────────────────

interface PageIndicatorProps {
    currentPage: number;
    numPages: number;
    onJump: (page: number) => void;
}

const PageIndicator: React.FC<PageIndicatorProps> = ({ currentPage, numPages, onJump }) => {
    const [editing, setEditing] = useState(false);
    const [draft, setDraft] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const startEdit = () => {
        setDraft(String(currentPage + 1));
        setEditing(true);
        setTimeout(() => inputRef.current?.select(), 0);
    };

    const commit = () => {
        const n = parseInt(draft, 10);
        if (!isNaN(n) && n >= 1 && n <= numPages) {
            // Flipbook is 0-indexed. Snap to left leaf of the spread.
            onJump(n % 2 === 0 ? n - 1 : n);
        }
        setEditing(false);
    };

    if (editing) {
        return (
            <input
                ref={inputRef}
                className="book-page-input"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onBlur={commit}
                onKeyDown={(e) => {
                    if (e.key === "Enter") commit();
                    if (e.key === "Escape") setEditing(false);
                }}
                type="number"
                min={1}
                max={numPages}
            />
        );
    }

    return (
        <span
            className="book-page-indicator"
            title="Haz clic para ir a una página"
            onClick={startEdit}
        >
            {currentPage + 1} / {numPages}
        </span>
    );
};

// ─── Main component ───────────────────────────────────────────────────────────

interface ExtendedBookProps extends InteractiveBookProps {
    toc?: TocEntry[];
    loginUrl?: string;
}

const InteractiveBook: React.FC<ExtendedBookProps> = ({
    pdfUrl = libro1,
    toc = DEFAULT_TOC,
    loginUrl = "/login",
}) => {
    const [numPages, setNumPages] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [pageSize, setPageSize] = useState({ w: 420, h: 594 });

    /**
     * Pages that have ever been "near" the viewport get added here.
     * Once activated they stay rendered — prevents react-pageflip
     * from getting confused by children being removed and re-added.
     */
    const [activatedPages, setActivatedPages] = useState<Set<number>>(
        () => new Set([1, 2, 3, 4])
    );

    const book = useRef<any>(null);

    // ── Responsive sizing ──────────────────────────────────────────────────────
    useEffect(() => {
        let resizeTimeout: number;
        const compute = () => {
            const vw = window.innerWidth;
            let w: number;
            if (vw < 960) {
                w = Math.min(Math.floor((vw - 48) / 2), 380);
            } else {
                const centerColW = vw - 170 - 280 - 128;
                w = Math.min(Math.floor(centerColW / 2) - 8, 560);
            }
            w = Math.max(w, 260);
            setPageSize({ w, h: Math.round(w * 1.414) });
        };
        const debounced = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = window.setTimeout(compute, 150);
        };
        compute();
        window.addEventListener("resize", debounced);
        return () => {
            window.removeEventListener("resize", debounced);
            clearTimeout(resizeTimeout);
        };
    }, []);

    // ── Activate pages near the current spread ─────────────────────────────────
    useEffect(() => {
        if (numPages === 0) return;
        const first = Math.max(1, currentPage - RENDER_WINDOW);
        const last = Math.min(numPages, currentPage + 1 + RENDER_WINDOW);
        setActivatedPages((prev) => {
            let changed = false;
            const next = new Set(prev);
            for (let p = first; p <= last; p++) {
                if (!next.has(p)) { next.add(p); changed = true; }
            }
            return changed ? next : prev; // bail out if nothing new
        });
    }, [currentPage, numPages]);

    // ── Handlers ──────────────────────────────────────────────────────────────
    const onDocumentLoadSuccess = useCallback(
        ({ numPages: n }: { numPages: number }) => setNumPages(n),
        []
    );

    const nextFlip = useCallback(() => book.current?.pageFlip?.().flipNext(), []);
    const prevFlip = useCallback(() => book.current?.pageFlip?.().flipPrev(), []);

    const goToPage = useCallback((page: number) => {
        book.current?.pageFlip?.().flip(pdfPageToFlipIndex(page));
    }, []);

    const onFlip = useCallback((e: any) => setCurrentPage(e.data), []);

    // ── Active TOC entry ───────────────────────────────────────────────────────
    const activeEntry = useMemo<TocEntry | null>(() => {
        const displayPage = currentPage + 1;
        let active: TocEntry | null = null;
        for (const entry of toc) {
            if (entry.page <= displayPage) active = entry;
            else break;
        }
        return active;
    }, [currentPage, toc]);

    // ── TOC nodes (only recomputes when active entry changes) ──────────────────
    const tocNodes = useMemo(() => {
        const nodes: React.ReactNode[] = [];
        let lastSection = "";
        toc.forEach((entry, i) => {
            if (entry.section && entry.section !== lastSection) {
                lastSection = entry.section;
                nodes.push(
                    <p key={`s${i}`} className="toc-section-title">
                        {entry.section}
                    </p>
                );
            }
            const isActive = entry === activeEntry;
            nodes.push(
                <button
                    key={`e${i}`}
                    className={`toc-entry${isActive ? " active" : ""}`}
                    onClick={() => goToPage(entry.page)}
                    title={`Ir a la página ${entry.page}`}
                >
                    <span className="toc-entry-label">{entry.label}</span>
                    <span className="toc-entry-dots" aria-hidden="true" />
                    <span className="toc-entry-page">{entry.page}</span>
                </button>
            );
        });
        return nodes;
    }, [toc, activeEntry, goToPage]);

    // ── Page list ──────────────────────────────────────────────────────────────
    // Depends on activatedPages (grows monotonically) and numPages / pageSize.w.
    // Structurally stable: same number of div children every render.
    const pageNodes = useMemo(() => {
        return Array.from({ length: numPages }, (_, i) => {
            const pageNum = i + 1;
            return (
                <div key={`p${pageNum}`} className="book-page-container">
                    {activatedPages.has(pageNum) ? (
                        <Page
                            pageNumber={pageNum}
                            width={pageSize.w}
                            renderAnnotationLayer={false}
                            renderTextLayer={false}
                            renderMode="canvas"
                            className="book-page-content"
                        />
                    ) : (
                        <div className="book-page-placeholder" />
                    )}
                </div>
            );
        });
    }, [numPages, activatedPages, pageSize.w]);

    return (
        <div className="interactive-book-container">
            <div className="book-stage">

                {/* ── Left sidebar ────────────────────────────────────────────── */}
                <aside className="book-sidebar-left">
                    <div className="book-cover-thumb"><img src={portada1} alt="Portada 1" /></div>
                    <div className="book-cover-thumb"><img src={portada2} alt="Portada 2" /></div>
                    <div className="book-cover-thumb"><img src={portada3} alt="Portada 3" /></div>
                </aside>

                {/* ── Centre ──────────────────────────────────────────────────── */}
                <div className="book-center">
                    <Document
                        file={pdfUrl}
                        onLoadSuccess={onDocumentLoadSuccess}
                        className="book-wrapper"
                        loading={<div className="loading-message">Cargando libro…</div>}
                        error={<div className="error-message">Error al cargar el PDF.</div>}
                    >
                        {numPages > 0 && (
                            <HTMLFlipBook
                                width={pageSize.w}
                                height={pageSize.h}
                                size="fixed"
                                minWidth={200}
                                maxWidth={800}
                                minHeight={280}
                                maxHeight={1200}
                                drawShadow={true}
                                flippingTime={750}
                                usePortrait={false}
                                startZIndex={0}
                                autoSize={false}
                                maxShadowOpacity={0.55}
                                showCover={true}
                                mobileScrollSupport={true}
                                className="demo-book"
                                style={{}}
                                startPage={0}
                                swipeDistance={30}
                                clickEventForward={true}
                                useMouseEvents={true}
                                showPageCorners={true}
                                disableFlipByClick={false}
                                ref={book}
                                onFlip={onFlip}
                            >
                                {pageNodes}
                            </HTMLFlipBook>
                        )}
                    </Document>

                    {numPages > 0 && (
                        <div className="book-controls">
                            <BackButton onClick={prevFlip} className="book-nav-button" size={36} />
                            <PageIndicator
                                currentPage={currentPage}
                                numPages={numPages}
                                onJump={goToPage}
                            />
                            <ForwardButton onClick={nextFlip} className="book-nav-button" size={36} />
                        </div>
                    )}

                    <p className="book-cta">
                        ¿Quieres seguir leyendo?{" "}
                        <a href={loginUrl}>Inicia sesión…</a>
                    </p>
                </div>

                {/* ── Right sidebar: TOC ───────────────────────────────────────── */}
                <aside className="book-sidebar-right">
                    <h2 className="toc-title">Índice</h2>
                    <div className="toc-scroll">{tocNodes}</div>
                </aside>

            </div>
        </div>
    );
};

export default React.memo(InteractiveBook);