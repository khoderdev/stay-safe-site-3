import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { DarkModeProvider } from "./hooks/DarkModeContext";
import { ThemeProvider } from './hooks/ThemeContext.jsx';

import App from './App';
import './index.css';
import './gsap-brand.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </DarkModeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
