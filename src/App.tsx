import React, { useEffect } from 'react';

import { RouterProvider } from "react-router-dom";
import router from './router';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Lenis from "lenis";


function App() {

  // useEffect(() => {
  //   const lenis = new Lenis();
  //   function raf(time: any) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);
  // }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <RouterProvider router={router} />
    </DndProvider>
  );
}

export default App;