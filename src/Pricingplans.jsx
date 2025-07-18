import React from 'react';

const plans = [
  {
    label: 'One-time Charge',
    title: 'Website Package',
    subtitle: 'Perfect for small businesses & startups',
    price: '₹4,000',
    frequency: 'One-time payment',
    tag: 'Best Value',
    cardRate: 'Includes 30 product listings',
    features: [
      'Free website theme suggestions',
      'Custom creative design by our team',
      'Mobile-friendly and responsive design',
      'Lifetime ownership of your website',
      'Basic SEO setup included',
      'WhatsApp & social media integration',
      'Fast Making in 4-5 working days'
    ],
    buttonText: 'Contact Us',
    highlight: true
  },

  {
    label: '₹7,000/month',
    title: 'Marketing Plan',
    subtitle: 'Grow your brand with Meta Ads',
    price: '₹7,000',
    frequency: 'Per month',
    cardRate: 'Complete ad management with no hidden costs',
    features: [
      'Meta Ads: Facebook & Instagram campaigns',
      'Campaign strategy + ad creation',
      'Custom creatives, banners & videos',
      'Product positioning & growth strategy',
      'Weekly performance review & suggestions'
    ],
    buttonText: 'Contact for Marketing'
  },

  {
    label: '₹10,000 Combo Plan',
    title: 'Website + Marketing',
    subtitle: 'All-in-one business launch pack',
    price: '₹10,000',
    frequency: 'One-time + Monthly setup',
    cardRate: 'Shopify website + Meta marketing in one pack',
    features: [
      'Custom Shopify website with theme & setup',
      '30 product listings + responsive design',
      'Facebook & Instagram ad campaigns',
      'Creative design: banners, videos, product ads'
    ],
    buttonText: 'Get Started'
  }

  // {
  //   label: 'Available on a 1- or 3-year term',
  //   title: 'Plus',
  //   subtitle: 'For more complex businesses',
  //   price: '₹1,75,000',
  //   frequency: 'INR /month on a 3-year term',
  //   features: [
  //     '200 inventory locations',
  //     'Priority 24/7 phone support',


  //   ],
  //   buttonText: 'Get started',
  //   isPlus: true
  // }
];

const Pricingplans = () => {
  return (
    <div className="pricing-container">
      <div className="billing-toggle">
        <button className="active">Pay monthly</button>
      </div>

      <div className="plans">
        {plans.map((plan, index) => (
          <div key={index} className={`plan-card ${plan.isPlus ? 'plus-plan' : ''}`}>
            <div className={`plan-label ${plan.isPlus ? 'plus-label' : ''}`}>
              {plan.label}
            </div>
            <h3>{plan.title}</h3>
            <p className="subtitle">{plan.subtitle}</p>
            <p className="price">{plan.price} <span>{plan.frequency}</span></p>
            <hr />
            <p className="card-rate-title">Transparent pricing with no hidden fees't</p>
            <ul>
              <li>{plan.cardRate}</li>
            </ul>
            <p className="features-title">Standout features</p>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button
              className="cta-button"
              onClick={() =>
                window.open(
                  `https://wa.me/919081264882?text=Hi, I'm interested in your ${plan.title} plan.`,
                  '_blank'
                )
              }
            >
              {plan.buttonText}
            </button>

            {plan.tag && <div className="tag">{plan.tag}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricingplans;
