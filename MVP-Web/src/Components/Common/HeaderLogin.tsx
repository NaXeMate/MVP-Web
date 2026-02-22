import { useState } from "react";
import LoginModal from "./LoginModal";

function HeaderLogin() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleLoginSubmit = (
    email: string,
    password: string,
    remember: boolean,
  ) => {
    console.log("Login submitted:", { email, password, remember });
    // Aquí puedes agregar la lógica de autenticación
    setIsLoginModalOpen(false);
  };

  return (
    <>
      <button onClick={handleLoginClick} className="login-link">
        Iniciar sesión
      </button>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleLoginSubmit}
      />
    </>
  );
}

export default HeaderLogin;
