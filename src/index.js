import React, { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import { AppContextProvider } from "./context/context";
import "normalize.css";
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </StrictMode>
);
