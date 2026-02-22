import { Outlet } from 'react-router-dom';
import HeaderComponent from '../Components/Header';
import FooterComponent from '../Components/Footer';

function Root() {
  return (
    <div className="app-container">
      <HeaderComponent />
      <main>
        <Outlet /> {/* Aquí se renderizan las páginas hijas */}
      </main>
      <FooterComponent />
    </div>
  );
}

export default Root;