import { Outlet } from "react-router-dom";
import MainNavigation from "../Components/MainNavigation/MainNavigation";

function RootLayout(props) {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
