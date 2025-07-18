import React from 'react';

const Helpsection = () => {
  return (
    <section className="help-section">
      <div className="help-text">
        <h2>
            Need expert help with your business? <br />
          <span className="bold">We got you.</span>
        </h2>
        <p>
         Whether you need a complete Shopify website or high-performing Meta ad campaigns, our team is ready to handle it end-to-end — design, strategy, execution, and support.
        </p>
    
         <a
          href="https://wa.me/919081264882?text=Hi, I'm interested in website or marketing support."
          target="_blank"
          rel="noopener noreferrer"
          className="help-btn"
        >
          Talk to Our Team on WhatsApp
        </a>
      </div>
      <div className="help-image">
        <img src='./img/help.avif' alt="Support agent" />
      </div>
    </section>
  );
};

export default Helpsection;
