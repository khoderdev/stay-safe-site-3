import Layout from "./views/Layout";
import AppRoutes from "./router/index";
import React from "react";
import { LoadingProvider } from "./components/preload/LoadingProvider";
import ResourceLoader from "./components/preload/ResourceLoader";
import PreloadResources from "./components/preload/PreloadResources";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <LoadingProvider>
      <ResourceLoader>
        <PreloadResources />
        <div className="font-sans antialiased">
          <Layout>
            <AppRoutes />
          </Layout>
          <Toaster position="top-right" toastOptions={{
            duration: 1500,
            style: {
              background: '#333',
              color: '#fff',
            },
          }} />
        </div>
      </ResourceLoader>
    </LoadingProvider>
  );
}

export default App;
