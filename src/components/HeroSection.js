import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
  
      <img src="https://punjabpolice.gov.pk/system/files/mainbanner-bg-2.jpg" alt ="Banner"/>
      <h1>PKM E-PORTAL</h1>
      <p>FOR SEMI & ILLITERATE CITIZENS</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Service Details
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
