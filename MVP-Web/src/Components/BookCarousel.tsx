import { useState } from 'react';
import type { Libro } from '../types';
import './css/BookCarousel.css';

interface BookCarouselProps {
    libros: Libro[];
}

function BookCarousel({ libros }: BookCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const TotalLibros = libros.length;
    const anguloPorLibro = 360 / TotalLibros;
    const radio = 360;

    // Función para ir al libro anterior
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? libros.length - 1 : prevIndex - 1
        );
    };

    // Función para ir al libro siguiente 
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === libros.length - 1 ? 0 : prevIndex + 1
        );
    };

    const getCurrentBook = () => libros[currentIndex];

    const getPreviousBook = () => {
        const prevIndex = currentIndex === 0 ? libros.length - 1 : currentIndex - 1;
        return libros[prevIndex];
    };

    const getNextBook = () => {
        const nextIndex = currentIndex === libros.length - 1 ? 0 : currentIndex + 1;
        return libros[nextIndex];
    };

    const handleGoToBook = (index: number) => {
        setCurrentIndex(index);
    };

    const currentBook = getCurrentBook();
    const previousBook = getPreviousBook();
    const nextBook = getNextBook();

    const rotacionActual = currentIndex * anguloPorLibro;

    return (
        <section className='carousel-container'>
            <article className='carousel-wrapper'>
                <button className='carousel-button carousel-button-prev' onClick={handlePrevious} aria-label='Libro anterior'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="200" height="200">
                        <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
                            fill="#000000"
                            stroke="none" />
                    </svg>
                </button>
                <div className='books-scene'>
                    <div className='books-cylinder' style={{ transform: `rotateY(${-rotacionActual}deg)` }}>
                        {libros.map((libros, index) => {
                            const angulo = index * anguloPorLibro;
                            const esActivo = index === currentIndex;
                            const escala = esActivo ? 1.1 : 0.85;

                            return (
                                <div key={libros.id || index} className={`book-card ${esActivo ? 'book-active' : ''}`} style={{ transform: `rotateY(${angulo}deg) translateZ(${radio}px) scale(${escala})` }} onClick={() => handleGoToBook(index)}>
                                    <div className='book-cover'>
                                        <img src={libros.portada} alt={libros.titulo} />
                                    </div>
                                    <div className='book-title-window'>
                                        <h3>{libros.titulo}</h3>
                                        <p>{libros.descripcion}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <button className='carousel-button carousel-button-next' onClick={handleNext} aria-label='Siguiente libro'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="200" height="200">
                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
                            fill="#000000"
                            stroke="none" />
                    </svg>
                </button>
            </article>

        </section>
    )
}

export default BookCarousel;

