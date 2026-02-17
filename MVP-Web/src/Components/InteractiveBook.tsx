import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import HTMLFlipBook from 'react-pageflip';
import type { InteractiveBookProps } from '../types';
import './css/InteractiveBook.css';
import libro1 from "../assets/MVP_II.pdf";
import portada1 from "../assets/Books/Portada1.jpeg";
import portada2 from "../assets/Books/Portada_MVP_I.png";
import portada3 from "../assets/Books/imagen 1.png";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface TocEntry {
    label: string;
    page: number;
    section?: string;
}

const DEFAULT_TOC: TocEntry[] = [
    { label: '1. La princesa', page: 1, section: 'SECCIÓN I: Consecuencias' },
    { label: 'I. El día en que todo cambió', page: 3 },
    { label: 'II. Luces y sombras', page: 5 },
    { label: 'III. Decisiones', page: 7 },
    { label: '2. El viaje', page: 9, section: 'SECCIÓN II: El viaje' },
    { label: 'IV. El entrenamiento', page: 11 },
    { label: 'V. El pecado', page: 13 },
    { label: 'VI. La partida', page: 15 },
    { label: '3. No importa la distancia', page: 17, section: 'SECCIÓN III' },
    { label: 'VII. Aura', page: 19 },
    { label: 'VIII. Justicia', page: 21 },
    { label: 'IX. Exilio', page: 23 },
];

interface ExtendedBookProps extends InteractiveBookProps {
    toc?: TocEntry[];
    loginUrl?: string;
}

const InteractiveBook: React.FC<ExtendedBookProps> = ({
    pdfUrl = libro1,
    toc = DEFAULT_TOC,
    loginUrl = '/login',
}) => {
    const [numPages, setNumPages] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [pageSize, setPageSize] = useState({ w: 420, h: 594 });
    const book = useRef<any>(null);
    const centerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let resizeTimeout: number;

        const compute = () => {
            const vw = window.innerWidth;
            let w: number;
            if (vw < 960) {
                w = Math.min(Math.floor((vw - 48) / 2), 380);
            } else {
                const centerColW = vw - 200 - 200 - 144 - 64;
                w = Math.min(Math.floor(centerColW / 2) - 10, 480);
            }
            w = Math.max(w, 260);
            setPageSize({ w, h: Math.round(w * 1.414) });
        };

        const debouncedCompute = () => {
            if (resizeTimeout) clearTimeout(resizeTimeout);
            resizeTimeout = window.setTimeout(compute, 150);
        };

        compute();
        window.addEventListener('resize', debouncedCompute);
        return () => {
            window.removeEventListener('resize', debouncedCompute);
            if (resizeTimeout) clearTimeout(resizeTimeout);
        };
    }, []);

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    };

    const nextFlip = useCallback(() => {
        book.current?.pageFlip?.().flipNext();
    }, []);

    const prevFlip = useCallback(() => {
        book.current?.pageFlip?.().flipPrev();
    }, []);

    const goToPage = useCallback((page: number) => {
        book.current?.pageFlip?.().flip(page - 1);
    }, []);

    const onFlip = useCallback((e: any) => {
        setCurrentPage(e.data);
    }, []);

    return (
        <div className="interactive-book-container">
            <div className="book-stage">

                <aside className="book-sidebar-left">
                    <div className="book-cover-thumb">
                        <img src={portada1} alt="Portada 1" />
                    </div>
                    <div className="book-cover-thumb">
                        <img src={portada2} alt="Portada 2" />
                    </div>
                    <div className="book-cover-thumb">
                        <img src={portada3} alt="Portada 3" />
                    </div>
                </aside>


                <div className="book-center" ref={centerRef}>
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
                                maxWidth={550}
                                minHeight={280}
                                maxHeight={780}
                                drawShadow={true}
                                flippingTime={850}
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
                                {Array.from({ length: numPages }, (_, i) => {
                                    const pageNum = i + 1;
                                    return (
                                        <div key={`p${pageNum}`} className="book-page-container">
                                            <Page
                                                pageNumber={pageNum}
                                                width={pageSize.w}
                                                renderAnnotationLayer={false}
                                                renderTextLayer={false}
                                                renderMode="canvas"
                                                className="book-page-content"
                                            />
                                            <span className="page-number">{pageNum}</span>
                                        </div>
                                    );
                                })}
                            </HTMLFlipBook>
                        )}
                    </Document>

                    {numPages > 0 && (
                        <div className="book-controls">
                            <button onClick={prevFlip} className="book-nav-button" aria-label="Anterior">
                                ‹
                            </button>
                            <span className="book-page-indicator">
                                {currentPage + 1} / {numPages}
                            </span>
                            <button onClick={nextFlip} className="book-nav-button" aria-label="Siguiente">
                                ›
                            </button>
                        </div>
                    )}

                    <p className="book-cta">
                        ¿Quieres seguir leyendo?{' '}
                        <a href={loginUrl}>Inicia sesión…</a>
                    </p>
                </div>

                <aside className="book-sidebar-right">
                    <h2 className="toc-title">Índice</h2>
                    {(() => {
                        const nodes: React.ReactNode[] = [];
                        let lastSection = '';
                        toc.forEach((entry, i) => {
                            if (entry.section && entry.section !== lastSection) {
                                lastSection = entry.section;
                                nodes.push(
                                    <p key={`s${i}`} className="toc-section-title">
                                        {entry.section}
                                    </p>
                                );
                            }
                            nodes.push(
                                <ul key={`u${i}`} className="toc-list">
                                    <li onClick={() => goToPage(entry.page)}>
                                        {entry.label}
                                    </li>
                                </ul>
                            );
                        });
                        return nodes;
                    })()}
                </aside>

            </div>
        </div>
    );
};

export default React.memo(InteractiveBook);