import React from "react";

const Personalizesection = () => {
  return (
    <section className="personalize-section">
      <h2 className="section-title">Launch Your Shopify Website with Ease</h2>

      <div className="personalize-container">
        {/* Left Text */}
        <div className="personalize-left">
          <h3>We Build, You Grow</h3>
          <p>
            Get your professional Shopify website built with theme setup, 30 product listings, and a mobile-friendly design.
            We deliver everything — from layout to launch — so you can focus on growing your brand.
          </p>
          <a
            href="https://wa.me/919081264882?text=Hi, I'm interested in getting a Shopify website built."
            target="_blank"
            rel="noopener noreferrer"
            className="explore-link"
          >
            Get Started on WhatsApp <span className="arrow">→</span>
          </a>
        </div>

        {/* Right Video */}
        <div className="personalize-right">
          <video
            src="./img/shopify.mp4"  // ✅ Replace with your actual path
            autoPlay
            muted
            loop
            playsInline
            className="video-box"
          ></video>
        </div>
      </div>
    </section>
  );
};

export default Personalizesection;
