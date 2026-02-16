import { useState } from 'react';
import type { Libro } from '../types';
import './css/BookCarousel.css';
import BackButton from './Common/BackButton';
import ForwardButton from './Common/ForwardButton';

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
                <BackButton 
                    onClick={handlePrevious} 
                    className='carousel-button carousel-button-prev'
                    size={60}
                />
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

                <ForwardButton 
                    onClick={handleNext} 
                    className='carousel-button carousel-button-next'
                    size={60}
                />
            </article>

        </section>
    )
}

export default BookCarousel;

