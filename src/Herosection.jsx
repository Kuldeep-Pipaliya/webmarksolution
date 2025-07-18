import React from "react";
// import heroImage from "./img/hero-image.png"; // Place your screenshot image in public or src/img folder

const Herosection = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-container">
        {/* Left Text Content */}
        <div className="hero-text">
          <p className="hero-subtitle">Website & Marketing Services</p>
          <h1 className="hero-title">
               Grow Your Business <br /> with Powerful Marketing <br /> and Smart Websites
          </h1>
          <p className="hero-description">
             We create stunning Shopify websites and manage Meta (Facebook + Instagram) marketing campaigns 
            that help you reach more customers and increase sales.
          </p>
     <a
            href="https://wa.me/919081264882?text=Hi, I’m interested in your website and marketing services."
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button"
          >
            Get Started
          </a>
        </div>

        {/* Right Image */}
        <div className="hero-image">
          <img src='./img/heroimage.avif' alt="Hero Banner" />
        </div>
      </div>
    </div>
  );
};




export default Herosection;
