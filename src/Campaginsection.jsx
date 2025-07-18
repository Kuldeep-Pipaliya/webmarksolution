// GenerativeAISection.jsx
import React, { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
// import "./GenerativeAISection.css";
// 
const Campaginsection = () => {
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
    <section className="genai-section">
      <h2 className="genai-title">
        Run High-Performing Campaigns <br />
        That Drive Sales & Brand Growth
      </h2>
      <div className="genai-container">
        <div className="genai-left">
          <h3>Marketing That Connects</h3>
          <p>
          We craft end-to-end Meta (Facebook & Instagram) campaigns for your products or brand.
            From campaign strategy to ad creatives, videos, product mockups, and targeting – we handle everything 
            to help you generate better ROI and customer engagement.
          </p>
          <a href="/" className="explore-link">
            Start a Campaign <span>&rarr;</span>
          </a>
        </div>

        <div className="genai-right">
          <div className="video-wrapper">
            <video
              ref={videoRef}
              className="genai-video"
              src="./img/video3.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
            <button type="button" className="video-toggle" onClick={toggleVideo}>
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campaginsection;