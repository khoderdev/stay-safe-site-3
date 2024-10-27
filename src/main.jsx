import React from 'react';
import ReactDOM from 'react-dom/client';
import { DarkModeProvider } from "./hooks/DarkModeContext";
import { Provider as JotaiProvider } from "jotai";
import jotaiStore from "./atoms/store.ts";
import { ThemeProvider } from './hooks/ThemeContext.jsx';
import { VisitProvider } from './hooks/VisitContext.jsx';
import { AuthContexProvider } from "./hooks/authContext";

import App from './App';
import './index.css';
import { ScrollProvider } from './hooks/ScrollContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContexProvider>
      <JotaiProvider store={jotaiStore}>
        <DarkModeProvider>
          <ThemeProvider>
            <VisitProvider>
              <ScrollProvider>
                <App />
              </ScrollProvider>
            </VisitProvider>
          </ThemeProvider>
        </DarkModeProvider>
      </JotaiProvider>
    </AuthContexProvider>
  </React.StrictMode>
);
