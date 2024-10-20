import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useGSAP } from '@gsap/react';

import Router from './router';
import Header from './components/header/Header';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP);

function App() {
  return (
    <>
      <Header />
      <Router />
    </>
  );
}

export default App;
