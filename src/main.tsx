import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "../public/index.css"; // Import your global CSS file here
import setupLocatorUI from "@locator/runtime";

if (import.meta.env.MODE === "development") {
  setupLocatorUI();
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
