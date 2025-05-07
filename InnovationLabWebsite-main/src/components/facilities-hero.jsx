import React from "react";
import '../styles/facilities.css';

const Facilities = () => {
   return (
    <div className="facility-hero" style={{
        backgroundImage: "url('/assets/images/facility-background.jpg')",
      }}>
      <div className="overlay">
        <h1 className="facilities-title">FACILITIES</h1>
        <div className="title-underline"></div>
      </div>
    </div>
  );
};

export default Facilities;
