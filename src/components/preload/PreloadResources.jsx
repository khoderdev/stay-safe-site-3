import React, { useEffect } from 'react';
import { useLoading } from './LoadingProvider';

// Critical resources that should be loaded immediately
const CRITICAL_RESOURCES = {
  images: [
    '/images/bacteria.png',
    '/images/breast.png'
  ],
  styles: [
    '/styles/critical.css'
  ],
  fonts: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap'
  ]
};

// Non-critical resources that can be loaded after FCP
const NON_CRITICAL_RESOURCES = {
  images: [
    '/images/balloon.gif',
    '/images/MDC-anim.gif',
    '/images/HandMonster',
    '/fridge/f2.png'
  ]
};

const PreloadResources = () => {
  const { setIsLoading } = useLoading();

  useEffect(() => {
    let idleCallbackId;

    // Function to preload an image
    const preloadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = (error) => {
          console.warn(`Failed to preload image: ${src}`);
          resolve(); // Resolve anyway to not block other resources
        };
        img.src = src;
      });
    };

    // Function to preload a stylesheet
    const preloadStyle = (href) => {
      return new Promise((resolve, reject) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.onload = resolve;
        link.onerror = (error) => {
          console.warn(`Failed to preload stylesheet: ${href}`);
          resolve(); // Resolve anyway to not block other resources
        };
        document.head.appendChild(link);
      });
    };

    // Function to preload a font
    const preloadFont = (href) => {
      return new Promise((resolve, reject) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.onload = resolve;
        link.onerror = (error) => {
          console.warn(`Failed to preload font: ${href}`);
          resolve(); // Resolve anyway to not block other resources
        };
        document.head.appendChild(link);
      });
    };

    // Add resource hints
    const addResourceHints = () => {
      // DNS prefetch for external resources
      const dnsPrefetch = document.createElement('link');
      dnsPrefetch.rel = 'dns-prefetch';
      dnsPrefetch.href = 'https://fonts.googleapis.com';
      document.head.appendChild(dnsPrefetch);

      // Preconnect to critical domains
      const preconnect = document.createElement('link');
      preconnect.rel = 'preconnect';
      preconnect.href = 'https://fonts.gstatic.com';
      preconnect.crossOrigin = 'anonymous';
      document.head.appendChild(preconnect);
    };

    // Load critical resources first
    const loadCriticalResources = async () => {
      try {
        addResourceHints();

        const criticalPromises = [
          ...CRITICAL_RESOURCES.images.map(preloadImage),
          ...CRITICAL_RESOURCES.styles.map(preloadStyle),
          ...CRITICAL_RESOURCES.fonts.map(preloadFont)
        ];

        await Promise.allSettled(criticalPromises);
        
        // Mark as ready for First Contentful Paint
        document.documentElement.classList.add('ready-for-fcp');
        
        // Load non-critical resources
        loadNonCriticalResources();
      } catch (error) {
        console.error('Error loading critical resources:', error);
        setIsLoading(false);
      }
    };

    // Load non-critical resources after FCP
    const loadNonCriticalResources = () => {
      // Use requestIdleCallback if available, otherwise use setTimeout
      const scheduleNonCritical = (callback) => {
        if ('requestIdleCallback' in window) {
          return window.requestIdleCallback(callback);
        } else {
          return setTimeout(callback, 1);
        }
      };

      idleCallbackId = scheduleNonCritical(() => {
        NON_CRITICAL_RESOURCES.images.forEach(src => {
          const img = new Image();
          img.src = src;
        });

        setIsLoading(false);
      });
    };

    // Start loading resources
    loadCriticalResources();

    // Cleanup function
    return () => {
      if (idleCallbackId) {
        if ('cancelIdleCallback' in window) {
          window.cancelIdleCallback(idleCallbackId);
        } else {
          clearTimeout(idleCallbackId);
        }
      }
    };
  }, [setIsLoading]);

  return null;
};

export default PreloadResources;
