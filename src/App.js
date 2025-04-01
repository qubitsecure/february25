import React from 'react';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './Home';
import Portraits from './layouts/Portraits';
import Commissions from './layouts/Commissions';
import Gallery from './layouts/Gallery';
import Exhibitions from './layouts/Exhibitions';
import AboutMe from './layouts/AboutMe';
import Contact from './layouts/Contact';
import Information from './layouts/Information.js';
import Footer from './Footer';
import './index.css';
import P5Sketch from './components/P5Sketch.js';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} /> {/* This sets Home as the default route */}
      <Route path="/Home" element={<Home />} />
      <Route path="/Portraits" element={<Portraits />} />
      <Route path="/Commissions" element={<Commissions />} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="/Exhibitions" element={<Exhibitions />} />
      <Route path="/AboutMe" element={<AboutMe />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Information" element={<Information />} />
      <Route path="/footer" element={<Footer />} />

      </Route>
  )
);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
