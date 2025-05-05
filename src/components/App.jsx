import { BrowserRouter, Routes, Route, Link } from 'react-router';
import Home from './Home';
import About from './About';
import Vans from './Vans';
import VanDetail from './VanDetail';
import Layout from "./Layout"

import '../server.js';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
