import { BrowserRouter, Routes, Route, Link } from 'react-router';
import Home from './Home';
import About from './About';
import Vans from './Vans';
import VanDetail from './VanDetail';
import Layout from './Layout';
import Dashboard from './Dashboard';
import Income from './Income';
import Reviews from './reviews';
import HostLayout from './HostLayout';
import HostVans from "./host/vans.jsx"
import HostVanDetails from "./host/vandetail.jsx"

import '../server.js';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetails />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
