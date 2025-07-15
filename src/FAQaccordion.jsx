import React, { useState } from 'react';

const faqData = [
  {
    question: 'What is email marketing software?',
    answer: 'Email marketing software helps businesses send emails to customers efficiently and track performance.',
  },
  {
    question: 'What does an email marketing platform do?',
    answer: 'It automates sending, manages contact lists, tracks analytics, and helps design campaigns.',
  },
  {
    question: 'How effective is email marketing?',
    answer: 'When done correctly, email marketing has one of the highest ROI among digital channels.',
  },
  {
    question: 'What are the four types of email marketing campaigns?',
    answer: 'Newsletters, transactional emails, behavioral emails, and promotional campaigns.',
  },
  {
    question: 'How can I optimize email marketing campaigns?',
    answer: 'Use A/B testing, personalize content, segment your audience, and track key metrics.',
  },
  {
    question: 'How can I start email marketing?',
    answer: 'Choose a platform, build a list, design your emails, and start with a small campaign.',
  },
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
