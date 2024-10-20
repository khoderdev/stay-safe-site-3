import { Routes, Route } from 'react-router-dom';

import Scroll from '../views/Scroll';
import Layers from '../views/Layers.jsx';
import Contact from '../components/contact/Contact.jsx';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layers />} />
      <Route path="/scroll" element={<Scroll />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
