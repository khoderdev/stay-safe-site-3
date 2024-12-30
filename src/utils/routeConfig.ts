import { lazy } from "react";

// Define a custom type that extends LazyExoticComponent to include preload
type LazyComponentWithPreload = React.LazyExoticComponent<
  { preload: () => void } & React.ComponentType<any>
>;

// Lazy load components with retry mechanism
const lazyLoadComponent = (importFn: () => Promise<any>, retries = 3) => {
  const LazyComponent = lazy(async () => {
    let lastError: Error | null = null;
    for (let i = 0; i < retries; i++) {
      try {
        return await importFn();
      } catch (err) {
        lastError = err as Error;
        await new Promise((resolve) =>
          setTimeout(resolve, 1000 * Math.pow(2, i))
        );
      }
    }
    throw lastError;
  });

  // Add preload method to the lazy component
  (LazyComponent as any).preload = importFn;

  return LazyComponent;
};

// Route configuration with metadata for optimization
export type PrefetchStrategy = "none" | "viewport" | "hover";

export interface RouteConfig {
  path: string;
  component: React.LazyExoticComponent<any>;
  prerender: boolean;
  prefetch: PrefetchStrategy;
  cacheControl: string;
}

export const routes: RouteConfig[] = [
  {
    path: "/",
    component: lazyLoadComponent(() => import("../views/Home")),
    prerender: true,
    prefetch: "none",
    cacheControl: "public, max-age=3600",
  },
  {
    path: "/mdc",
    component: lazyLoadComponent(() => import("../views/MDC")),
    prerender: true,
    prefetch: "none",
    cacheControl: "public, max-age=3600",
  },
  {
    path: "/book-appointment",
    component: lazyLoadComponent(
      () => import("../components/forms/BookAppointment")
    ),
    prerender: false,
    prefetch: "none",
    cacheControl: "no-cache",
  },
  {
    path: "/qualitative-diets",
    component: lazyLoadComponent(
      () => import("../components/qualitative-diets/QualitativeDiets")
    ),
    prerender: true,
    prefetch: "none",
    cacheControl: "public, max-age=3600",
  },
  {
    path: "/:dietName",
    component: lazyLoadComponent(
      () => import("../components/qualitative-diets/DynamicDietPage")
    ),
    prerender: false,
    prefetch: "none",
    cacheControl: "public, max-age=1800",
  },
  {
    path: "/preventive-health-patient-services",
    component: lazyLoadComponent(
      () => import("../views/PreventiveHealthPatientServices")
    ),
    prerender: true,
    prefetch: "none",
    cacheControl: "public, max-age=3600",
  },
  {
    path: "/vitrack",
    component: lazyLoadComponent(() => import("../components/Vitrack/Vitrack")),
    prerender: false,
    prefetch: "none",
    cacheControl: "private, no-cache",
  },
  {
    path: "/health-and-safety",
    component: lazyLoadComponent(() => import("../views/HealthAndSafety")),
    prerender: false,
    prefetch: "none",
    cacheControl: "private, no-cache",
  },
  {
    path: "/public-health-interventions",
    component: lazyLoadComponent(
      () => import("../views/PublicHealthInterventions")
    ),
    prerender: true,
    prefetch: "none",
    cacheControl: "private, no-cache",
  },
  {
    path: "/public-health-academy",
    component: lazyLoadComponent(() => import("../views/PublicHealthAcademy")),
    prerender: false,
    prefetch: "none",
    cacheControl: "private, no-cache",
  },
  {
    path: "/about-us",
    component: lazyLoadComponent(() => import("../views/AboutUs")),
    prerender: false,
    prefetch: "none",
    cacheControl: "private, no-cache",
  },
  {
    path: "/volunteering",
    component: lazyLoadComponent(
      () => import("../components/Volunteering/Volunteering")
    ),
    prerender: false,
    prefetch: "none",
    cacheControl: "private, no-cache",
  },
];
