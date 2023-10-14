import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import About from "./routes/About/index.tsx";
import Projects from "./routes/Projects/index.tsx";
import Contact from "./routes/Contact"
import Home from "./routes/Home"
import ErrorPage from './routes/ErrorPage/index.tsx'
import './Styles/main.scss'


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
      { path: "/contact",element: <Contact />  },
    ]
  },
      
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
