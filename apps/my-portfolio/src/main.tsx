import ReactDOM from "react-dom/client";
import "./assets/styles/global.css";
import "./assets/styles/reset.css";
import App from "./App.tsx";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
