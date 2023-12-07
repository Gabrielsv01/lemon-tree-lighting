import React from "react";

import Api from "@pages/Api";
import Home from "@pages/Home";
import ReactDOM from "react-dom/client";
import "./theme/global.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api" element={<Api />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
