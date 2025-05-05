import { BrowserRouter, Routes, Route, Link } from 'react-router';
import Home from './Home';
import About from './About';
import Vans from './Vans.jsx';
import VanDetail from './VanDetail.jsx';

import "../server.js";

export default function App() {
  return (
    <BrowserRouter>
    <header>
      <Link className='site-logo' to="/">#VANLIFE</Link>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
