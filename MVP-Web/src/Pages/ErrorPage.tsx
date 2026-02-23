import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import "./css/ErrorPage.css";

function ErrorPage() {
  const error = useRouteError();

  let errorMessage: string;
  let errorStatus: number | string = "Error";

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorMessage = error.statusText || error.data?.message || "Algo salió mal";
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else {
    errorMessage = "Ha ocurrido un error desconocido";
  }

  return (
    <div className="error-page">
      <div className="error-container">
        <div className="error-status">{errorStatus}</div>

        <h1 className="error-title">¡Vaya! Algo salió mal</h1>

        <p className="error-message">{errorMessage}</p>

        <Link to="/" className="error-home-link">
          Volver al inicio
        </Link>

        {error instanceof Error && import.meta.env.DEV && (
          <details className="error-details">
            <summary className="error-summary">Ver detalles técnicos</summary>
            <pre className="error-pre">{error.stack}</pre>
          </details>
        )}
      </div>
    </div>
  );
}

export default ErrorPage;
