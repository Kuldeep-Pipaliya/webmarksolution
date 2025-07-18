import React from 'react';

const Customerservice = () => {
  return (
    <div className="customer-service-container">
      <h1 className="heading">
        We offer expert <span className="highlight">24/7 Expert Support</span>
      </h1>
      <p className="subheading">
       Whether it's launching your Shopify website, running ads, or managing campaigns — our support team is always ready to assist you.
      </p>
      <a
        href="https://wa.me/919081264882?text=Hi, I need support with website or marketing services."
        target="_blank"
        rel="noopener noreferrer"
        className="support-link"
      >
        Chat with Support <span className="arrow">➜</span>
      </a>
    </div>
  );
};

export default Customerservice;
