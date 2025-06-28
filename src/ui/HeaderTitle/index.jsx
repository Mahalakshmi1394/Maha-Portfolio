import "./HeaderTitle.css";
import React, { useState } from "react";

const HeaderTitle = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <div className="header-container" onMouseMove={handleMouseMove}>
        <nav className="navbar-container">
          <div className="navbar-inner">
            <div className="nav-links">
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#skills">Skills</a>

              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
            <a href="#contact" className="hire-btn">
              Hire Me <span className="external-icon">↗</span>
            </a>
          </div>
        </nav>

        <div className="profile-image-container">
          <img
            src="src/assets/profile-1.png"
            alt="Profile"
            className="profile-image"
          />
        </div>

        {/* Static SVG Titles */}
        <svg
          width="614"
          height="400"
          viewBox="0 0 614 390"
          xmlns="http://www.w3.org/2000/svg"
          className="header__title"
        >
          <style>
            {`
              .title-text {
                font-family: Arial, sans-serif;
                font-weight: 700;
                font-size: 64px;
                fill: #ffffff;
              }
            `}
          </style>
          <text x="50%" y="30%" textAnchor="middle" dominantBaseline="middle" className="title-text">
            Web developer,
          </text>
          <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="title-text">
            AI / ML,
          </text>
          <text x="50%" y="70%" textAnchor="middle" dominantBaseline="middle" className="title-text">
            Data Science.
          </text>
        </svg>

        {/* Floating Mouse Text */}
        <svg
          width="100%"
          height="100%"
          className="absolute top-0 left-0 pointer-events-none"
        >
          <text
            x={position.x}
            y={position.y}
            fontSize="10"
            fill="white"
            fontFamily="Arial"
          
          >
          </text>
        </svg>

        {/* Content Box */}
        <div className="section-container">
          <div className="glow-circle"></div>

          <div className="content-box">
            <div className="code-snippet">
              <div className="window-controls">
                <div className="window-dot dot-red"></div>
                <div className="window-dot dot-yellow"></div>
                <div className="window-dot dot-green"></div>
              </div>
              <pre>
                <code>{`const developer = {
  firstName: "MAHALAKSHMI ",
  lastName: "U",
  Likes: repeat = () => {
    // Code();
    // Error();
    // Solve();
    // repeat();
  }
}`}</code>
              </pre>
            </div>

            <div className="stats-container">
              <p className="mission-statement">
                I dissect intricate user experience challenges to engineer
                integrity-focused solutions that resonate with billions of
                users.
              </p>

              <div className="stats-row">
                <div className="stat-item">
                  <div className="stat-number">35+</div>
                  <div className="stat-label">Workshops</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Hackathons</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Certifications</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTitle;
