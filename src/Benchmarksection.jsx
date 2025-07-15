// BenchmarkingSection.jsx
import React from "react";
// import "./BenchmarkingSection.css";

const Benchmarksection = () => {
  return (
    <section className="benchmark-section">
      <h2 className="benchmark-heading">
        Make smarter decisions based on personalized benchmarking
      </h2>

      <div className="benchmark-container">
        <div className="benchmark-left">
          <img src="./img/benchamark-1.avif" alt="Integrations" className="benchmark-img" />
          <h3>Stay connected to the apps and services <br />you love</h3>
          <p>
            Make Mailchimp your single source of truth for marketing ctivities.
            We offer 300+ integrations so you have everything you need in a single location.
          </p>
          <a href="#" className="explore-link">
            Explore 300+ Integrations <span>&rarr;</span>
          </a>
        </div>

        <div className="benchmark-right">
          <img src="./img/banchmark-2.avif" alt="Analytics Dashboard" className="benchmark-img" />
          <h3>Track, analyze, and optimize your impact <br />—so you can sell more</h3>
          <p>
            See what's working and make informed decisions with an omni-<br/>channel
            dashboard, audience analytics, testing, and more.
          </p>
          <a href="#" className="explore-link">
            Explore Reporting and Analytics <span>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benchmarksection;
