import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Anousmentbar from './Anousmentbar';
import Herosection from './Herosection';
import Bestinclasssection from './Bestinclasssection';
import Personalizesection from './Personalizesection';
import Personailzeshopify from './Personailzeshopify';
import Campaginsection from './Campaginsection';
import Creativeproductsection from './Creativeproductsection';
import Templatesection from './Templatesection';
import Benchmarksection from './Benchmarksection';
import Customerservice from './Customerservice';
import FAQaccordion from './FAQaccordion';
import Helpsection from './Helpsection';
import Trustbanner from './Trustbanner';
import Footer from './Footer';
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import Aboutpart1 from './AboutPart1';
import Aboutpart2 from './Aboutpart2';
import Pricingplans from './Pricingplans';
import Contactus from './Contactus';

// const Home = () => (
//   <>
//     <Anousmentbar/>
//     <Navbar/>
//     <Herosection/>
//     <Bestinclasssection/>
//     <Personalizesection/>
//     <Personailzeshopify/>
//     <Campaginsection/>
//     <Creativeproductsection/>
//     <Templatesection/>
//     <Benchmarksection/>
//     <Customerservice/>
//     <FAQaccordion/>
//     <Helpsection/>
//     <Trustbanner/>
//     <Footer/>
//   </>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Anousmentbar/>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Pricingplans" element={<Pricingplans />} />
      <Route path="/Contactus" element={<Contactus />} />
    </Routes>
  <Footer/>
  </BrowserRouter>
);
