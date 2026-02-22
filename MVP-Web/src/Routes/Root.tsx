import { Outlet } from "react-router-dom";
import HeaderComponent from "../Components/Header";
import FooterComponent from "../Components/Footer";

function Root() {
  return (
    <div className="app-container min-h-screen flex flex-col">
      <HeaderComponent />
      <main className="grow flex flex-col">
        <Outlet />
      </main>
      <FooterComponent />
    </div>
  );
}

export default Root;
