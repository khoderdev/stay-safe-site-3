import { Outlet } from "react-router-dom";

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

function Layout() {
  return (
    <div data-scroll-container className='!bg-white dark:!bg-[#000]'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
export default Layout;