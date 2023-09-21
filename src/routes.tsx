import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "pages/Home";
import Api from "pages/Api";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/api",
    element: <Api />,
  },
]);

export default router;
