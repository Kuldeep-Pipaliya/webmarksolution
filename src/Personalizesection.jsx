import React from "react";

const Personalizesection = () => {
  return (
    <section className="personalize-section">
      <h2 className="section-title">Personalize your marketing at scale</h2>

      <div className="personalize-container">
        {/* Left Text */}
        <div className="personalize-left">
          <h3>Reach more customers with less effort</h3>
          <p>
            Mailchimp’s automations help you engage your audience at the right
            time, with the right message, and without any manual intervention.
          </p>
          <a href="#" className="explore-link">
            Explore automations <span className="arrow">→</span>
          </a>
        </div>

        {/* Right Video */}
        <div className="personalize-right">
          <video
            src="./img/shopify.mp4"  // ✅ Replace with your actual path
            autoPlay
            muted
            loop
            playsInline
            className="video-box"
          ></video>
        </div>
      </div>
    </section>
  );
};

export default Personalizesection;
