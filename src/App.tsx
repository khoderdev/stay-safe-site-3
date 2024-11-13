import React, { useEffect } from 'react';
import { RouterProvider } from "react-router-dom";
import router from './router';
import Lenis from "lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <RouterProvider router={router} />
  );
}

export default App;