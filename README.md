# Memorias de un Viaje Pokémon (MVP Web)

## Descripción General

"Memorias de un Viaje Pokémon" es una aplicación web interactiva diseñada como un MVP (Producto Mínimo Viable). Su objetivo principal es ofrecer a los usuarios un portal inmersivo para explorar contenido enciclopédico sobre una historia original en el universo Pokémon, así como disfrutar de material interactivo de lectura.

La página está diseñada cuidando meticulosamente la interfaz y la experiencia de usuario, siendo completamente responsiva y visualmente atractiva.

## Características Principales

- **Inicio:** Página principal con una vista general del proyecto y exploración rápida.
- **Enciclopedia:** Una sección detallada con un buscador integrado para explorar personajes y secciones del universo. Incluye modales interactivos para ver información profunda.
- **Libros Interactivos:** Una experiencia de lectura inmersiva que utiliza animaciones reales de "pasar página" y renderizado de archivos PDF.
- **Sistema de Acceso:** Modal de inicio de sesión integrado de forma fluida en la navegación.
- **Diseño Responsivo (Mobile-First):** Interfaz adaptada completamente a dispositivos móviles, tablets y escritorio, con menú hamburguesa y redimensionamiento inteligente.
- **Manejo de Errores:** Páginas personalizadas y estéticas para errores 404 (Página no encontrada) y rutas desconocidas.

## Tecnologías y Herramientas Utilizadas

El proyecto está construido sobre un stack moderno en el ecosistema de frontend:

- **Librería Principal:** [React 19](https://react.dev/) combinado de manera estricta con **TypeScript** para un código seguro y escalable.
- **Enrutables:** [React Router v7](https://reactrouter.com/) para una configuración de rutas SPA (Single Page Application) sin recargas.
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) trabajando en sinergia con módulos de CSS tradicionales para animaciones complejas y variables visuales ricas (tonos dorados, dark mode, etc).
- **Herramienta de Construcción:** [Vite](https://vitejs.dev/) para un servidor de desarrollo ultra-rápido y empaquetado dinámico.
- **Interactividad Especializada:**
  - `react-pageflip`: Para emular la física de pasos de hojas en la sección Libros.
  - `react-pdf`: Para el renderizado e incrustación nativa de documentos.

## Instalación y Uso Local

Para correr este proyecto en tu entorno de desarrollo local, sigue estos pasos:

1. **Clona este repositorio o descarga la carpeta fuente:**

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd MVP-Web
   ```

2. **Instala las dependencias de Node.js:**
   Asegúrate de tener instalado [Node.js](https://nodejs.org/) previamente.

   ```bash
   npm install
   ```

3. **Inicia el servidor en modo desarrollo:**

   ```bash
   npm run dev
   ```

4. **¡Disfruta explorando!**
   Abre tu navegador (preferiblemente Chrome o Firefox) y visita `http://localhost:5173/`.

## Estructura del Proyecto (Vista General)

- `src/Routes/` & `src/Pages/`: Contienen las vistas clave como Inicio, Enciclopedia, Libros y gestión de Errores.
- `src/Components/`: Componentes modulares y reutilizables (Headers, Modales, Botones, Carruseles).
- `src/assets/`: Repositorio local de archivos multimedia (imágenes de la enciclopedia, cubiertas y documentos).
