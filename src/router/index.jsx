import { Routes, Route } from 'react-router-dom';

import Scroll from '../views/Scroll.jsx';
import Home from '../views/Home.jsx';
import About from '../views/About.jsx';
import Contact from '../components/contact/Contact.jsx';

export default function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/scroll" element={<Scroll />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
