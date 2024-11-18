import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { useAuth } from "../../hooks/useAuth";
import ThemeToggle from './ThemeToggle';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import MenuLinks from './links/Links';
import React from 'react';


export default function Header() {
  const { currentUser, logout, loading } = useAuth();
  const { theme } = useTheme();
  const headerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Sidebar animation variants
  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      x: '-100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <header ref={headerRef} className="bg-white-fg dark:bg-black shadow-md  dark:shadow-[#00000021] relative z-40 flex items-center justify-between lg:pl-32 lg:pr-6">
      {/* Logo */}
      <motion.div
        className="flex-shrink-0 pl-2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/">
          <img
            src="/logo-dark.png"
            alt="staysafe-logo"
            className={`w-32 p-2 md:w-36 ${theme === 'dark' ? 'block' : 'hidden'}`}
          />
          <img
            src="/logo-light.png"
            alt="staysafe-logo"
            className={`w-32 p-2 md:w-36 ${theme === 'dark' ? 'hidden' : 'block'}`}
          />
        </Link>
      </motion.div>

      {/* Sidebar Menu */}
      <motion.nav
        className={`fixed top-0 left-0 h-full w-full bg-white-fg dark:bg-[#212121] shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={sidebarVariants}
      >
        <ul className="flex flex-col items-center space-y-8 text-center mt-20">
          <MenuLinks />
        </ul>
      </motion.nav>

      {/* Overlay when menu is open */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black opacity-50 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          onClick={toggleSidebar}
        />
      )}

      {/* Desktop Menu */}
      <div className='flex justify-between items-center space-x-10'>
        <nav
          className={`${isOpen ? 'flex' : 'hidden'
            } flex-col flex-grow gap-6 hidden pb-4 md:pb-0 md:flex md:flex-row lg:ml-auto justify-end`}
        >
          <Link
            to="/"
            className="text-black hover:text-blue dark:text-white-bg dark:hover:text-blue transition-colors">
            
            Home
          </Link>
          <Link
            to="/mdc"
            className="text-black hover:text-blue dark:text-white-bg dark:hover:text-blue transition-colors">
            
            Medical Dietry Clinic
          </Link>
          <Link
            to="/preventive-health-patient-services"
            className="text-black hover:text-blue dark:text-white-bg dark:hover:text-blue transition-colors">
            
            Preventive Health & Patient Services
          </Link>
          <Link
            to="/health-and-safety"
            className="text-black hover:text-blue dark:text-white-bg dark:hover:text-blue transition-colors">
            
            Health & Safety
          </Link>
          <Link
            to="/public-health-interventions"
            className="text-black hover:text-blue dark:text-white-bg dark:hover:text-blue transition-colors">
            
            Public Health Interventions
          </Link>
          <Link
            to="/public-health-academy"
            className="text-black hover:text-blue dark:text-white-bg dark:hover:text-blue transition-colors">
            
            Public Health Academy
          </Link>
          <Link
            to="/about-us"
            className="text-black hover:text-blue dark:text-white-bg dark:hover:text-blue transition-colors">
            
            About us
          </Link>
        </nav>
        
        <div className="flex space-x-2 pr-2 items-center">
          <div className='z-50 '>
            <ThemeToggle />
          </div>
          <button onClick={toggleSidebar} className="md:hidden p-2 text-3xl text-black dark:text-white-bg z-50 relative focus:outline-none border-none bg-transparent">
            {isOpen ? <HiX /> : <HiMenuAlt4 />}
          </button>
        </div>
      </div>
    </header>
  );
}





// import { useState, useRef, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { useTheme } from '../../hooks/useTheme';
// import { useAuth } from "../../hooks/useAuth";
// import ThemeToggle from './ThemeToggle';
// import { HiMenuAlt4, HiX } from 'react-icons/hi';
// import MenuLinks from './links/Links';
// import React from 'react';


// export default function Header() {

//   const { currentUser, logout, loading } = useAuth();
//   const { theme } = useTheme();
//   const headerRef = useRef(null);
//   const [isOpen, setIsOpen] = useState(false);
//   const [animateHeader, setAnimateHeader] = useState(false);
//   useEffect(() => {
//     const listener = () => {
//       if (window.scrollY > 140) {
//         setAnimateHeader(true);
//       } else setAnimateHeader(false);
//     };
//     window.addEventListener("scroll", listener);

//     return () => {
//       window.removeEventListener("scroll", listener);
//     };
//   }, []);
//   // Toggle function
//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   // Sidebar animation variants
//   const sidebarVariants = {
//     open: {
//       x: 0,
//       transition: {
//         type: 'spring',
//         stiffness: 300,
//         damping: 30,
//       },
//     },
//     closed: {
//       x: '-100%',
//       transition: {
//         type: 'spring',
//         stiffness: 300,
//         damping: 30,
//       },
//     },
//   };

//   return (
//     <header ref={headerRef}
//       // className="bg-white-fg dark:bg-black shadow-md dark:shadow-[#00000021] relative z-50 flex items-center justify-between xl:pl-20 lg:pr-6">
//       className={`flex justify-evenly w-full backdrop-filter backdrop-blur-lg bg-white/50 fixed z-10 trasition ease-in-out duration-500 ${animateHeader && "shadow-xl"
//         }`}
//     >
//       <div className="w-full justify-between ">
//         <div
//           className={`border flex w-full py-10 ${animateHeader && "py-2"
//             }  trasition ease-in-out duration-500`}
//         >
//           {/* Logo */}
//           <motion.div
//             className="flex-shrink-0 pl-2"
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <Link to="/">
//               <img
//                 src="/logo-dark.png"
//                 alt="staysafe-logo"
//                 className={`w-32 p-2 md:w-32 ${theme === 'dark' ? 'block' : 'hidden'}`}
//               />
//               <img
//                 src="/logo-light.png"
//                 alt="staysafe-logo"
//                 className={`w-32 p-2 md:w-32 ${theme === 'dark' ? 'hidden' : 'block'}`}
//               />
//             </Link>
//           </motion.div>

//           {/* Sidebar Menu */}
//           <motion.nav
//             className={`fixed top-0 -left-50 h-full w-full bg-white-fg dark:bg-[#212121] shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
//               }`}
//             initial="closed"
//             animate={isOpen ? 'open' : 'closed'}
//             variants={sidebarVariants}
//           >
//             <ul className="flex z-50 flex-col items-center space-y-8 text-center mt-20">
//               <MenuLinks />
//             </ul>
//           </motion.nav>

//           {/* Overlay when menu is open */}
//           {isOpen && (
//             <motion.div
//               className="fixed inset-0 bg-black opacity-50 z-40"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 0.5 }}
//               exit={{ opacity: 0 }}
//               onClick={toggleSidebar}
//             />
//           )}

//           {/* Desktop Menu */}
//           <div className='flex justify-between items-center'>
//             <nav className="hidden md:flex space-x-6 text-[1rem] font-semibold">
//               <Link to="/" className="text-black hover:text-blue-500 dark:text-white-bg dark:hover:text-blue-500 transition-colors">
//                 Home
//               </Link>
//               <Link to="/mdc" className="text-black hover:text-blue-500 dark:text-white-bg dark:hover:text-blue-500 transition-colors">
//                 Medical Dietry Clinic
//               </Link>
//               <Link to="/preventive-health-patient-services" className="text-black hover:text-blue-500 dark:text-white-bg dark:hover:text-blue-500 transition-colors">
//                 Preventive Health & Patient Services
//               </Link>
//               <Link to="/public-health-interventions" className="text-black hover:text-blue-500 dark:text-white-bg dark:hover:text-blue-500 transition-colors">
//                 Public Health Interventions
//               </Link>
//               <Link to="/public-health-academy" className="text-black hover:text-blue-500 dark:text-white-bg dark:hover:text-blue-500 transition-colors">

//                 Public Health Academy
//               </Link>
//               <Link to="/about-us" className="text-black hover:text-blue-500 dark:text-white-bg dark:hover:text-blue-500 transition-colors">
//                 About us
//               </Link>
//               <Link to="/write" className="text-black hover:text-blue-500 dark:text-white-bg dark:hover:text-blue-500 transition-colors">
//               </Link>
//             </nav>

//             <div className="flex space-x-2 pr-2 items-center">
//               <div className='z-50 '>
//                 <ThemeToggle />
//               </div>
//               <button onClick={toggleSidebar} className="md:hidden p-2 text-3xl text-black dark:text-white-bg z-50 relative focus:outline-none border-none bg-transparent">
//                 {isOpen ? <HiX /> : <HiMenuAlt4 />}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }


// // import { motion } from "framer-motion";
// // import React from "react";
// // import { useState, useEffect } from "react";
// // import { Link } from 'react-router-dom'
// // import { useTheme } from '../../hooks/useTheme';
// // export default function Header() {
// //   const { theme } = useTheme();
// //   const [animateHeader, setAnimateHeader] = useState(false);
// //   useEffect(() => {
// //     const listener = () => {
// //       if (window.scrollY > 140) {
// //         setAnimateHeader(true);
// //       } else setAnimateHeader(false);
// //     };
// //     window.addEventListener("scroll", listener);

// //     return () => {
// //       window.removeEventListener("scroll", listener);
// //     };
// //   }, []);
// //   const menuItems = [
// //     { title: "Home", url: "/" },
// //     { title: "MDC", url: "/mdc" },
// //     { title: "Contact", url: "https://themeptation.net" }
// //   ];
// //   return (
// //     <header
// //       className={`w-full backdrop-filter backdrop-blur-lg bg-white/50 fixed z-10 trasition ease-in-out duration-500 ${animateHeader && "shadow-xl"
// //         }`}
// //     >
// //       <div className="max-w-7xl mx-auto ">
// //         <div
// //           className={`flex max-w-screen-xl py-10 ${animateHeader && "py-5"
// //             } mx-auto items-center justify-between px-8 trasition ease-in-out duration-500`}
// //         >
// //           <motion.div
// //             className="flex-shrink-0 pl-2"
// //             initial={{ opacity: 0, scale: 0.5 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 0.5 }}
// //           >
// //             <Link to="/">
// //               <img
// //                 src="/logo-dark.png"
// //                 alt="staysafe-logo"
// //                 className={`w-24 ${theme === 'dark' ? 'block' : 'hidden'}`}
// //               />
// //               <img
// //                 src="/logo-light.png"
// //                 alt="staysafe-logo"
// //                 className={`w-32  md:w-32 ${theme === 'dark' ? 'hidden' : 'block'}`}
// //               />
// //             </Link>
// //           </motion.div>
// //           <nav>
// //             <ul className="flex items-center justify-start">
// //               {menuItems?.map((item) => (
// //                 <li key={item?.title}>
// //                   <Link to={item?.url}>
// //                     <a className="px-2 lg:px-6 py-6 text-md border-b-2 border-transparent hover:border-indigo-400 leading-[22px] md:px-3 text-gray-400 hover:text-indigo-500">
// //                       {item?.title}
// //                     </a>
// //                   </Link>
// //                 </li>
// //               ))}
// //             </ul>
// //           </nav>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // }




// // ///////////////////////////////////////////
// // ///////////////////////////////////////////
// // ///////////////////////////////////////////
// // ///////////////////////////////////////////


// // import React, { useState, useEffect } from 'react';
// // import ThemeToggle from './ThemeToggle';
// // import { Link } from 'react-router-dom';
// // const NavigationSection = () => {
// //   const [atTop, setAtTop] = useState(true);
// //   const [open, setOpen] = useState(false);

// //   // Handle scroll behavior
// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setAtTop(window.pageYOffset <= 50);
// //     };

// //     window.addEventListener('scroll', handleScroll);
// //     return () => {
// //       window.removeEventListener('scroll', handleScroll);
// //     };
// //   }, []);

// //   return (
// //     <section>
// //       <div
// //         className={` z-50 w-full px-8 py-3 transition-all duration-1000 rounded-full mt-1 ${atTop ? 'max-w-[85rem]' : 'bg-black/95 bg-opacity-90 max-w-6xl'
// //           } inset-x-0 mx-auto ease-in-out transform`}
// //       >
// //         <div className="flex flex-col w-full mx-auto md:items-center md:justify-between md:flex-row">
// //           <div className="flex flex-row items-center justify-between">
// //             <span
// //               className={`font-bold tracking-tighter uppercase ${atTop ? 'dark:text-white-bg3 ' : 'text-sm text-white-bg'
// //                 }`}
// //             >
// //               <Link to="/">
// //                 <img
// //                   src="/logo-dark.png"
// //                   alt="staysafe-logo"
// //                   className={`w-24  `}
// //                 />

// //               </Link>
// //             </span>
// //             <button
// //               className="md:hidden focus:outline-none"
// //               onClick={() => setOpen(!open)}
// //             >
// //             </button>
// //           </div>
// //           <nav
// //             className={`${open ? 'flex' : 'hidden'
// //               } flex-col flex-grow gap-6 hidden pb-4 md:pb-0 md:flex md:flex-row lg:ml-auto justify-end`}
// //           >
// //             <Link
// //               to="/"
// //               className={atTop ? 'dark:text-white-bg3 ' : 'text-sm text-white-bg'}
// //             >
// //               Home
// //             </Link>
// //             <Link
// //               to="/mdc"
// //               className={atTop ? 'dark:text-white-bg3 ' : 'text-sm text-white-bg'}
// //             >
// //               Medical Dietry Clinic
// //             </Link>
// //             <Link
// //               to="/preventive-health-patient-services"
// //               className={atTop ? 'dark:text-white-bg3 ' : 'text-sm text-white-bg'}
// //             >
// //               Preventive Health & Patient Services
// //             </Link>
// //             <Link
// //               to="/health-and-safety"
// //               className={atTop ? 'dark:text-white-bg3 ' : 'text-sm text-white-bg'}
// //             >
// //               Health & Safety
// //             </Link>
// //             <Link
// //               to="/public-health-interventions"
// //               className={atTop ? 'dark:text-white-bg3 ' : 'text-sm text-white-bg'}
// //             >
// //               Public Health Interventions
// //             </Link>
// //             <Link
// //               to="/public-health-academy"
// //               className={atTop ? 'dark:text-white-bg3 ' : 'text-sm text-white-bg'}
// //             >
// //               Public Health Academy
// //             </Link>
// //             <Link
// //               to="/about-us"
// //               className={atTop ? 'dark:text-white-bg3 ' : 'text-sm text-white-bg'}
// //             >
// //               About us
// //             </Link>
// //             <ThemeToggle />
// //           </nav>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default NavigationSection;
