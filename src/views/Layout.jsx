// import { Outlet } from "react-router-dom";
// import Header from '../components/header/Header';
// // import Footer from '../components/footer/Footer';

// function Layout() {
//   return (
//     <div className="flex flex-col min-h-screen !bg-white-fg dark:!bg-[#000]" >
//       <Header />
//       <div className="flex-grow ">
//         <Outlet />
//       </div>
//       {/* <Footer /> */}
//     </div>
//   );
// }
// export default Layout;
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';

function Layout() {
	return (
		<div className='flex flex-col h-[100dvh] !bg-white-fg dark:!bg-[#000]'>
			<header className='h-[10dvh]'>
				<Header />
			</header>

			<main className='h-[90dvh] xl:min-h-screen'>
				<Outlet />
			</main>
		</div>
	);
}

export default Layout;
