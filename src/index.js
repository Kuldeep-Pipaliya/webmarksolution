import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Anousmentbar from './Anousmentbar';
import Footer from './Footer';
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import Pricingplans from './Pricingplans';
import Contactus from './Contactus';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Anousmentbar />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Pricingplans" element={<Pricingplans />} />
      <Route path="/Contactus" element={<Contactus />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
