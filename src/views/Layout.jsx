// import { Outlet } from "react-router-dom";

// import Header from '../components/header/Header';
// import Footer from '../components/footer/Footer';

// function Layout() {
//   return (
//     <div data-scroll-container className='!bg-white dark:!bg-[#000]'>
//       <Header />
//       <Outlet />
//       <Footer />
//     </div>
//   );
// }
// export default Layout;

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
      {/* <div className="w-full border-2 border-green-500 z-40 !bg-white dark:!bg-[#212121]">
      <Footer />
      </div> */}
    </div>
  );
}
export default Layout;
