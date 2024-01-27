import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import RootLayout from "./Pages/Root";
import HomePage from "./Pages/Home";
import Profile from "./Pages/Profile";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        children: [
          { path: "/airBalloons", element: <Projects /> },
          { path: "/mykonos", element: <Projects /> },
          { path: "/ski", element: <Projects /> },
        ],
      },
      { path: "/Profile", element: <Profile /> },
      { path: "/Contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
