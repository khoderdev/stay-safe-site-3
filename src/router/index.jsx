import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../utils/routeConfig";
import { usePrefetch, setCacheHeaders } from "../utils/optimization";

// Loading component for Suspense fallback
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink"></div>
  </div>
);

const OptimizedRoute = ({ route }) => {
  const componentRef = usePrefetch(route);

  return (
    <div ref={componentRef}>
      <Suspense fallback={<Loading />}>
        <route.component />
      </Suspense>
    </div>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => {
        // Set cache headers for the route
        setCacheHeaders(route.cacheControl);

        return (
          <Route
            key={route.path}
            path={route.path}
            element={<OptimizedRoute route={route} />}
          />
        );
      })}
    </Routes>
  );
};

export default AppRoutes;
