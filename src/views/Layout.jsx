import { Outlet } from "react-router-dom";
import Header from '../components/header/Header';
// import Footer from '../components/footer/Footer';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen !bg-white dark:!bg-[#000]" data-scroll-container>
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
export default Layout;
