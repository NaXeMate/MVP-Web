import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Home from './Routes/Home';
import Libros from './Routes/Libros';


const router = createBrowserRouter([
  {
    path: '/',

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'enciclopedia',

      },
      {
        path: 'libros',
        element: <Libros />,
      },
      {
        path: 'universo',
        element: <Navigate to="/enciclopedia" replace />,
      },
      {
        path: 'personajes',
        element: <Navigate to="/enciclopedia" replace />,
      },
      {
        path: 'musica',
        element: <Navigate to="/" replace />,
      },
    ]
  },
  {
    path: '*',
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
