import React, { useEffect } from 'react';
import { prerender } from '../utils/optimization';
import { routes } from '../utils/routeConfig';

interface OptimizedWrapperProps {
  children: React.ReactNode;
}

const OptimizedWrapper: React.FC<OptimizedWrapperProps> = ({ children }) => {
  useEffect(() => {
    // Start prerendering on mount
    prerender(routes);
  }, []);

  return <>{children}</>;
};

export default OptimizedWrapper;
