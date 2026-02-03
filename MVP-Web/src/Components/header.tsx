import "./css/header.css";
import logoImage from "../assets/Logo_Texto_Lateral.png";

function HeaderComponent() {
    return (
        <header className="header">
            <article className="header-container">
                <img src={logoImage} alt="Logo libro" className="logo-icon"/>
                <nav className="navbar">
                    <ul>
                        <li>Libros</li>
                        <svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                            <path d="M200 50 C200 50, 250 150, 350 200 C250 250, 200 350, 200 350 C200 350, 150 250, 50 200 C150 150, 200 50, 200 50 Z"
                                fill="#D4AF37"
                                stroke="none" />
                        </svg>
                        <li>Universo</li>
                        <svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                            <path d="M200 50 C200 50, 250 150, 350 200 C250 250, 200 350, 200 350 C200 350, 150 250, 50 200 C150 150, 200 50, 200 50 Z"
                                fill="#D4AF37"
                                stroke="none" />
                        </svg>
                        <li>Personajes</li>
                        <svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                            <path d="M200 50 C200 50, 250 150, 350 200 C250 250, 200 350, 200 350 C200 350, 150 250, 50 200 C150 150, 200 50, 200 50 Z"
                                fill="#D4AF37"
                                stroke="none" />
                        </svg>
                        <li>Pokémon</li>
                    </ul>
                </nav>
            </article>
        </header>
    )
}

export default HeaderComponent;