import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Show from "./Show.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <App />
    <Show />
  </StrictMode>,
);
