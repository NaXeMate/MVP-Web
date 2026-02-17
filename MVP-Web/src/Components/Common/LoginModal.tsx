import React, { useState } from "react";
import "../css/LoginModal.css";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (email: string, password: string, remember: boolean) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  if (!isOpen) return null;



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(email, password, remember);
  };

  return (
    <div
      className="fixed inset-0 z-999 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      {/* Modal card */}
      <div className="login-modal-card relative w-full max-w-lg mx-4 rounded-2xl shadow-2xl">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="login-modal-close absolute top-4 right-5 text-2xl leading-none cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
          aria-label="Cerrar"
        >
          ✕
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="login-modal-title text-5xl mb-2">
            Inicio de Sesión
          </h1>
          <p className="login-modal-subtitle text-sm tracking-widest uppercase">
            Introduce tu email para continuar
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="login-modal-label text-base font-bold">
              Dirección de correo
            </label>
            <input
              type="email"
              placeholder="tuemail@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login-modal-input w-full rounded-lg border-none outline-none text-base"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label className="login-modal-label text-base font-bold">
                Contraseña
              </label>
              <a
                href="#"
                className="login-modal-forgot-link text-sm no-underline hover:underline"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <input
              type="password"
              placeholder="••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-modal-input w-full rounded-lg border-none outline-none text-base"
            />
          </div>

          {/* Remember me */}
          <label className="login-modal-remember-label flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="w-5 h-5 rounded accent-(--accent-aura) cursor-pointer"
            />
            <span className="text-base">Recuérdame</span>
          </label>

          {/* Submit button */}
          <button
            type="submit"
            className="login-modal-submit-btn w-full mt-4 py-3 rounded-lg text-white text-lg font-semibold cursor-pointer transition-all duration-200 hover:brightness-110 hover:shadow-lg"
          >
            Enviar
          </button>
        </form>

        {/* Footer link */}
        <p className="login-modal-footer-text text-center mt-4 text-sm">
          ¿No tienes cuenta?{" "}
          <a
            href="#"
            className="login-modal-footer-link underline hover:no-underline"
          >
            Crea una cuenta...
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
