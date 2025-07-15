import React from "react";
// import heroImage from "./img/hero-image.png"; // Place your screenshot image in public or src/img folder

const Herosection = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-container">
        {/* Left Text Content */}
        <div className="hero-text">
          <p className="hero-subtitle">Email Marketing Platform</p>
          <h1 className="hero-title">
            Convert more customers <br /> with a powerful and <br /> intuitive platform
          </h1>
          <p className="hero-description">
            Create personalized emails, target precisely with behavior-based automations and segments,
            and optimize with real-time reporting.
          </p>
          <button className="hero-button">Get started</button>
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
