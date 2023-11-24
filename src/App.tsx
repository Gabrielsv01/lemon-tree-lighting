import React from "react";

import Api from "@pages/Api";
import Home from "@pages/Home";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./theme/global.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const App = () => (
  <Routes>
    {/* <Route  index element={<Home />} /> */}
    <Route path="/" element={<Home />} />
    <Route path="/api" element={<Api />} />
  </Routes>
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
