import HeaderComponent from '../Components/header';
import BookCarousel from '../Components/BookCarousel';
import { useState, useEffect } from 'react';
import type { Libro } from '../types';
import portada1 from '../assets/Portada1.jpeg';

function Home() {

const [libros, setLibros] = useState<Libro[]>([]);
    useEffect(() => {
        const LibrosEscritos: Libro[] = [
            {
                id: 1,
                titulo: "Memorias de un Viaje Pokémon",
                autor: "Mateo Quintela Trillo",
                descripcion: "Un viaje épico a través del mundo Pokémon lleno de aventuras inolvidables",
                portada: portada1,
                paginas: 3000
            },
            {
                id: 2,
                titulo: "Harry Potter y la Piedra Filosofal",
                autor: "J.K. Rowling",
                descripcion: "Un joven mago descubre su destino en el mundo mágico",
                portada: "https://via.placeholder.com/200x300/ff6b9d/ffffff?text=Harry+Potter",
                paginas: 223,
            },
            {
                id: 3,
                titulo: "Cien años de soledad",
                autor: "Gabriel García Márquez",
                descripcion: "La historia legendaria de la familia Buendía a través de generaciones",
                portada: "https://via.placeholder.com/200x300/4ecdc4/ffffff?text=Cien+Años",
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
            </main>
        </div>
    );
}

export default Home;
