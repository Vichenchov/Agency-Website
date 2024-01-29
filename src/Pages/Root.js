import { Outlet, useLocation } from "react-router-dom";
import MainNavigation from "../Components/MainNavigation/MainNavigation";
import Footer from "../Components/Footer/Footer";
import NavBtn from "../Components/MainNavigation/NavBtn";

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
      <Footer />
    </>
  );
}

export default RootLayout;
