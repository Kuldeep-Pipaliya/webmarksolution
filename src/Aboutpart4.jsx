import React, { useEffect, useState } from 'react';

const slides = [
  {
    image: './img/aboutpart4.webp',
    title: 'HubSpot Diversity, Inclusion & Belonging',
    description: 'Explore our latest Diversity, Inclusion, and Belonging Report to learn about the work we’ve done this year to build a more equitable company that reflects the diversity of our customers.',
    buttonText: 'Read the report',
  },
  {
    image: './img/aboutpart4-2.webp',
    title: 'Supporting Global Communities',
    description: 'Discover how we engage with global communities to foster inclusive growth and opportunities for all.',
    buttonText: 'Learn more',
  },
  {
    image: './img/aboutpart4-3.webp',
    title: 'Innovating for the Future',
    description: 'See how HubSpot is driving innovation to create better solutions for businesses worldwide.',
    buttonText: 'Explore innovations',
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
  const interval = setInterval(nextSlide, 4000); // 4 seconds

  return () => clearInterval(interval); // Cleanup before next effect call
}, [nextSlide]);


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
