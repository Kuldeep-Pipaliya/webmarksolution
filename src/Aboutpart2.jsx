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
          <h2>Our Mission: Helping Millions of Organizations Grow Better</h2>
          <p>
            We believe not just in growing bigger, but in growing better. And growing better means aligning the success of your own business with the success of your customers. Win-win!
          </p>
        </div>
      </section>

      <section className="story-section">
        <div className="story-text">
          <h2>Our Story</h2>
          <p>
            In 2004, fellow MIT graduate students Brian Halligan and Dharmesh Shah noticed a major shift in the way people shop and purchase products. Buyers didn’t want to be interrupted by ads, they wanted helpful information. In 2006, they founded HubSpot to help companies use that shift to grow better with inbound marketing.
          </p>
          <p>
            Along the way, HubSpot expanded beyond marketing into a crafted, not cobbled suite of products that create the frictionless customer experience that buyers expect today. Expertly led by CEO Yamini Rangan, HubSpot uses its customer platform built on an AI-powered Smart CRM to help millions of scaling organizations grow better.
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
