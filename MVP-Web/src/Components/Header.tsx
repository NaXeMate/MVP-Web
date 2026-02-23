import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import HeaderSeparator from "./Common/HeaderSeparator";
import HeaderLogin from "./Common/HeaderLogin";
import Logo from "../assets/Brand_Logos/Logo_Header.png";
import "./css/Header.css";

function HeaderComponent() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close the menu automatically whenever the route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
                  alt="Logo Memorias de un Viaje Pokémon"
                  className="logo-icon"
                />
              </span>
            </Link>

            {/* Toggle Button for Mobile */}
            <button
              className="hamburger-btn md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                // Close icon
                <svg
                  xmlns="http://www.w3.org/Web/SVG"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  style={{
                    width: "2rem",
                    height: "2rem",
                    color: "var(--second-text)",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  xmlns="http://www.w3.org/Web/SVG"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  style={{
                    width: "2rem",
                    height: "2rem",
                    color: "var(--second-text)",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>

            {/* Navegación centrada (Desktop) */}
            <div className="hidden md:flex nav-links-container">
              <ul>
                <li>
                  <Link to="/" className={`${isActive("/") ? "active" : ""}`}>
                    Inicio
                  </Link>
                </li>

                <HeaderSeparator />

                <li>
                  <Link
                    to="/enciclopedia"
                    className={`${isActive("/enciclopedia") ? "active" : ""}`}
                  >
                    Enciclopedia
                  </Link>
                </li>

                <HeaderSeparator />

                <li>
                  <Link to="/libros">Libros</Link>
                </li>
              </ul>
            </div>

            {/* Login (Desktop) */}
            <div className="hidden md:block login-container">
              <HeaderLogin />
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <Link
                  to="/"
                  className={`${isActive("/") ? "active" : ""}`}
                  onClick={closeMenu}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/enciclopedia"
                  className={`${isActive("/enciclopedia") ? "active" : ""}`}
                  onClick={closeMenu}
                >
                  Enciclopedia
                </Link>
              </li>
              <li>
                <Link to="/libros" onClick={closeMenu}>
                  Libros
                </Link>
              </li>
              <li className="mobile-login" onClick={closeMenu}>
                <HeaderLogin />
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default HeaderComponent;
