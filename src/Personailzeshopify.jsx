// SegmentationSection.jsx
import React, { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const Personailzeshopify = () => {
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
    <section className="segment-section">
      <div className="segment-container">
        <div className="segment-left">
          <div className="video-wrapper">
            <video
              ref={videoRef}
              src="/img/video2.mp4"
              className="segment-video"
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

        <div className="segment-right">
          <h2>Launch Your Shopify Store with D2C Strategy</h2>
          <p>
             We help brands go direct-to-consumer with powerful Shopify websites and performance marketing. 
            Get a fully designed store, product listings, and custom creatives that drive traffic and conversions.
          </p>
        <a
            href="https://wa.me/919081264882?text=Hi, I’m interested in your Shopify website and D2C marketing service."
            target="_blank"
            rel="noopener noreferrer"
            className="explore-link"
          >
            Start on WhatsApp <span>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Personailzeshopify;