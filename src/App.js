import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./Pages/Root";
import HomePage from "./Pages/Home";
import Profile from "./Pages/Profile";
import Contact from "./Pages/Contact";

// לא לשכוח להוסיף LAZY LOADING בעיקר לתמונות - לבדוק איזה פורמט הכי טוב לתמונות שהכי איכותי ולוקח הכי פחות מקום ושיעלה הכי מהר
// אולי LAZY LOADING זאת לא הפתרון אבל להבין מה כן כדי שהתמונות יעלו כמו שצריך
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/Profile", element: <Profile /> },
      { path: "/Contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
