import { useEffect } from 'react';
import type { Pokemon } from '../types';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  pokemon: Pokemon;
}

function Modal({ isOpen, onClose, pokemon }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-(--background-cards) rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition-colors shadow-md z-10"
          aria-label="Cerrar modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
          {/* Header con imagen y datos básicos */}
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            {/* Imagen del Pokémon */}
            <div className="shrink-0">
              <img 
                src={pokemon.imageUrl} 
                alt={pokemon.nombre}
                className="w-64 h-64 object-contain mx-auto"
              />
            </div>

            {/* Información básica */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span 
                  className="text-sm font-mono px-3 py-1 rounded-full"
                  style={{ 
                    backgroundColor: 'var(--accent-golden-pale)',
                    fontFamily: 'var(--data-monospace)',
                    color: 'var(--second-text)'
                  }}
                >
                  #{String(pokemon.numPokedex).padStart(3, '0')}
                </span>
                {pokemon.formaRegional && (
                  <span className="text-xs px-3 py-1 rounded-full bg-(--accent-emerald) text-white font-medium">
                    Forma Regional
                  </span>
                )}
                {pokemon.legendario && (
                  <span className="text-xs px-3 py-1 rounded-full bg-(--accent-golden-decor) text-white font-medium">
                    Legendario
                  </span>
                )}
              </div>

              <h2 
                className="text-4xl mb-4"
                style={{ 
                  fontFamily: 'var(--subsection-h2)',
                  color: 'var(--body-text)'
                }}
              >
                {pokemon.nombre}
              </h2>

              <p 
                className="mb-6"
                style={{ 
                  fontFamily: 'var(--body-text-p)',
                  color: 'var(--second-text)',
                  lineHeight: '1.7'
                }}
              >
                {pokemon.descripcion}
              </p>

              {/* Tipos */}
              <div className="mb-6">
                <h3 
                  className="text-sm font-semibold mb-3"
                  style={{ 
                    fontFamily: 'var(--ui-elements-text)',
                    color: 'var(--second-text)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  Tipos
                </h3>
                <div className="flex gap-3">
                  <img src={pokemon.tipos.tipo1} alt="Tipo 1" className="h-12 w-auto" />
                  {pokemon.tipos.tipo2 && (
                    <img src={pokemon.tipos.tipo2} alt="Tipo 2" className="h-12 w-auto" />
                  )}
                </div>
              </div>

              {/* Habilidades */}
              <div>
                <h3 
                  className="text-sm font-semibold mb-3"
                  style={{ 
                    fontFamily: 'var(--ui-elements-text)',
                    color: 'var(--second-text)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  Habilidades
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-(--accent-aura)"></span>
                    <span style={{ fontFamily: 'var(--body-text-p)', fontSize: '15px' }}>
                      {pokemon.habilidades.habilidad1}
                    </span>
                  </div>
                  {pokemon.habilidades.habilidad2 && (
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-(--accent-aura)"></span>
                      <span style={{ fontFamily: 'var(--body-text-p)', fontSize: '15px' }}>
                        {pokemon.habilidades.habilidad2}
                      </span>
                    </div>
                  )}
                  {pokemon.habilidades.habilidadOculta && (
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-(--accent-golden-decor)"></span>
                      <span style={{ fontFamily: 'var(--body-text-p)', fontSize: '15px' }}>
                        {pokemon.habilidades.habilidadOculta} <span className="text-xs text-gray-500">(Oculta)</span>
                      </span>
                    </div>
                  )}
                  {pokemon.habilidades.habilidadEspecial && (
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-(--accent-pokedex)"></span>
                      <span style={{ fontFamily: 'var(--body-text-p)', fontSize: '15px' }}>
                        {pokemon.habilidades.habilidadEspecial} <span className="text-xs text-gray-500">(Especial)</span>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Características especiales */}
          {(pokemon.megaevolucion1 || pokemon.megaevolucion2 || pokemon.megaevolucion3) && (
            <div className="mt-6 p-4 bg-white/50 rounded-lg">
              <h3 
                className="text-sm font-semibold mb-2"
                style={{ 
                  fontFamily: 'var(--ui-elements-text)',
                  color: 'var(--second-text)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                Megaevoluciones disponibles
              </h3>
              <div className="flex gap-2">
                {pokemon.megaevolucion1 && (
                  <span className="px-3 py-1 bg-(--accent-alt) text-white rounded-full text-sm">
                    Mega I
                  </span>
                )}
                {pokemon.megaevolucion2 && (
                  <span className="px-3 py-1 bg-(--accent-alt) text-white rounded-full text-sm">
                    Mega II
                  </span>
                )}
                {pokemon.megaevolucion3 && (
                  <span className="px-3 py-1 bg-(--accent-alt) text-white rounded-full text-sm">
                    Mega III
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
