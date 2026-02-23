import { useState } from 'react';
import type { Pokemon } from '../types';

interface PokemonCarouselProps {
  pokemons: Pokemon[];
  onCardClick: (pokemon: Pokemon) => void;
}

function PokemonCarousel({ pokemons, onCardClick }: PokemonCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerPage >= pokemons.length ? 0 : prev + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, pokemons.length - itemsPerPage) : Math.max(0, prev - itemsPerPage)
    );
  };

  const visiblePokemons = pokemons.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="relative">
      <div className="flex items-center gap-4">
        {/* Botón anterior */}
        <button
          onClick={prevSlide}
          className="shrink-0 w-12 h-12 rounded-full bg-(--accent-golden-decor) hover:bg-(--accent-golden-pale) transition-colors flex items-center justify-center shadow-lg"
          aria-label="Anterior"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Tarjetas */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
          {visiblePokemons.map((pokemon) => (
            <div
              key={pokemon.id}
              onClick={() => onCardClick(pokemon)}
              className="bg-(--background-cards) rounded-2xl p-6 cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-(--accent-golden-pale)"
            >
              <div className="aspect-square flex items-center justify-center mb-4">
                <img 
                  src={pokemon.imageUrl} 
                  alt={pokemon.nombre}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 
                className="text-center text-lg font-semibold"
                style={{ 
                  fontFamily: 'var(--third-section-h3)',
                  color: 'var(--body-text)'
                }}
              >
                {pokemon.nombre}
              </h3>
              <p 
                className="text-center text-sm mt-1"
                style={{ 
                  fontFamily: 'var(--data-monospace)',
                  color: 'var(--second-text)'
                }}
              >
                #{String(pokemon.numPokedex).padStart(3, '0')}
              </p>
            </div>
          ))}
        </div>

        {/* Botón siguiente */}
        <button
          onClick={nextSlide}
          className="shrink-0 w-12 h-12 rounded-full bg-(--accent-golden-decor) hover:bg-(--accent-golden-pale) transition-colors flex items-center justify-center shadow-lg"
          aria-label="Siguiente"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default PokemonCarousel;
