import "./css/About.css"
import aboutImage from "../assets/Brand_Logos/AboutImage.jpeg"

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
                        Mi nombre es <span className="emphasis-text">Mateo</span>, el visionario galáctico detrás de <span className="emphasis-text">NaXeMate Productions™</span> y autor de la épica trilogía <span className="emphasis-text">Memorias de un Viaje Pokémon</span>. Soy un entusiasta empedernido, un filántropo de los píxeles y las páginas, cuya vida gira en torno a tres pasiones inquebrantables: los videojuegos, la tecnología y la literatura.
                        <br /><br />
                        Imagino y vivo en un mundo donde Nintendo es el mismísimo Olimpo: devoro sagas como The Legend of Zelda, Pokémon, Metroid, Super Mario y hasta Sonic u Horizon, siempre con el corazón latiendo al ritmo de un combate legendario. Soy un devoto acérrimo de Apple, capaz de disertar horas sobre cada innovación de sus productos con la pasión de un <span className="emphasis-text">profeta tecnológico</span>. ¿Android? ¿Windows? ¿Linux? El Rattata de la Ruta 1 cuando terminas el juego…
                        <br /><br />
                        Pero mi verdadero destino profético es la <span className="emphasis-text">pluma</span>. Como <span className="emphasis-text">arquitecto de universos</span>, forjo Memorias de un Viaje Pokémon, una trilogía fanfiction que transforma el mundo Pokémon en una epopeya digna de los dioses: profundas tramas emocionales y batallas míticas que siguen la estela de Star Wars (la indiscutible cumbre absoluta de la narrativa humana).
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutComponent;