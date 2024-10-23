import React from 'react';
import ReactDOM from 'react-dom/client';
import { DarkModeProvider } from "./hooks/DarkModeContext";
import { ThemeProvider } from './hooks/ThemeContext.jsx';
import { VisitProvider } from './hooks/VisitContext.jsx'; 
import { AuthContexProvider } from "./hooks/authContext";

import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <DarkModeProvider>
        <ThemeProvider>
          <AuthContexProvider>
            <VisitProvider>
              <App />
            </VisitProvider>
          </AuthContexProvider>
        </ThemeProvider>
      </DarkModeProvider>
  </React.StrictMode>
);
