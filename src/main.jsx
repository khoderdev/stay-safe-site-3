import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { DarkModeProvider } from "./hooks/DarkModeContext";
import { ThemeProvider } from './hooks/ThemeContext.jsx';
import { VisitProvider } from './hooks/VisitContext.jsx'; // Import VisitContext

import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeProvider>
        <ThemeProvider>
          <VisitProvider>
            <App />
          </VisitProvider>
        </ThemeProvider>
      </DarkModeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
