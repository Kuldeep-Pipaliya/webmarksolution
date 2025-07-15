import React from "react";
import Anousmentbar from "./Anousmentbar";
import Navbar from "./Navbar";
import Herosection from "./Herosection";
import Bestinclasssection from "./Bestinclasssection";
import Personalizesection from "./Personalizesection";
import Personailzeshopify from "./Personailzeshopify";
import Campaginsection from "./Campaginsection";
import CreativeProductSection from "./Creativeproductsection";
import Templatesection from "./Templatesection";
import Benchmarksection from "./Benchmarksection";
import Customerservice from "./Customerservice";
import FAQaccordion from "./FAQaccordion";
import Helpsection from "./Helpsection";
import Trustbanner from "./Trustbanner";
import Footer from "./Footer";


const Home = () => {
    return (
        <>
            {/* <Anousmentbar />
            <Navbar /> */}
            <Herosection />
            <Bestinclasssection />
            <Personalizesection />
            <Personailzeshopify />
            <Campaginsection />
            <CreativeProductSection />
            <Templatesection />
            <Benchmarksection />
            <Customerservice />
            <FAQaccordion />
            <Helpsection />
            <Trustbanner />
            {/* <Footer /> */}
        </>
    )
}
export default Home;
