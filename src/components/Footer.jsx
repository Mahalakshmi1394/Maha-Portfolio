import React from "react";
import { socialHandles } from "../data";

const Footer = () => {
  return (
    <footer className="section__wrapper" style={{ textAlign: "center", padding: "40px 20px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
      <p style={{ marginBottom: "10px" }}>© 2025 My Portfolio. All Rights Reserved.</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "15px", fontSize: "1.5rem" }}>
        {socialHandles.map((item, index) => (
          <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="icon__container">
            {item.icon}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
