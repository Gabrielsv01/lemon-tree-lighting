import * as React from "react";

import Api from "@pages/Api";
import Home from "@pages/Home";
import { createBrowserRouter } from "react-router-dom";

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
