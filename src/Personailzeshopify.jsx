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
          <h2>Generate ROI with advanced segmentation</h2>
          <p>
            Our powerful segmentation logic and filters help you use relevant and
            timely communication to target the customers most likely to purchase.
          </p>
          <a href="/" className="explore-link">
            Explore segmentation <span>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Personailzeshopify;