import HeaderComponent from '../Components/header';
import BookCarousel from '../Components/BookCarousel';
import AboutComponent from '../Components/AboutComponent';
import FooterComponent from '../Components/Footer';
import { useState, useEffect } from 'react';
import type { Libro } from '../types';
import portada1 from '../assets/Portada1.jpeg';
import portada2 from "../assets/Portada_MVP_I.png"
import portada3 from "../assets/imagen 1.png"

function Home() {

    const [libros, setLibros] = useState<Libro[]>([]);
    useEffect(() => {
        const LibrosEscritos: Libro[] = [
            {
                id: 1,
                titulo: "La Llamada del Aura",
                autor: "Mateo Quintela Trillo",
                descripcion: "Un viaje épico a través del mundo Pokémon lleno de aventuras inolvidables",
                sinopsis: "",
                portada: portada1,
                paginas: 3000
            },
            {
                id: 2,
                titulo: "Ecos del Comienzo",
                autor: "Mateo Quintela Trillo",
                descripcion: "Un joven mago descubre su destino en el mundo mágico",
                sinopsis: "",
                portada: portada2,
                paginas: 223,
            },
            {
                id: 3,
                titulo: "Descendiente de Hakaru",
                autor: "Gabriel García Márquez",
                descripcion: "La historia legendaria de la familia Buendía a través de generaciones",
                sinopsis: "",
                portada: portada3,
                paginas: 471,
            }
        ];

        setTimeout(() => {
            setLibros(LibrosEscritos);
        }, 500);
    }, []);

    return (
        <div className="home-page">
            <HeaderComponent />
            <main className="home-content">
                {libros.length > 0 && <BookCarousel libros={libros} />}
                <AboutComponent></AboutComponent>
                <FooterComponent />
            </main>
        </div>
    );
}

export default Home;
