import React from 'react';

const ContactUs = () => {
  return (
    <div>
      <div className="contact-container">
        <div className="contact-left">
          <h1>Contact Us About <br /> Our Marketing Services</h1>
          <p>
            We'd love to help you grow your brand, reach your target audience, increase your conversions,
            and take your business to the next level. Here are a few ways to get in touch with our marketing team.
          </p>

          <div className="contact-cards">
            <div className="contact-card">
              <div className="icon">📞</div>
              <h3>Call us directly</h3>
              <p className="number">+91 90812 64882</p>
            </div>

            <div className="contact-card">
              <div className="icon">💬</div>
              <h3>Chat with our team</h3>
              <button
                className="primary-btn"
                onClick={() => window.open('https://wa.me/919081264882', '_blank')}
              >
                Get in Touch
              </button>
            </div>

            <div className="contact-card">
              <div className="icon">📅</div>
              <h3>Request a consultation</h3>
             <button
                className="primary-btn"
                onClick={() => window.open('https://wa.me/919081264882', '_blank')}
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <img src="./img/contact.webp" alt="Contact Illustration" />
        </div>
      </div>

      {/* FORM SECTION */}
      <div className="form-section">
        <h2>Request a Consultation</h2>
        <p>Fill out the form to speak with one of our marketing experts.</p>
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
            We’re committed to your privacy. We use the information you provide to contact you about our marketing services and offerings.
            You may unsubscribe from these communications at any time. For more details, read our{' '}
            <a href="/privacy-policy">Privacy Policy</a>.
          </p>

          <button type="submit" className="next-btn">Next</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
