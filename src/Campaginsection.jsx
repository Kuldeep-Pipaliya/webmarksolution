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
        Create effective marketing campaigns with <br />
        ease using intuitive design tools
      </h2>
      <div className="genai-container">
        <div className="genai-left">
          <h3>Let AI help you write the first draft</h3>
          <p>
            Intuit Assist helps you quickly craft relevant content like headlines and
            body copy. It can even create fully built emails—all you need to do is
            review, edit, and publish.
          </p>
          <a href="/" className="explore-link">
            Explore generative AI <span>&rarr;</span>
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