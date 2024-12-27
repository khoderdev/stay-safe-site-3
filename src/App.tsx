import Layout from "./views/Layout";
import AppRoutes from "./router/index";
import React from "react";
import { LoadingProvider } from "./components/preload/LoadingProvider";
import ResourceLoader from "./components/preload/ResourceLoader";
import PreloadResources from "./components/preload/PreloadResources";

function App() {
  return (
    <LoadingProvider>
      <ResourceLoader>
        <PreloadResources />
        <div className="font-sans antialiased">
          <Layout>
            <AppRoutes />
          </Layout>
        </div>
      </ResourceLoader>
    </LoadingProvider>
  );
}

export default App;
