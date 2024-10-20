import { Routes, Route } from 'react-router-dom';

import Scroll from '../views/Scroll.jsx';
import Home from '../views/Home.jsx';
import Contact from '../components/contact/Contact.jsx';

export default function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/scroll" element={<Scroll />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
