import { Link } from "react-router-dom";
import "./css/NotFoundPage.css";

function NotFoundPage() {
  return (
    <div className="notfound-page">
      <div className="notfound-container">
        <div className="notfound-status">404</div>

        <h1 className="notfound-title">Página no encontrada</h1>

        <p className="notfound-description">
          Parece que esta ruta no existe en el mapa de Hakaru. Te sugerimos
          volver al inicio para continuar tu aventura.
        </p>

        <div className="notfound-actions">
          <Link to="/" className="notfound-link-primary">
            Ir al inicio
          </Link>

          <Link to="/enciclopedia" className="notfound-link-secondary">
            Ver Enciclopedia
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
