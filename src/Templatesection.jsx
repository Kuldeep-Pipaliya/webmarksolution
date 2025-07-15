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
        Create stunning emails faster by choosing from <br /> 130+ high-quality
        templates
      </h2>
      <div className="email-content">
        <div className="email-left">
          <h3>Pick and personalize the <br />design that’s just right</h3>
          <p>
            Choose a template that fits your industry and unique business goals to
            <br />see the difference a great layout can make.
          </p>
          <a href="#" className="explore-link">
            Explore templates <span>&rarr;</span>
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
