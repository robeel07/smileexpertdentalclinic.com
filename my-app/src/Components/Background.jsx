import React from "react";
import "./Background.css";
import bg from "./Images/bg.jpg"; 

export default function HeroSection() {
  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="hero-content">
        <h2>Treatments</h2>
        <h1>Yellow Teeth Treatment in Lahore</h1>
      </div>
    </div>
  );
}
