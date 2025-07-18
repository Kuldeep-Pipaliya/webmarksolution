// BenchmarkingSection.jsx
import React from "react";
// import "./BenchmarkingSection.css";

const Benchmarksection = () => {
  return (
    <section className="benchmark-section">
      <h2 className="benchmark-heading">
     Track Your Sales, Profit & Performance — All in One Place
      </h2>

      <div className="benchmark-container">
        <div className="benchmark-left">
          <img src="./img/benchamark-1.avif" alt="Integrations" className="benchmark-img" />
            <h3>Integrated with Shopify for real-time insights</h3>
          <p>
                Easily manage your business with Shopify's built-in tools. From order <br />tracking to 
            profit reports, keep everything connected and centralized.
          </p>
            <a
            href="https://wa.me/919081264882?text=Hi, I want help setting up Shopify reporting and profit tracking."
            target="_blank"
            rel="noopener noreferrer"
            className="explore-link"
          >
            Talk to Us on WhatsApp <span>&rarr;</span>
          </a>
        </div>

        <div className="benchmark-right">
          <img src="./img/banchmark-2.avif" alt="Analytics Dashboard" className="benchmark-img" />
         <h3>Measure ROI and improve sales with smart dashboards</h3>
          <p>
             Get full visibility into your marketing results. From ad performance to profit-loss 
            reports — track, analyze, and scale your business with confidence.
          </p>
         <a
            href="https://wa.me/919081264882?text=Hi, I want to understand how to track profits and campaigns using dashboards."
            target="_blank"
            rel="noopener noreferrer"
            className="explore-link"
          >
            Learn More <span>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benchmarksection;
