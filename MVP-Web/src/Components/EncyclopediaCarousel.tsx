import { useState, useEffect, useCallback } from "react";
import BackButton from "./Common/BackButton";
import ForwardButton from "./Common/ForwardButton";

export interface CarouselItem {
  id: number | string;
  imageUrl: string;
  nombre: string;
  numPokedex?: number;
}

interface EncyclopediaCarouselProps {
  items: CarouselItem[];
  onCardClick?: (item: any) => void;
  imageMaxHeight?: string;
}

function useItemsPerPage() {
  const getCount = () => {
    const w = window.innerWidth;
    if (w >= 1280) return 5; // xl+
    if (w >= 768) return 3; // md+
    return 1; // mobile
  };

  const [count, setCount] = useState(getCount);

  useEffect(() => {
    let timeout: number;
    const onResize = () => {
      clearTimeout(timeout);
      timeout = window.setTimeout(() => setCount(getCount()), 150);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(timeout);
    };
  }, []);

  return count;
}

function EncyclopediaCarousel({
  items,
  onCardClick,
  imageMaxHeight,
}: EncyclopediaCarouselProps) {
  const itemsPerPage = useItemsPerPage();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex((prev) => {
      if (prev >= items.length) return 0;
      return prev;
    });
  }, [itemsPerPage, items.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= items.length ? 0 : prev + itemsPerPage,
    );
  }, [itemsPerPage, items.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0
        ? Math.max(0, items.length - itemsPerPage)
        : Math.max(0, prev - itemsPerPage),
    );
  }, [itemsPerPage, items.length]);

  const visibleItems = items.slice(currentIndex, currentIndex + itemsPerPage);

  const gridClass =
    itemsPerPage === 5
      ? "grid-cols-5"
      : itemsPerPage === 3
        ? "grid-cols-3"
        : "grid-cols-1";

  return (
    <div className="relative">
      <div className="flex items-center gap-6">
        {/* Botón anterior */}
        <BackButton
          onClick={prevSlide}
          className="shrink-0 transition-transform"
          size={48}
        />

        {/* Tarjetas */}
        <div className={`flex-1 grid ${gridClass} gap-6`}>
          {visibleItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onCardClick && onCardClick(item)}
              className="bg-(--background-cards) rounded-2xl p-6 cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-(--accent-golden-pale) flex flex-col h-full"
            >
              <div
                className="aspect-square flex items-center justify-center mb-4 w-full"
                style={
                  imageMaxHeight ? { maxHeight: imageMaxHeight } : undefined
                }
              >
                <img
                  src={item.imageUrl}
                  alt={item.nombre}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="mt-auto flex flex-col items-center w-full">
                <h3
                  className="text-center text-lg font-semibold"
                  style={{
                    fontFamily: "var(--third-section-h3)",
                    color: "var(--body-text)",
                  }}
                >
                  {item.nombre}
                </h3>
                {item.numPokedex !== undefined && (
                  <p
                    className="text-center text-sm mt-1"
                    style={{
                      fontFamily: "var(--data-monospace)",
                      color: "var(--second-text)",
                    }}
                  >
                    #{String(item.numPokedex).padStart(3, "0")}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Botón siguiente */}
        <ForwardButton
          onClick={nextSlide}
          className="shrink-0 transition-transform"
          size={48}
        />
      </div>
    </div>
  );
}

export default EncyclopediaCarousel;
