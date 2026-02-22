import "./css/Footer.css"
import Logo from "../assets/Brand_Logos/Logo_NaXeMate_Productions.png"

function Footer() {
    return (
        <footer className="footer-section">
            <div className="footer-container">
                {/* Left Column */}
                <div className="footer-column footer-left">
                    <div className="footer-block">
                        <h3>CONTACTO</h3>
                        <p><span className="emphasis-text">Email:</span> [futuro email]</p>
                        <p><span className="emphasis-text">Newsletter:</span> [enlace a newsletter]</p>
                    </div>
                    <div className="footer-block">
                        <h3>OTRAS SECCIONES</h3>
                        <div className="footer-links">
                            <a href="#inicio">Inicio</a>
                            <a href="#libros">Libros</a>
                            <a href="#universo">Universo</a>
                        </div>
                    </div>
                </div>

                <div className="footer-divider"></div>

                {/* Center Column */}
                <div className="footer-column footer-center">
                    <div className="footer-logo-wrapper">
                        <img src={Logo} alt="Logo de NaxeMate productions" className="footer-logo" />
                    </div>
                    <div className="footer-brand-content">
                        <h2>NAXEMATE PRODUCTIONS™</h2>
                        <p>
                            NaXeMate Productions™ es el sello creativo de Mateo, que abarca todo tipo de proyectos,
                            desde código y literatura hasta otras muchas cosas, siempre poniendo en primer lugar la dedicación,
                            la investigación y la pasión que cada trabajo necesita. Bajo esta premisa, nace <strong>Memorias de un Viaje Pokémon (MVP)™</strong>,
                            el principal proyecto de NaXeMate Productions, una trilogia fanfiction que reimagina Pokémon con una mayor profundidad
                            narrativa a través de los ojos y viajes de Nate Aetheris.
                        </p>
                    </div>
                </div>

                <div className="footer-divider"></div>

                {/* Right Column */}
                <div className="footer-column footer-right">
                    <h3>NOTA DEL AUTOR</h3>
                    <p>
                        Memorias de un Viaje Pokémon es un proyecto de ficción creado por fans y sin ningún tipo de ánimo de lucro.
                        No se obtiene beneficio económico directo ni indirecto a través de ventas, publicidad, donativos, suscripciones u otros medios.
                        Pokémon, sus personajes, criaturas, nombres, localizaciones y demás elementos relacionados son propiedad de sus correspondientes titulares de derechos,
                        y este proyecto no está afiliado, patrocinado ni aprobado por ellos. La obra se ha desarrollado desde el máximo respeto y admiración hacia los creadores originales
                        y hacia todos aquellos artistas y narradores cuyas obras (incluidas aquellas provenientes de sagas ajenas al universo Pokémon) hayan podido inspirar algunos de sus elementos,
                        sin pretender en ningún caso sustituir ni competir con las obras oficiales.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;