import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HeaderSeparator from './Common/HeaderSeparator';
import LoginModal from './Common/LoginModal';
import Logo from '../assets/Brand_Logos/Logo_Header.png';
import './css/Header.css';

function HeaderComponent() {
  const location = useLocation();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleLoginSubmit = (email: string, password: string, remember: boolean) => {
    console.log('Login submitted:', { email, password, remember });
    // Aquí puedes agregar la lógica de autenticación
    setIsLoginModalOpen(false);
  };

  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="header-container">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <span>
                <img src={Logo} alt="Logo Memorias de un Viaje Pokémon" className="logo-icon" />
              </span>
            </Link>

            {/* Navegación centrada */}
            <ul>
              <li>
                <Link
                  to="/Libros"
                  className={`${isActive('/') ? 'active' : ''}`}
                >
                  Libros
                </Link>
              </li>
              
              <HeaderSeparator />
              
              <li>
                <Link
                  to="/enciclopedia"
                  className={`${isActive('/enciclopedia') ? 'active' : ''}`}
                >
                  Universo
                </Link>
              </li>

              <HeaderSeparator />
              
              <li>
                <Link to="/personajes">
                  Personajes
                </Link>
              </li>

              <HeaderSeparator />

              <li>
                <Link to="/musica">
                  Música
                </Link>
              </li>
            </ul>

            {/* Login */}
            <button onClick={handleLoginClick} className="login-link">
              Iniciar sesión
            </button>
          </div>
        </nav>
      </header>

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleLoginSubmit}
      />
    </>
  );
}

export default HeaderComponent;
