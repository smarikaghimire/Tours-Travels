import React, { useState } from "react";
import "../css/home.css"; // Import a CSS file for styles (create one if not exists)

const Home = () => {
  const [activeVideo, setActiveVideo] = useState("images/vid-1.mp4");

  const videoButtons = [
    { id: 1, src: "images/vid-1.mp4" },
    { id: 2, src: "images/vid-2.mp4" },
    { id: 3, src: "images/vid-3.mp4" },
    { id: 4, src: "images/vid-4.mp4" },
    { id: 5, src: "images/vid-5.mp4" },
  ];

  const handleVideoBtnClick = (src) => {
    setActiveVideo(src);
  };

  return (
    <div>
      <section className="home" id="home">
        <div className="content">
          <h3>adventure is worthwhile</h3>
          <p>discover new places with us, adventure awaits</p>
          <a href="#" className="btn">
            discover more
          </a>
        </div>

        <div className="controls">
          {videoButtons.map((btn) => (
            <span
              key={btn.id}
              className={`vid-btn ${activeVideo === btn.src ? "active" : ""}`}
              onClick={() => handleVideoBtnClick(btn.src)}
            ></span>
          ))}
        </div>

        <div className="video-container">
          <div className="video-slider">
            {videoButtons.map((btn) => (
              <video
                key={btn.id}
                className={`video-slide ${activeVideo === btn.src ? "active" : ""}`}
                src={btn.src}
                loop
                autoPlay
                muted
              ></video>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
