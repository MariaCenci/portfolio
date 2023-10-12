import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import About from "./routes/Home/index.tsx";
import Projects from "./routes/Projects.tsx";
import Home from "./routes/Home"
import ErrorPage from './routes/ErrorPage.tsx'
import './main.css'


import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children:[
      { path: "/",element: <Home />  },
      { path: "/about",element: <About />  },
      { path: "/projects",element: <Projects />  },
    ]
  },
      
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
