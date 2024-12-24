import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { DarkModeProvider } from "./hooks/DarkModeContext";
import { AuthContextProvider } from "./hooks/authContext";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./hooks/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <DarkModeProvider>
        <ThemeProvider>
          <BrowserRouter
            future={{
              v7_startTransition: true,
              v7_relativeSplatPath: true,
            }}
          >
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </DarkModeProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
