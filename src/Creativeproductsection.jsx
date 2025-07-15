import React, { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const CreativeProductSection = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const [isPlaying1, setIsPlaying1] = useState(true);
  const [isPlaying2, setIsPlaying2] = useState(true);

  const toggleVideo1 = () => {
    if (videoRef1.current.paused) {
      videoRef1.current.play();
      setIsPlaying1(true);
    } else {
      videoRef1.current.pause();
      setIsPlaying1(false);
    }
  };

  const toggleVideo2 = () => {
    if (videoRef2.current.paused) {
      videoRef2.current.play();
      setIsPlaying2(true);
    } else {
      videoRef2.current.pause();
      setIsPlaying2(false);
    }
  };

  return (
    <section className="creative-product-section">
      <div className="video-text-pair">
        <div className="video-wrapper">
          <video
            ref={videoRef1}
            src="./img/video4.mp4"
            className="dual-video"
            autoPlay
            muted
            loop
            playsInline
          />
          <button className="video-toggle" onClick={toggleVideo1}>
            {isPlaying1 ? <FaPause /> : <FaPlay />}
          </button>
        </div>

        <div className="text-content">
          <h3>Create branded content at scale with Creative Assistant</h3>
          <p>
            Our AI-powered design tools help engage audiences across touchpoints
            with professional logos and other assets via your imported brand kit.
          </p>
          <a href="/" className="explore-link">
            Explore Creative Assistant &rarr;
          </a>
        </div>
      </div>

      <div className="video-text-pair">
        <div className="video-wrapper">
          <video
            ref={videoRef2}
            src="./img/video5.mp4"
            className="dual-video"
            autoPlay
            muted
            loop
            playsInline
          />
          <button className="video-toggle" onClick={toggleVideo2}>
            {isPlaying2 ? <FaPause /> : <FaPlay />}
          </button>
        </div>

        <div className="text-content">
          <h3>Drive sales with AI-powered product recommendations</h3>
          <p>
            Use preset feeds like best sellers or new arrivals to send personalized
            emails with dynamic product recommendations based on your customer
            interactions.
          </p>
          <a href="/" className="explore-link">
            Explore dynamic product recommendations &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default CreativeProductSection;