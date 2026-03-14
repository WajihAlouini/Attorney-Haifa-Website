import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import ErrorBoundary from "./components/common/ErrorBoundary";
import { suppressCalComWarnings } from "./utils/suppressCalComWarnings";

// Suppress third-party Cal.com warnings
suppressCalComWarnings();

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

const app = (
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);

createRoot(rootElement).render(app);
