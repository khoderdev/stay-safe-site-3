import React, { useEffect, useState } from 'react';
import { useLoading } from './LoadingProvider';

const ResourceLoader = ({ children }) => {
  const { setIsLoading } = useLoading();
  const [resourcesLoaded, setResourcesLoaded] = useState(false);

  useEffect(() => {
    const loadResources = async () => {
      try {
        // Start loading all resources
        const resourcePromises = [];

        // Load critical scripts
        const scripts = [
          // Add paths to critical scripts
        ];

        scripts.forEach(src => {
          const promise = new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            script.onload = resolve;
            script.onerror = reject;
            document.body.appendChild(script);
          });
          resourcePromises.push(promise);
        });

        // Load critical styles
        const styles = [
          // Add paths to critical styles
        ];

        styles.forEach(href => {
          const promise = new Promise((resolve, reject) => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = href;
            link.onload = resolve;
            link.onerror = reject;
            document.head.appendChild(link);
          });
          resourcePromises.push(promise);
        });

        // Wait for all resources to load
        await Promise.all(resourcePromises);
        
        // Add a small delay to ensure smooth transition
        setTimeout(() => {
          setResourcesLoaded(true);
          setIsLoading(false);
        }, 500);

      } catch (error) {
        console.error('Failed to load resources:', error);
        setIsLoading(false);
      }
    };

    loadResources();

    // Register service worker for caching
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').catch(error => {
          console.error('ServiceWorker registration failed:', error);
        });
      });
    }
  }, [setIsLoading]);

  if (!resourcesLoaded) {
    return null;
  }

  return <>{children}</>;
};

export default ResourceLoader;
