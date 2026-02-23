import { useState, useEffect } from "react";
import type { Pokemon } from "../types";
import EncyclopediaCarousel, {
  type CarouselItem,
} from "../Components/EncyclopediaCarousel";

import Fuego from "../assets/Types-classes/Tipo_Fuego.png";
import Volador from "../assets/Types-classes/Tipo_Volador.png";
import Acero from "../assets/Types-classes/Tipo_Acero.png";
import Lucha from "../assets/Types-classes/Tipo_Lucha.png";
import Fantasma from "../assets/Types-classes/Tipo_Fantasma.png";

import Marea from "../assets/Types-classes/Clase_Marea.png";
import Armadura from "../assets/Types-classes/Clase_Armadura.png";
import Calcinante from "../assets/Types-classes/Clase_Calcinante.png";
import Misterio from "../assets/Types-classes/Clase_Misterio.png";

import Pokemon_1 from "../assets/Pokemon/Charizard.png";
import Pokemon_2 from "../assets/Pokemon/Dewott_Hakaru.png";
import Pokemon_3 from "../assets/Pokemon/Lucario.png";
import Pokemon_4 from "../assets/Pokemon/Rapidash_Hakaru_Sur.png";
import Pokemon_5 from "../assets/Pokemon/Ceruledge.png";

import MegaCharizardX from "../assets/Pokemon/Mega-Evolutions/Mega-Charizard_X.png";
import MegaCharizardY from "../assets/Pokemon/Mega-Evolutions/Mega-Charizard_Y.png";
import MegaCharizardZ from "../assets/Pokemon/Mega-Evolutions/Mega-Charizard_ Z.png";
import MegaLucario from "../assets/Pokemon/Mega-Evolutions/Mega-Lucario.png";
import MegaLucarioZ from "../assets/Pokemon/Mega-Evolutions/Mega-Lucario_Z.png";

import NateImg from "../assets/Characters/Nate.png";
import EthelImg from "../assets/Characters/Ethel_Final.png";
import FreyaImg from "../assets/Characters/Freya_Final.png";
import RueImg from "../assets/Characters/Rue_Final.png";
import ChloeImg from "../assets/Characters/Chloe - Art (MVP II).png";

import LogoTextoLateral from "../assets/Brand_Logos/Logo_Texto_Lateral.png";

import AcademiaSolera from "../assets/World/Academia Solera.png";
import Colgante from "../assets/World/Colgante.png";
import EmblemaImperial from "../assets/World/Emblema Imperial.png";
import EmblemaCaballeros from "../assets/World/Emblema_ Caballeros.png";
import LibroAreaZero from "../assets/World/Libro Área Zero.png";

import Modal from "../Components/Modal";
import { SeeMoreButton } from "../Components/Common/SeeMoreButton";

function Encyclopedia() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const PokemonDestacados: Pokemon[] = [
      {
        id: 1,
        numPokedex: 3,
        imageUrl: Pokemon_1,
        nombre: "Charizard",
        descripcion:
          "Tras tanto combatir, se ha fortalecido sobremanera, desarrollando un poderoso par de alas y un gran cuello. Su actitud con respecto a su estado anterior ha cambiado, volviéndose más respetuoso y teniendo un fuerte sentido del honor en combate que lo lleva a querer mejorar constantemente.",
        tipos: {
          tipo1: Fuego,
          tipo2: Volador,
        },
        habilidades: {
          habilidad1: "Mar Llamas",
          habilidadOculta: "Poder Solar",
          habilidadEspecial: "Dracoignición",
        },
        formaRegional: false,
        megaevolucion1: MegaCharizardX,
        megaevolucion2: MegaCharizardY,
        megaevolucion3: MegaCharizardZ,
        legendario: false,
        singular: false,
      },
      {
        id: 2,
        numPokedex: 60,
        imageUrl: Pokemon_2,
        nombre: "Dewott de Hakaru",
        descripcion:
          "Los Oshawott que vivían en Hakaru se aliaron con los Aggron, de forma que estos les entregaban placas de sus armaduras cuando las mudaban. Con estas piezas, el evolucionar, los Dewott comenzaron a adoptar esta forma, en la que obtenían propiedades del metal de la piel de los Aggron.",
        tipos: {
          tipo1: Marea,
          tipo2: Armadura,
        },
        habilidades: {
          habilidad1: "Coraza Marina",
          habilidadOculta: "Cortante",
        },
        formaRegional: true,
        megaevolucion1: false,
        megaevolucion2: false,
        megaevolucion3: false,
        legendario: false,
        singular: false,
      },
      {
        id: 3,
        numPokedex: 69,
        imageUrl: Pokemon_3,
        nombre: "Lucario",
        descripcion:
          "Desde tiempos inmemoriales, adalides de la justicia, los Lucario han usado sus poderes para el bien. Dominan una energía muy poderosa conocida como Aura, que perciben mediante los apéndices de su cabeza y que utilizan para potenciar sus movimientos y prever los de los rivales, entre otras cosas.",
        tipos: {
          tipo1: Lucha,
          tipo2: Acero,
        },
        habilidades: {
          habilidad1: "Impasible",
          habilidad2: "Fuerza Mental",
          habilidadOculta: "Justiciero",
          habilidadEspecial: "Aura Ancestral",
        },
        formaRegional: true,
        megaevolucion1: MegaLucario,
        megaevolucion2: MegaLucarioZ,
        megaevolucion3: false,
        legendario: false,
        singular: false,
      },
      {
        id: 4,
        numPokedex: 73,
        imageUrl: Pokemon_4,
        nombre: "Rapidash de Hakaru (Variedad Sur)",
        descripcion:
          "Esta es la variedad de Rapidash más rápida jamás registrada. Usando sus poderes psíquicos, es capaz de impulsarse en el aire por breves períodos de tiempo, y con las crines de sus patas puede chamuscar la hierba y correr hasta alcanzar los 300 km/h.",
        tipos: {
          tipo1: Misterio,
          tipo2: Calcinante,
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
        singular: false,
      },
      {
        id: 5,
        numPokedex: 58,
        imageUrl: Pokemon_5,
        nombre: "Ceruledge",
        descripcion:
          "Las piezas de la armadura que porta pertenecían a caballeros caídos en combate hace mucho tiempo. A falta de sus espadas, Ceruledge envuelve sus manos en láminas de fuego que puede extender a voluntad para provocar heridas graves a sus oponentes.",
        tipos: {
          tipo1: Fuego,
          tipo2: Fantasma,
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
        singular: false,
      },
    ];

    setPokemon(PokemonDestacados);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Buscando:", searchTerm);
  };

  const personajesPlaceholder: CarouselItem[] = [
    { id: "p1", nombre: "Nate", imageUrl: NateImg },
    { id: "p2", nombre: "Ethel", imageUrl: EthelImg },
    { id: "p3", nombre: "Freya", imageUrl: FreyaImg },
    { id: "p4", nombre: "Rue", imageUrl: RueImg },
    { id: "p5", nombre: "Chloe", imageUrl: ChloeImg },
  ];

  const universoPlaceholder: CarouselItem[] = [
    { id: "u1", nombre: "Academia Solera", imageUrl: AcademiaSolera },
    { id: "u2", nombre: "Colgante", imageUrl: Colgante },
    { id: "u3", nombre: "Emblema Imperial", imageUrl: EmblemaImperial },
    { id: "u4", nombre: "Emblema Caballeros", imageUrl: EmblemaCaballeros },
    { id: "u5", nombre: "Libro Área Zero", imageUrl: LibroAreaZero },
  ];

  return (
    <>
      <main
        className="min-h-screen pb-16"
        style={{ backgroundColor: "var(--background)" }}
      >
        {/* Banner Hero */}
        <section
          className="relative py-12 flex justify-center items-center"
          style={{
            paddingInline: "clamp(3rem, 8vw, 9rem)",
            background: "var(--searching-background)",
          }}
        >
          <div className="relative w-full max-w-[700px] mx-auto flex flex-col">
            <img
              src={LogoTextoLateral}
              alt="Memorias de un Viaje Pokémon"
              className="w-full h-auto drop-shadow-xl"
            />

            {/* Buscador */}
            <div className="absolute bottom-[12%] right-[3%] w-[45%] md:w-[48%] flex items-center justify-center">
              <form onSubmit={handleSearch} className="w-full">
                <div
                  className="flex items-center w-full shadow-md overflow-hidden"
                  style={{
                    backgroundColor: "#cca640",
                    border: "1.5px solid #2f281e",
                    borderRadius: "1rem",
                  }}
                >
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="BUSCADOR..."
                    className="w-full px-4 py-1.5 md:py-2 text-sm md:text-base focus:outline-none bg-transparent placeholder-[#4a3b26]"
                    style={{
                      fontFamily: "var(--ui-elements-text)",
                      color: "#1a1614",
                    }}
                  />

                  {/* Vertical Separator */}
                  <div
                    className="w-[1.5px] self-stretch"
                    style={{ backgroundColor: "#2f281e" }}
                  ></div>

                  <button
                    type="submit"
                    className="w-12 h-10 md:h-11 flex items-center justify-center shrink-0 transition-colors hover:opacity-90"
                    style={{ backgroundColor: "var(--accent-golden-pale)" }}
                    aria-label="Buscar"
                  >
                    <svg
                      className="w-5 h-5 text-[#1a1614]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Text Section */}
        <section
          className="text-center"
          style={{
            paddingInline: "clamp(3rem, 8vw, 9rem)",
            paddingTop: "clamp(3rem, 4vw, 4.5rem)",
            paddingBottom: "clamp(3rem, 4vw, 4.5rem)",
          }}
        >
          <h1
            className="mb-4"
            style={{
              fontFamily: "var(--medieval-title-h1)",
              fontSize: "48px",
              color: "var(--body-text)",
            }}
          >
            Enciclopedia
          </h1>
          <p
            className="mx-auto italic"
            style={{
              fontFamily: "var(--emphasis-italic)",
              color: "var(--body-text)",
              fontSize: "18px",
              lineHeight: "1.7",
            }}
          >
            Un compendio de toda la investigación que Nate y Ethel realizaron
            <br />
            durante todos sus viajes...
          </p>
        </section>

        {/* Carruseles */}
        <section
          style={{
            paddingInline: "clamp(3rem, 8vw, 9rem)",
            paddingBottom: "clamp(4rem, 7vw, 7rem)",
          }}
        >
          <div
            className="mx-auto"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(4rem, 8vw, 8rem)",
            }}
          >
            {/* Sección Pokémon */}
            <div>
              <div
                className="flex justify-between items-center"
                style={{ marginBottom: "clamp(1.5rem, 3vw, 2.5rem)" }}
              >
                <h2
                  style={{
                    fontFamily: "var(--subsection-h2)",
                    color: "var(--body-text)",
                    fontSize: "24px",
                    fontWeight: 700,
                  }}
                >
                  Pokémon
                </h2>
                <SeeMoreButton />
              </div>

              {pokemon.length > 0 && (
                <EncyclopediaCarousel
                  items={pokemon}
                  onCardClick={(item) => setSelectedPokemon(item as Pokemon)}
                />
              )}
            </div>

            {/* Sección Personajes */}
            <div>
              <div
                className="flex justify-between items-center"
                style={{ marginBottom: "clamp(1.5rem, 3vw, 2.5rem)" }}
              >
                <h2
                  style={{
                    fontFamily: "var(--subsection-h2)",
                    color: "var(--body-text)",
                    fontSize: "24px",
                    fontWeight: 700,
                  }}
                >
                  Personajes
                </h2>
                <SeeMoreButton />
              </div>

              <EncyclopediaCarousel
                items={personajesPlaceholder}
                imageMaxHeight="400px"
              />
            </div>

            {/* Sección Universo */}
            <div>
              <div
                className="flex justify-between items-center"
                style={{ marginBottom: "clamp(1.5rem, 3vw, 2.5rem)" }}
              >
                <h2
                  style={{
                    fontFamily: "var(--subsection-h2)",
                    color: "var(--body-text)",
                    fontSize: "24px",
                    fontWeight: 700,
                  }}
                >
                  Universo
                </h2>
                <SeeMoreButton />
              </div>

              <EncyclopediaCarousel
                items={universoPlaceholder}
                imageMaxHeight="400px"
              />
            </div>
          </div>
        </section>
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

export default Encyclopedia;
