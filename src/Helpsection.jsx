import React from 'react';

const Helpsection = () => {
  return (
    <section className="help-section">
      <div className="help-text">
        <h2>
          Need to hire a helping hand? <br />
          <span className="bold">We got you.</span>
        </h2>
        <p>
          From a quick template design to full-service campaign management, our global
          community of 850+ trusted experts does it all.
        </p>
        <button className="help-btn">Explore Mailchimp Experts</button>
      </div>
      <div className="help-image">
        <img src='./img/help.avif' alt="Support agent" />
      </div>
    </section>
  );
};

export default Helpsection;
