import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./Pages/Root";
import HomePage from "./Pages/HomePage/Home";
import Profile from "./Pages/Profile";
import Contact from "./Pages/Contact";
import Projects from "./Pages/ProjectsPage/Projects";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/Profile", element: <Profile /> },
      { path: "/Contact", element: <Contact /> },
      { path: "/:pageName", element: <Projects /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
