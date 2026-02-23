import { useEffect } from "react";
import type { Pokemon } from "../types";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  pokemon: Pokemon;
}

function Modal({ isOpen, onClose, pokemon }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-6 sm:p-8 md:p-12"
      onClick={onClose}
    >
      <div
        className="bg-(--background-cards) rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition-colors shadow-md z-10"
          aria-label="Cerrar modal"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="p-8 pt-20 sm:p-10 sm:pt-24 md:p-12 md:pt-24">
          {/* Header con imagen y datos básicos */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-14 mb-8">
            {/* Imagen del Pokémon y Tipos */}
            <div className="shrink-0 flex flex-col items-center">
              <img
                src={pokemon.imageUrl}
                alt={pokemon.nombre}
                className="w-64 h-64 object-contain mx-auto"
              />
              {/* Tipos */}
              <div className="flex justify-center gap-2 mt-2">
                <img
                  src={pokemon.tipos.tipo1}
                  alt="Tipo 1"
                  className="h-6 w-auto"
                />
                {pokemon.tipos.tipo2 && (
                  <img
                    src={pokemon.tipos.tipo2}
                    alt="Tipo 2"
                    className="h-6 w-auto"
                  />
                )}
              </div>
            </div>

            {/* Información básica */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-sm font-mono px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: "var(--accent-golden-pale)",
                    fontFamily: "var(--data-monospace)",
                    color: "var(--second-text)",
                  }}
                >
                  #{String(pokemon.numPokedex).padStart(3, "0")}
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
                className="text-4xl sm:text-5xl mb-6"
                style={{
                  fontFamily: "var(--subsection-h2)",
                  color: "var(--body-text)",
                }}
              >
                {pokemon.nombre}
              </h2>

              <p
                className="mb-8 text-lg"
                style={{
                  fontFamily: "var(--body-text-p)",
                  color: "var(--second-text)",
                  lineHeight: "1.8",
                }}
              >
                {pokemon.descripcion}
              </p>

              {/* Habilidades */}
              <div>
                <h3
                  className="text-sm font-semibold mb-3"
                  style={{
                    fontFamily: "var(--ui-elements-text)",
                    color: "var(--second-text)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Habilidades
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-(--accent-aura)"></span>
                    <span
                      style={{
                        fontFamily: "var(--body-text-p)",
                        fontSize: "15px",
                      }}
                    >
                      {pokemon.habilidades.habilidad1}
                    </span>
                  </div>
                  {pokemon.habilidades.habilidad2 && (
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-(--accent-aura)"></span>
                      <span
                        style={{
                          fontFamily: "var(--body-text-p)",
                          fontSize: "15px",
                        }}
                      >
                        {pokemon.habilidades.habilidad2}
                      </span>
                    </div>
                  )}
                  {pokemon.habilidades.habilidadOculta && (
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-(--accent-golden-decor)"></span>
                      <span
                        style={{
                          fontFamily: "var(--body-text-p)",
                          fontSize: "15px",
                        }}
                      >
                        {pokemon.habilidades.habilidadOculta}{" "}
                        <span className="text-xs text-gray-500">(Oculta)</span>
                      </span>
                    </div>
                  )}
                  {pokemon.habilidades.habilidadEspecial && (
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-(--accent-pokedex)"></span>
                      <span
                        style={{
                          fontFamily: "var(--body-text-p)",
                          fontSize: "15px",
                        }}
                      >
                        {pokemon.habilidades.habilidadEspecial}{" "}
                        <span className="text-xs text-gray-500">
                          (Especial)
                        </span>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Características especiales */}
          {(pokemon.megaevolucion1 ||
            pokemon.megaevolucion2 ||
            pokemon.megaevolucion3) && (
            <div className="mt-8 pt-6 border-t border-black/5">
              <h3
                className="text-sm font-semibold mb-4"
                style={{
                  fontFamily: "var(--ui-elements-text)",
                  color: "var(--second-text)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Megaevoluciones disponibles
              </h3>
              <div className="flex flex-wrap gap-6">
                {pokemon.megaevolucion1 && (
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 bg-black/5 rounded-xl flex items-center justify-center p-2">
                      <img
                        src={pokemon.imageUrl}
                        alt="Mega I"
                        className="w-full h-full object-contain grayscale opacity-60"
                      />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                      Mega I
                    </span>
                  </div>
                )}
                {pokemon.megaevolucion2 && (
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 bg-black/5 rounded-xl flex items-center justify-center p-2">
                      <img
                        src={pokemon.imageUrl}
                        alt="Mega II"
                        className="w-full h-full object-contain grayscale opacity-60"
                      />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                      Mega II
                    </span>
                  </div>
                )}
                {pokemon.megaevolucion3 && (
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 bg-black/5 rounded-xl flex items-center justify-center p-2">
                      <img
                        src={pokemon.imageUrl}
                        alt="Mega III"
                        className="w-full h-full object-contain grayscale opacity-60"
                      />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                      Mega III
                    </span>
                  </div>
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
