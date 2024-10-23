import { useEffect } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import 'locomotive-scroll/dist/locomotive-scroll.css';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

import Layout from './views/Layout';

import Home from "./views/Home";
import Posts from "./components/posts/Posts";
import Single from "./components/posts/Single";
import Write from "./components/posts/Write";
import AboutUs from "./views/AboutUs";

import Register from "./views/Register";
import Login from "./views/Login";
import FloatingGallery from "./views/FloatingGallery";

import MDC from "./views/MDC";
import OHS from "./views/OHS";
import EnvirementalHealth from "./views/EnvirementalHealth";
import PatientGuidanceSupport from "./views/PatientGuidanceSupport";
import PrivateRoute from './router/PrivateRoute';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: (
          <PrivateRoute>
            <Write />
          </PrivateRoute>
        ),
      },
      {
        path: "/mdc",
        element: (
          // <PrivateRoute>
          <MDC />
          // </PrivateRoute>
        ),
      },
      {
        path: "/ohs",
        element: (
          // <PrivateRoute>
          <OHS />
          // </PrivateRoute>
        ),
      },
      {
        path: "/enviremental-health",
        element: (
          // <PrivateRoute>
          <EnvirementalHealth />
          // </PrivateRoute>
        ),
      },
      {
        path: "/patient-guidance-support",
        element: (
          // <PrivateRoute>
          <PatientGuidanceSupport />
          // </PrivateRoute>
        ),
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/gallery",
    element: <FloatingGallery />,
  },
]);

function App() {

  useEffect(() => {
    let locomotiveScroll;
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        lerp: 0.05, // Adjust the inertia (lower = more smoothness)
        getDirection: true,
        mobile: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      });

      // Update ScrollTrigger on each scroll
      locomotiveScroll.on('scroll', ScrollTrigger.update);

      // Setup ScrollTrigger to sync with Locomotive Scroll
      ScrollTrigger.scrollerProxy('[data-scroll-container]', {
        scrollTop(value) {
          return arguments.length
            ? locomotiveScroll.scrollTo(value, 0, 0)
            : locomotiveScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector('[data-scroll-container]').style.transform
          ? 'transform'
          : 'fixed',
      });

      ScrollTrigger.addEventListener('refresh', () => {
        locomotiveScroll.update(); // Update Locomotive Scroll positions
        ScrollTrigger.refresh();   // Refresh GSAP ScrollTrigger
      });

      // ScrollTrigger.addEventListener('refresh', () => {
      //   locomotiveScroll.update(); // Ensure footer is accounted for
      //   ScrollTrigger.refresh();   // Recalculate GSAP triggers
      // });

      ScrollTrigger.refresh(); // Initial refresh
    })();

    // Cleanup on unmount
    return () => locomotiveScroll?.destroy();
  }, []);

  // useEffect(() => {
  //   let locomotiveScroll;
  //   (async () => {
  //     const LocomotiveScroll = (await import('locomotive-scroll')).default;
  //     locomotiveScroll = new LocomotiveScroll({
  //       el: document.querySelector('[data-scroll-container]'),
  //       smooth: true,
  //       lerp: 0.1, // Adjust the inertia (lower = more smoothness)
  //       getDirection: true,
  //       mobile: {
  //         smooth: true,
  //       },
  //       tablet: {
  //         smooth: true,
  //       },
  //     });

  //     // Update ScrollTrigger on each scroll
  //     locomotiveScroll.on('scroll', ScrollTrigger.update);

  //     // Setup ScrollTrigger to sync with Locomotive Scroll
  //     ScrollTrigger.scrollerProxy('[data-scroll-container]', {
  //       scrollTop(value) {
  //         return arguments.length
  //           ? locomotiveScroll.scrollTo(value, 0, 0)
  //           : locomotiveScroll.scroll.instance.scroll.y;
  //       },
  //       getBoundingClientRect() {
  //         return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  //       },
  //       pinType: document.querySelector('[data-scroll-container]').style.transform
  //         ? 'transform'
  //         : 'fixed',
  //     });

  //     ScrollTrigger.addEventListener('refresh', () => locomotiveScroll.update());
  //     ScrollTrigger.refresh();
  //   })();

  //   // Cleanup on unmount
  //   return () => locomotiveScroll?.destroy();
  // }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;