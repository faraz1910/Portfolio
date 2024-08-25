import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import About from "./components/detail_components/About.jsx";
import Education from "./components/detail_components/Education.jsx";
import Experience from "./components/detail_components/Experience.jsx";
import Skills from "./components/detail_components/Skills.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
        children: [
          {
            path: "about",
            element: <About />,
          },
          {
            path: "education",
            element: <Education />,
          },
          {
            path: "experience",
            element: <Experience />,
          },
          {
            path: "skills",
            element: <Skills />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
