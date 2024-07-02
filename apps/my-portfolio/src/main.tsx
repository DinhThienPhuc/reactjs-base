import ReactDOM from "react-dom/client";
import "../public/styles/_reset.css";
import "../public/styles/global.css";
import App from "./index.tsx";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
