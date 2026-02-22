import { Link, useLocation } from "react-router-dom";
import HeaderSeparator from "./Common/HeaderSeparator";
import HeaderLogin from "./Common/HeaderLogin";
import Logo from "../assets/Brand_Logos/Logo_Header.png";
import "./css/Header.css";

function HeaderComponent() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="header-container">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <span>
                <img
                  src={Logo}
                  alt="Logo Memorias de un Viaje Pokémon"
                  className="logo-icon"
                />
              </span>
            </Link>

            {/* Navegación centrada */}
            <ul>
              <li>
                <Link to="/" className={`${isActive("/") ? "active" : ""}`}>
                  Libros
                </Link>
              </li>

              <HeaderSeparator />

              <li>
                <Link
                  to="/enciclopedia"
                  className={`${isActive("/enciclopedia") ? "active" : ""}`}
                >
                  Universo
                </Link>
              </li>

              <HeaderSeparator />

              <li>
                <Link to="/personajes">Personajes</Link>
              </li>

              <HeaderSeparator />

              <li>
                <Link to="/musica">Música</Link>
              </li>
            </ul>

            {/* Login */}
            <HeaderLogin />
          </div>
        </nav>
      </header>
    </>
  );
}

export default HeaderComponent;
