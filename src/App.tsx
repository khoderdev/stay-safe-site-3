import React, { useEffect } from 'react';
import { RouterProvider } from "react-router-dom";
import router from './router';

function App() {
  return (
    <div className='bg-white-bg2 dark:!bg-[#000]'>
    <RouterProvider router={router} />
    </div>
  );
}
export default App;