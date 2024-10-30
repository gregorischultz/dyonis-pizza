import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home.jsx';
import Carte from './pages/Carte.jsx';
import Apropos from './pages/Apropos.jsx';
import Services from './pages/Services.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';


const router =  createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "Carte", element: <Carte /> },
      { path: "Apropos", element: <Apropos /> },
      { path: "Services", element: <Services /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
