import React from "react";
// import "./BestInClassSection.css";

const Bestinclasssection = () => {
  return (
    <div className="best-section">
      <div className="best-container">
        {/* Left Side Text */}
        <div className="best-left">
          <h2>Find out why we’re <br /> best-in-class</h2>
          <p>
            The #1 AI-powered email marketing <br />and automations platform* that <br />
            recommends ways to get more <br />opens, clicks, and sales.
          </p>
        </div>

        {/* Right Side Stats */}
        <div className="best-right">
          <div className="stat-item">
            <h3>Up to 25x ROI</h3>
            <p>seen by Mailchimp users*</p>
          </div>
          <div className="stat-item">
            <h3>&gt;99% deliverability rate</h3>
            <p>for email (average)</p>
          </div>
          <div className="stat-item">
            <h3>11M+ Users</h3>
            <p>of Mailchimp globally</p>
          </div>
          <div className="stat-item">
            <h3>50+ behavior-based triggers</h3>
            <p>for personalization</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestinclasssection;
