import Layout from "./views/Layout";
import AppRoutes from "./router/index";
import React from "react";
import { LoadingProvider } from "./components/preload/LoadingProvider";
import { AppointmentProvider } from "./context/AppointmentContext";
import ResourceLoader from "./components/preload/ResourceLoader";
import PreloadResources from "./components/preload/PreloadResources";
import { Toaster } from "react-hot-toast";
import StaySafeBot from "./components/bot/ChatBot";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP);

function App() {
  return (
    <LoadingProvider>
      <AppointmentProvider>
        <ResourceLoader>
          <PreloadResources />
          <div className="font-sans antialiased">
            <Layout>
              <AppRoutes />
              <StaySafeBot />
            </Layout>
           
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 1500,
                style: {
                  background: "#333",
                  color: "#fff",
                },
              }}
            />
          </div>
        </ResourceLoader>
      </AppointmentProvider>
    </LoadingProvider>
  );
}

export default App;
