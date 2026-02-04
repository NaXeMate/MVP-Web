import "./css/About.css"
import aboutImage from "../assets/AboutImage.jpeg"

function AboutComponent() {
    return (
        <section className="about-section">
            <div className="about-container">
                <div className="about-image-wrapper">
                    <div className="about-image-offset"></div>
                    <img src={aboutImage} alt="Imagen bohemia del autor" className="about-profile-img" />
                </div>

                <div className="about-content">
                    <div className="section-header">
                        <span className="section-line"></span>
                        <span className="section-subtitle">SOBRE MI</span>
                    </div>
                    <h2 className="about-title">
                        MATEO QUINTELA <br />
                        <span className="highlight-green">EL AUTOR</span>
                    </h2>
                    <p className="about-description">
                        Soy un placeholder imbecil y bohemio
                        <br /><br />
                        Imagina que eres un telefono, ¿A quien llamarias primero?
                        <br /><br />
                        Bua imagina estar dando clase en gallego y encima usar pempot, que asco madre mia.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutComponent;