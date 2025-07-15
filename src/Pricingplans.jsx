import React from 'react';

const plans = [
  {
    label: '₹20/month for first 3 months',
    title: 'Basic',
    subtitle: 'For solo entrepreneurs',
    price: '₹1,994',
    frequency: 'INR /month',
    tag: 'Most Popular',
    cardRate: '2% 3rd-party payment providers',
    features: [
      '10 inventory locations',
      '24/7 chat support',
      'In-person selling by phone or POS device'
    ],
    buttonText: 'Try for free',
    highlight: true
  },
  {
    label: '₹20/month for first 3 months',
    title: 'Grow',
    subtitle: 'For small teams',
    price: '₹7,447',
    frequency: 'INR /month',
    cardRate: '1% 3rd-party payment providers',
    features: [
      '10 inventory locations',
      '24/7 chat support',
      
      'In-person selling by phone or POS device'
    ],
    buttonText: 'Try for free'
  },
  {
    label: '₹20/month for first 3 months',
    title: 'Advanced',
    subtitle: 'As your business scales',
    price: '₹30,164',
    frequency: 'INR /month',
    cardRate: '0.6% 3rd-party payment providers',
    features: [
      '10 inventory locations',
      'Enhanced 24/7 chat support',
    
      'In-person selling by phone or POS device'
    ],
    buttonText: 'Try for free'
  },
  {
    label: 'Available on a 1- or 3-year term',
    title: 'Plus',
    subtitle: 'For more complex businesses',
    price: '₹1,75,000',
    frequency: 'INR /month on a 3-year term',
    features: [
      '200 inventory locations',
      'Priority 24/7 phone support',
     
     
    ],
    buttonText: 'Get started',
    isPlus: true
  }
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
            <p className="card-rate-title">Card rates starting at</p>
            <ul>
              <li>{plan.cardRate}</li>
            </ul>
            <p className="features-title">Standout features</p>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="cta-button">{plan.buttonText}</button>
            {plan.tag && <div className="tag">{plan.tag}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricingplans;
