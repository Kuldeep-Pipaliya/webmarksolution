import React, { useEffect, useState } from 'react';

const slides = [
  {
    image: './img/aboutpart4.webp',
    title: 'Creative Website Development',
    description: 'We design mobile-friendly, SEO-optimized websites with high-quality visuals and smooth user experience — perfect for growing businesses.',
    buttonText: 'View Website Plans',
        link: 'https://wa.me/919081264882?text=Hi, I’m interested in growing my business with your website and marketing services.'

  },
  {
    image: './img/aboutpart4-2.webp',
    title: 'Effective Marketing Campaigns',
    description: 'From Meta ads to product storytelling, we create ad strategies that connect, convert, and help your brand grow faster.',
    buttonText: 'See Our Work',
       link: 'https://wa.me/919081264882?text=Hi, I’m interested in growing my business with your website and marketing services.'

  },
  {
    image: './img/aboutpart4-3.webp',
    title: 'Your Brand, Our Strategy',
    description: 'We work closely with you to plan and execute marketing that aligns with your goals — including creatives, videos, and product promotions.',
    buttonText: 'Get in Touch',
    link: 'https://wa.me/919081264882?text=Hi, I’m interested in growing my business with your website and marketing services.'
  }
];


const Aboutpart4 = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + slides.length) % slides.length);
  };

useEffect(() => {
  const interval = setInterval(() => {
    setCurrent(prev => (prev + 1) % slides.length);
  }, 4000);
  return () => clearInterval(interval);
}, []);


  return (
    <div className="better-together">
      <h2>Growing Better Together</h2>
      <div className="carousel">
        <button onClick={prevSlide} className="nav-button">&#8249;</button>
        <div className="slide">
          <img src={slides[current].image} alt={slides[current].title} />
          <div className="slide-content">
            <h3>{slides[current].title}</h3>
            <p>{slides[current].description}</p>
            <a href={slides[current].link} className="cta-button">
              {slides[current].buttonText}
            </a>
          </div>
        </div>
        <button onClick={nextSlide} className="nav-button">&#8250;</button>
      </div>

      <div className="dots">
        {slides.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Aboutpart4;
