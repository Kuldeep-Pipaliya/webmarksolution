import React from 'react';

const Aboutpart2 = () => {
  return (
    <div className="about-page">
      <section className="mission-section">
        <img
          src="./img/aboutpart2.webp"
          alt="Grow Better"
          className="about-image"
        />
        <div className="mission-text">
          <h2>Our Mission: Helping Brands Grow Online</h2>
          <p>
            Our goal is simple — empower small businesses and entrepreneurs to scale through smart, impactful digital marketing.
            We craft strategies that don’t just look good but deliver real results across Meta platforms.
          </p>
        </div>
      </section>

      <section className="story-section">
        <div className="story-text">
          <h2>Our Story</h2>
          <p>
           What started as a small team passionate about digital creativity has now grown into a full-service marketing agency. 
            We’ve helped hundreds of businesses increase visibility and drive sales through effective social media campaigns.
          </p>
          <p>
             From designing high-converting websites to launching ROI-driven Meta ads, we handle every part of your online growth journey. 
            Our commitment is to build lasting relationships with our clients by delivering transparent, performance-based services.
          </p>
        </div>
        <img
          src="./img/aboutpart22.webp"
          alt="Our Story"
          className="about-image"
        />
      </section>
    </div>
  );
};

export default Aboutpart2;
