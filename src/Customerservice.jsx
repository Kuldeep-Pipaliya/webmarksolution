import React from 'react';

const Customerservice = () => {
  return (
    <div className="customer-service-container">
      <h1 className="heading">
        We offer expert <span className="highlight">24/7 customer service</span>
      </h1>
      <p className="subheading">
        Our customer service team is always available and ready to support you if you ever need help.
      </p>
      <a href="/" className="support-link">
        See our support offerings <span className="arrow">➜</span>
      </a>
    </div>
  );
};

export default Customerservice;
