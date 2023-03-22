import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import { StyleGlobal } from "./styles/globalStyle";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StyleGlobal />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
