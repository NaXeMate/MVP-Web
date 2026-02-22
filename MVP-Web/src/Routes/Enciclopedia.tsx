import { useState, useEffect } from 'react'; 
import type { Pokemon } from '../types';

import Fuego from '../assets/Types-classes/Tipo_Fuego.png';
import Volador from '../assets/Types-classes/Tipo_Volador.png';
import Acero from '../assets/Types-classes/Tipo_Acero.png';
import Lucha from '../assets/Types-classes/Tipo_Lucha.png';
import Fantasma from '../assets/Types-classes/Tipo_Fantasma.png';

import Marea from '../assets/Types-classes/Clase_Marea.png';
import Armadura from '../assets/Types-classes/Clase_Armadura.png';
import Calcinante from '../assets/Types-classes/Clase_Calcinante.png';
import Misterio from '../assets/Types-classes/Clase_Misterio.png';

import Pokemon_1 from '../assets/Pokemon/Charizard.png';
import Pokemon_2 from '../assets/Pokemon/Dewott_Hakaru.png';
import Pokemon_3 from '../assets/Pokemon/Lucario.png';
import Pokemon_4 from '../assets/Pokemon/Rapidash_Hakaru_Sur.png';
import Pokemon_5 from '../assets/Pokemon/Ceruledge.png';

import Modal from '../Components/Modal';
import PokemonCarousel from '../Components/PokemonCarousel';

// Importa tu escudo/logo
// import EscudoLogo from '../assets/escudo-logo.png';

function Enciclopedia() {
    const [pokemon, setPokemon] = useState<Pokemon[]>([]);
    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    
    useEffect(() => {
        const PokemonDestacados: Pokemon[] = [
            {
                id: 1,
                numPokedex: 3,
                imageUrl: Pokemon_1,
                nombre: "Charizard",
                descripcion: "Tras tanto combatir, se ha fortalecido sobremanera, desarrollando un poderoso par de alas y un gran cuello. Su actitud con respecto a su estado anterior ha cambiado, volviéndose más respetuoso y teniendo un fuerte sentido del honor en combate que lo lleva a querer mejorar constantemente.",
                tipos: {
                    tipo1: Fuego,
                    tipo2: Volador
                },
                habilidades: {
                    habilidad1: "Mar Llamas",
                    habilidadOculta: "Poder Solar",
                    habilidadEspecial: "Dracoignición"
                },
                formaRegional: false,
                megaevolucion1: true,
                megaevolucion2: true,
                megaevolucion3: true,
                legendario: false,
                singular: false
            },
            {
                id: 2,
                numPokedex: 60,
                imageUrl: Pokemon_2,
                nombre: "Dewott de Hakaru",
                descripcion: "Los Oshawott que vivían en Hakaru se aliaron con los Aggron, de forma que estos les entregaban placas de sus armaduras cuando las mudaban. Con estas piezas, el evolucionar, los Dewott comenzaron a adoptar esta forma, en la que obtenían propiedades del metal de la piel de los Aggron.",
                tipos: {
                    tipo1: Marea,
                    tipo2: Armadura
                },
                habilidades: {
                    habilidad1: "Coraza Marina",
                    habilidadOculta: "Cortante"
                },
                formaRegional: true,
                megaevolucion1: false,
                megaevolucion2: false,
                megaevolucion3: false,
                legendario: false,
                singular: false
            },
            {
                id: 3,
                numPokedex: 69,
                imageUrl: Pokemon_3,
                nombre: "Lucario",
                descripcion: "Desde tiempos inmemoriales, adalides de la justicia, los Lucario han usado sus poderes para el bien. Dominan una energía muy poderosa conocida como Aura, que perciben mediante los apéndices de su cabeza y que utilizan para potenciar sus movimientos y prever los de los rivales, entre otras cosas.",
                tipos: {
                    tipo1: Lucha,
                    tipo2: Acero
                },
                habilidades: {
                    habilidad1: "Impasible",
                    habilidad2: "Fuerza Mental",
                    habilidadOculta: "Justiciero",
                    habilidadEspecial: "Aura Ancestral"
                },
                formaRegional: true,
                megaevolucion1: true,
                megaevolucion2: true,
                megaevolucion3: false,
                legendario: false,
                singular: false
            },
            {
                id: 4,
                numPokedex: 73,
                imageUrl: Pokemon_4,
                nombre: "Rapidash de Hakaru (Variedad Sur)",
                descripcion: "Esta es la variedad de Rapidash más rápida jamás registrada. Usando sus poderes psíquicos, es capaz de impulsarse en el aire por breves períodos de tiempo, y con las crines de sus patas puede chamuscar la hierba y correr hasta alcanzar los 300 km/h.",
                tipos: {
                    tipo1: Misterio,
                    tipo2: Calcinante
                },
                habilidades: {
                    habilidad1: "Sequía",
                    habilidadOculta: "Anticipación",
                },
                formaRegional: true,
                megaevolucion1: false,
                megaevolucion2: false,
                megaevolucion3: false,
                legendario: false,
                singular: false
            },
            {
                id: 5,
                numPokedex: 58,
                imageUrl: Pokemon_5,
                nombre: "Ceruledge",
                descripcion: "Las piezas de la armadura que porta pertenecían a caballeros caídos en combate hace mucho tiempo. A falta de sus espadas, Ceruledge envuelve sus manos en láminas de fuego que puede extender a voluntad para provocar heridas graves a sus oponentes.",
                tipos: {
                    tipo1: Fuego,
                    tipo2: Fantasma
                },
                habilidades: {
                    habilidad1: "Absorbe Fuego",
                    habilidadOculta: "Armadura Frágil",
                },
                formaRegional: false,
                megaevolucion1: false,
                megaevolucion2: false,
                megaevolucion3: false,
                legendario: false,
                singular: false
            }
        ];

        setPokemon(PokemonDestacados);
    }, []);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Implementa la lógica de búsqueda aquí
        console.log('Buscando:', searchTerm);
    };

    return (
        <>
            <main className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
                {/* Banner Hero */}
                <section 
                    className="relative py-16 px-4"
                    style={{
                        background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(232, 213, 168, 0.15) 100%)'
                    }}
                >
                    <div className="max-w-7xl mx-auto text-center">
                        {/* Logo/Escudo - Descomenta cuando tengas la imagen */}
                        {/* <img src={EscudoLogo} alt="Escudo" className="w-48 h-auto mx-auto mb-6" /> */}
                        
                        <h1 
                            className="mb-4"
                            style={{ 
                                fontFamily: 'var(--medieval-title-h1)',
                                fontSize: '48px',
                                color: 'var(--body-text)'
                            }}
                        >
                            ENCICLOPEDIA
                        </h1>
                        <p 
                            className="text-xl mb-8 italic"
                            style={{ 
                                fontFamily: 'var(--emphasis-italic)',
                                color: 'var(--second-text)'
                            }}
                        >
                            Memorias de un Viaje Pokémon
                        </p>

                        {/* Buscador */}
                        <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
                          <div className="relative">
                            <input
                              type="text"
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                              placeholder="BUSCADOR..."
                              className="w-full px-6 py-4 pr-14 rounded-full text-lg border-2 focus:outline-none focus:ring-2 transition-all"
                              style={{
                                backgroundColor: 'var(--background-cards)',
                                borderColor: 'var(--accent-golden-pale)',
                                fontFamily: 'var(--ui-elements-text)',
                                color: 'var(--body-text)'
                              }}
                            />
                            <button
                              type="submit"
                              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                              style={{ backgroundColor: 'var(--accent-golden-decor)' }}
                              aria-label="Buscar"
                            >
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                              </svg>
                            </button>
                          </div>
                        </form>
                    </div>
                </section>

                {/* Sección Pokémon */}
                <section className="py-12 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex justify-between items-center mb-8">
                            <h2 
                                style={{ 
                                    fontFamily: 'var(--subsection-h2)',
                                    color: 'var(--body-text)',
                                    fontSize: '24px',
                                    fontWeight: 600
                                }}
                            >
                                Pokémon
                            </h2>
                            <button 
                                className="px-6 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-lg"
                                style={{
                                    backgroundColor: 'var(--accent-golden-pale)',
                                    color: 'var(--second-text)',
                                    fontFamily: 'var(--button-text)',
                                    border: '2px solid var(--accent-golden-decor)'
                                }}
                            >
                                VER MÁS
                            </button>
                        </div>

                        <p 
                            className="mb-8 max-w-3xl"
                            style={{ 
                                fontFamily: 'var(--body-text-p)',
                                color: 'var(--second-text)',
                                fontSize: '15px',
                                lineHeight: '1.7'
                            }}
                        >
                            Un compendio de toda la investigación que Nate y Ethel realizaron durante todos sus viajes...
                        </p>

                        {pokemon.length > 0 && (
                            <PokemonCarousel 
                                pokemons={pokemon} 
                                onCardClick={setSelectedPokemon}
                            />
                        )}
                    </div>
                </section>

                {/* Aquí puedes añadir las secciones de Personajes y Universo con la misma estructura */}
                
            </main>

            {/* Modal */}
            {selectedPokemon && (
                <Modal
                    isOpen={!!selectedPokemon}
                    onClose={() => setSelectedPokemon(null)}
                    pokemon={selectedPokemon}
                />
            )}
        </>
    );
}

export default Enciclopedia;
