import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./app";
import FarAway from "./faraway";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/faraway",
    element: <FarAway />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
