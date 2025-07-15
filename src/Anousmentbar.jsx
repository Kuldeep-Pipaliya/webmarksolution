import React from "react";
import './style.css';
const Anousmentbar = () => {
  return (
        <div>
      {/* Top White Strip */}
      <div className="top-strip">
        <div className="top-strip-inner">
          {/* <div className="logo"><img src="./img/logo.jpg" alt="" /></div> */}
          <div className="top-links">
            <div className="link-item">
              <img src="https://cdn-icons-png.flaticon.com/512/873/873120.png" alt="QuickBooks" />
              <span>quickbooks</span>
            </div>
            <div className="link-item">
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png" alt="Mailchimp" />
              <span>mailchimp</span>
            </div>
          </div>
        </div>
      </div>

      {/* Promo Banner */}
      <div className="promo-banner">
        <span className="promo-text">Save 50% for 12 months</span>x`x`– limited time offer.{" "}
        <a href="/Home.jsx" className="promo-link">Get started today.</a>
      </div>
    </div>
  );
};

export default Anousmentbar;
