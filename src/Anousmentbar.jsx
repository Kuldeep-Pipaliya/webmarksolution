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
            <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
                alt="Shopify"
              />
              <span>Shopify Website</span>
            </div>
            <div className="link-item">
                <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Meta Ads"
              />
              <span>Meta Marketing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Promo Banner */}
      <div className="promo-banner">
        <span className="promo-text">   Need a Shopify store or result-driven Facebook/Instagram ads?</span>{" "}
        <a href="/Home.jsx" className="promo-link"> Let's discuss on WhatsApp →</a>
      </div>
    </div>
  );
};

export default Anousmentbar;
