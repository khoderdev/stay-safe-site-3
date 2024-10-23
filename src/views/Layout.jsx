import { Outlet } from "react-router-dom";

import Header from '../components/header/Header';

function Layout() {
  return (
    <div className='!bg-white dark:!bg-[#000]'>
      <Header />
      <Outlet />
    </div>
  );
}
export default Layout;