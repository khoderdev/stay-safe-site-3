import { useEffect, useRef } from 'react';
import { RouteConfig, PrefetchStrategy } from './routeConfig';

// Cache for preloaded components
const componentCache = new Map<string, Promise<any>>();

// Prefetch component based on strategy
export const usePrefetch = (route: RouteConfig) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const componentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefetchComponent = async () => {
      if (!componentCache.has(route.path)) {
        const component = route.component as any;
        if (typeof component.preload === 'function') {
          componentCache.set(route.path, component.preload());
        }
      }
    };

    if (route.prefetch === 'viewport' && 'IntersectionObserver' in window) {
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            prefetchComponent();
            observer.current?.disconnect();
          }
        },
        { rootMargin: '100px' }
      );

      if (componentRef.current) {
        observer.current.observe(componentRef.current);
      }
    }

    return () => {
      observer.current?.disconnect();
    };
  }, [route]);

  return componentRef;
};

// Cache control implementation
export const setCacheHeaders = (cacheControl: string) => {
  if (typeof window !== 'undefined') {
    // For client-side caching
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Cache-Control';
    meta.content = cacheControl;
    document.head.appendChild(meta);
  }
};

// Prerender helper
export const prerender = async (routes: RouteConfig[]) => {
  const prerenderPromises = routes
    .filter(route => route.prerender)
    .map(route => Promise.resolve());
  
  await Promise.all(prerenderPromises);
};

// Hover prefetch implementation
export const useHoverPrefetch = (route: RouteConfig) => {
  const handleMouseEnter = () => {
    if (route.prefetch === 'hover' && !componentCache.has(route.path)) {
      componentCache.set(route.path, Promise.resolve());
    }
  };

  return handleMouseEnter;
};
