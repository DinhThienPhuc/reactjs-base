import ReactDOM from "react-dom/client";
import "../public/styles/global.css";
import "../public/styles/reset.css";
import App from "./app.tsx";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
