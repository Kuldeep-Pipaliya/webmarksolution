import React from 'react';

const ContactUs = () => {
  return (
    <div>
      <div className="contact-container">
        <div className="contact-left">
          <h1>Contact Us About <br /> HubSpot’s Software</h1>
          <p>
            We’d love to show you how you can get more traffic and leads, increase your sales productivity, 
            provide better customer service, or all of the above! Here are a few ways to reach out to our sales team.
          </p>

          <div className="contact-cards">
            <div className="contact-card">
              <div className="icon">📞</div>
              <h3>Call us directly</h3>
              <p className="number">000800 050 3669</p>
            </div>

            <div className="contact-card">
              <div className="icon">💬</div>
              <h3>Chat with our sales team</h3>
              <button className="primary-btn">Chat with Sales</button>
            </div>

            <div className="contact-card">
              <div className="icon">📅</div>
              <h3>Get a product demo</h3>
              <button className="primary-btn">Get a demo</button>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <img src="./img/contact.webp" alt="Contact Illustration" />
        </div>
      </div>

      {/* FORM SECTION */}
      <div className="form-section">
        <h2>Get a Demo</h2>
        <p>Complete the form for a free demo of HubSpot’s software.</p>
        <form className="demo-form">
          <div className="form-row">
            <input type="text" placeholder="First Name*" />
            <input type="text" placeholder="Last Name*" />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Email*" />
            <input type="tel" placeholder="Phone number*" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Company name*" />
            <input type="url" placeholder="Website URL*" />
          </div>
         
          <p className="privacy-text">
            We’re committed to your privacy. HubSpot uses the information you provide to us to contact you about our relevant content, products, and services. You may unsubscribe from these communications at any time. For more information, check out our{' '}
            <a href="/privacy-policy">Privacy Policy</a>.
          </p>

          <button type="submit" className="next-btn">Next</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
