import React, { useState } from 'react';

const faqData = [
  {
    question: 'Do you provide complete Shopify website setup?',
    answer: 'Yes, we build mobile-friendly Shopify websites with theme suggestions, product uploads, and custom creative designs.',
  },
  {
    question: 'What kind of marketing do you offer?',
    answer: 'We offer performance-driven marketing on Facebook and Instagram using Meta Ads, including ad creatives, targeting setup, and reporting.',
  },
  {
    question: 'How quickly can the website be delivered?',
    answer: 'We deliver fully functional Shopify websites within 4–5 working days after receiving your content and requirements.',
  },
  {
    question: 'Will you provide creatives for marketing?',
    answer: 'Yes, we provide ad banners, product graphics, videos, and content tailored for your target audience and brand style.',
  },
  {
    question: 'Do I need technical knowledge to get started?',
    answer: 'No. We handle everything — from setup to launch — so you can focus on your business while we manage the rest.',
  },
  {
    question: 'How do I get support if I need help?',
    answer: 'You can contact our support team anytime via WhatsApp for quick assistance with your website or ads.'
  }
];

const FAQaccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">FAQs</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{item.question}</span>
              <span className={`faq-icon ${openIndex === index ? 'rotate' : ''}`}>+</span>
            </div>
            <div
              className={`faq-answer ${openIndex === index ? 'open' : ''}`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQaccordion;
