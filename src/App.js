import React from 'react';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './Home';
import Portraits from './layouts/Portraits';
import Footer from './Footer';
import './index.css';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} /> {/* This sets Home as the default route */}
      <Route path="/Home" element={<Home />} />
      <Route path="/Portraits" element={<Portraits />} />
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
