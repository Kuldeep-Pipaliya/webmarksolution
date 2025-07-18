// EmailTemplatesSection.jsx
import React, { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const Templatesection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideo = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="email-template-section">
      <h2 className="email-heading">
      Choose From 130+ Website Layouts <br /> Designed to Convert
      </h2>
      <div className="email-content">
        <div className="email-left">
        <h3>Pick a Shopify design that fits your brand</h3>
          <p>
              We help you select the right theme, customize it to match your style, 
            and launch your store with clean, mobile-ready design that engages customers from day one.
          </p>
           <a
            href="https://wa.me/919081264882?text=Hi, I'm interested in choosing a website layout and building my Shopify store."
            target="_blank"
            rel="noopener noreferrer"
            className="explore-link"
          >
            View Layout Options <span>&rarr;</span>
          </a>
        </div>

        <div className="email-right">
          <div className="video-wrapper">
            <video
              ref={videoRef}
              src="./img/video6.mp4"
              className="email-video"
              autoPlay
              muted
              loop
              playsInline
            />
            <button className="video-toggle" onClick={toggleVideo}>
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Templatesection;
