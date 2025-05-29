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
import HostVans from './host/HostVans';
import HostVanDetails from './host/HostVanDetails';
import HostVanInfo from './host/HostVanInfo';
import HostVanPricing from './host/HostVanPricing';
import HostVanPhotos from './host/HostVanPhotos';

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
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />

            <Route path="vans/:id" element={<HostVanDetails />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
