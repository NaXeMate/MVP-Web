import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Root from "./Routes/Root";
import NotFoundPage from "./Pages/NotFoundPage";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Routes/Home";
import Enciclopedia from "./Routes/Enciclopedia";
import Libros from "./Routes/Libros";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "enciclopedia",
        element: <Enciclopedia />,
      },
      {
        path: "libros",
        element: <Libros />,
      },
      {
        path: "universo",
        element: <Navigate to="/enciclopedia" replace />,
      },
      {
        path: "personajes",
        element: <Navigate to="/enciclopedia" replace />,
      },
      {
        path: "musica",
        element: <Navigate to="/" replace />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
