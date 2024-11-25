// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { DarkModeProvider } from "./hooks/DarkModeContext";
// import { Provider as JotaiProvider } from "jotai";
// import jotaiStore from "./atoms/store.ts";
// import { ThemeProvider } from './hooks/ThemeContext.jsx';
// import { AuthContexProvider } from "./hooks/authContext";

// import App from './App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <AuthContexProvider>
//       <JotaiProvider store={jotaiStore}>
//         <DarkModeProvider>
//           <ThemeProvider>
//             <App />
//           </ThemeProvider>
//         </DarkModeProvider>
//       </JotaiProvider>
//     </AuthContexProvider>
//   </React.StrictMode>
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { DarkModeProvider } from './hooks/DarkModeContext';
import { BrowserRouter } from 'react-router-dom';
import { AuthContexProvider } from './hooks/authContext';
import { ThemeProvider } from './hooks/ThemeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthContexProvider>
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
		</AuthContexProvider>
	</React.StrictMode>
);
