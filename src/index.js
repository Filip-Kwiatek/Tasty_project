import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Sale from "./navPages/Sale";
import Equipment from "./navPages/Equipment";
import Edibles from "./navPages/Edibles";
import Recipes from "./navPages/Recipes";

import Account from "./searchBarPages/Account";
import Basket from "./searchBarPages/Basket";

import "./index.css";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sale",
    element: <Sale />,
  },
  {
    path: "/equipment",
    element: <Equipment />,
  },
  {
    path: "/edibles",
    element: <Edibles />,
  },
  {
    path: "/recipes",
    element: <Recipes />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/basket",
    element: <Basket />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
