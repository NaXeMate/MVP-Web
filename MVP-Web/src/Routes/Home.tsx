import BookCarousel from "../Components/BookCarousel";
import AboutComponent from "../Components/AboutComponent";

import { useState, useEffect } from "react";
import type { Libro } from "../types";

import portada1 from "../assets/Books/Portada1.jpeg";
import portada2 from "../assets/Books/Portada_MVP_I.png";
import portada3 from "../assets/Books/imagen 1.png";

function Home() {
  const [libros, setLibros] = useState<Libro[]>([]);
  useEffect(() => {
    const LibrosEscritos: Libro[] = [
      {
        id: 1,
        titulo: "La Llamada del Aura",
        autor: "Mateo Quintela Trillo",
        descripcion:
          "La historia del gran viaje de Nate, donde pasado y presente se entrelazan para forjar el futuro.",
        sinopsis: "",
        portada: portada1,
        paginas: 1939,
      },
      {
        id: 2,
        titulo: "Ecos del Comienzo",
        autor: "Mateo Quintela Trillo",
        descripcion:
          "Descubre la historia del origen de Nate y cómo conoció a Chloe y a sus amigos.",
        sinopsis: "",
        portada: portada2,
        paginas: 1752,
      },
      {
        id: 3,
        titulo: "Descendiente de Hakaru",
        autor: "Mateo Quintela Trillo",
        descripcion:
          "El desenlace de la trilogía de Nate, donde se decidirá su destino y se le pondrá a prueba como nunca antes.",
        sinopsis: "",
        portada: portada3,
        paginas: 0,
      },
    ];

    setTimeout(() => {
      setLibros(LibrosEscritos);
    }, 500);
  }, []);

  return (
    <div className="home-page">
      <main className="home-content">
        {libros.length > 0 && <BookCarousel libros={libros} />}
        <AboutComponent />
      </main>
    </div>
  );
}

export default Home;
