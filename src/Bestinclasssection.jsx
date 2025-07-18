import React from "react";
// import "./BestInClassSection.css";

const Bestinclasssection = () => {
  return (
    <div className="best-section">
      <div className="best-container">
        {/* Left Side Text */}
        <div className="best-left">
           <h2>Why We're <br /> Best-in-Class</h2>
          <p>
           From custom-built Shopify websites to high-performing Meta ad campaigns, 
            we deliver end-to-end solutions that help brands grow and succeed online.
          </p>
        </div>

        {/* Right Side Stats */}
        <div className="best-right">
          <div className="stat-item">
          <h3>100+ Websites Delivered</h3>
            <p>across different industries</p>
          </div>
          <div className="stat-item">
          <h3>95% Client Satisfaction</h3>
            <p>with design & marketing results</p>
          </div>
          <div className="stat-item">
             <h3>₹1Cr+ Ad Spend Managed</h3>
            <p>on Facebook & Instagram</p>
          </div>
          <div className="stat-item">
               <h3>Creative-Led Strategy</h3>
            <p>videos, banners & content support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestinclasssection;
