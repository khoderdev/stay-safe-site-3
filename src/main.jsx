import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { DarkModeProvider } from './hooks/DarkModeContext';
import { AuthContextProvider } from './hooks/authContext';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './hooks/ThemeContext.jsx';
import { toast } from 'react-hot-toast';

// Register service worker
const registerServiceWorker = async () => {
	if ('serviceWorker' in navigator) {
		try {
			const registration = await navigator.serviceWorker.register(
				'/service-worker.js',
				{
					scope: '/',
				}
			);

			if (registration.installing) {
				console.log('Service worker installing');
			} else if (registration.waiting) {
				console.log('Service worker installed');
			} else if (registration.active) {
				console.log('Service worker active');
			}

			// Handle updates
			registration.addEventListener('updatefound', () => {
				const newWorker = registration.installing;
				newWorker.addEventListener('statechange', () => {
					if (
						newWorker.state === 'installed' &&
						navigator.serviceWorker.controller
					) {
						toast.success('New content available! Please refresh.', {
							duration: 5000,
							position: 'bottom-center',
						});
					}
				});
			});
		} catch (error) {
			console.error('Service worker registration failed:', error);
		}
	}
};

// Call registration
registerServiceWorker();

ReactDOM.createRoot(document.getElementById('root')).render(
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
