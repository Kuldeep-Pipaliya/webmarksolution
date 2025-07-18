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
          <h3>Build a Professional Website with Brand Identity</h3>
          <p>
            We create modern, mobile-friendly Shopify websites tailored to your brand.
            Our team also provides creative banners, product mockups, and layout suggestions that match your market.
          </p>
          <a
            href="https://wa.me/919081264882?text=Hi, I'm interested in your website and branding service."
            target="_blank"
            rel="noopener noreferrer"
            className="explore-link"
          >
            Start Website Project &rarr;
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
          <h3>Promote Your Best-Selling Products with Meta Ads</h3>
          <p>
           We run targeted Facebook and Instagram campaigns to boost your top products. 
            Get performance-driven creatives, compelling ad copy, and complete campaign management — all in one place.
          </p>
         <a
            href="https://wa.me/919081264882?text=Hi, I'm interested in promoting my products with your Meta marketing service."
            target="_blank"
            rel="noopener noreferrer"
            className="explore-link"
          >
            Boost My Product &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default CreativeProductSection;