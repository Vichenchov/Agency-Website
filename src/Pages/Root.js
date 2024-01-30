import { Outlet, useLocation } from "react-router-dom";
import MainNavigation from "../Components/MainNavigation/MainNavigation";
import Footer from "../Components/Footer/Footer";
import NavBtn from "../Components/MainNavigation/NavBtn";
import ContactTitle from "../Components/ContactTitle/ContactTitle";

function RootLayout() {
  const location = useLocation();
  const mainNavRoutes = ["/", "/Profile", "/Contact"];
  const shouldRenderMainNav = mainNavRoutes.includes(location.pathname);
  return (
    <>
      {shouldRenderMainNav && <MainNavigation />}
      {!shouldRenderMainNav && <NavBtn />}
      <main>
        <Outlet />
      </main>
      {location.pathname !== "/Contact" && <ContactTitle />}
      <Footer />
    </>
  );
}

export default RootLayout;
