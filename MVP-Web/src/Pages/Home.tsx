import HeaderComponent from '../Components/header';

function Home() {
    return (
        <div className="home-page">
            <HeaderComponent />
            <main className="home-content">
                {/* Aquí puedes agregar el contenido principal de tu página */}
                <h1>Bienvenido</h1>
            </main>
        </div>
    );
}

export default Home;
