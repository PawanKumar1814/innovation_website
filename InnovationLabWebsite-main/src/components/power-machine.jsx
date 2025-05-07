import React, { useState, useEffect } from "react";
import TiltCard from "./TiltCard";
import "../styles/power-machine.css";

const ImageSlider = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [images.length, interval]);

  return (
    <img
      src={images[currentIndex]}
      alt="machine"
      className="machine-image slider-fade"
    />
  );
};

const PowerMachine = () => {
  const tiltOptions = {
    glare: true,
    "max-glare": 0.3,
    reverse: true,
    scale: 1.05,
    speed: 1000,
  };

  const powerTools = [
    {
      title: "CNC LASER CUTTER",
      images: ["/assets/images/cnc-laser.jpg", "/assets/images/cnc-laser.jpg"],
      make: "Kavone Technology",
      model: "KL1060",
      links: { spec: "#", form: "#", charge: "#" },
    },
    {
      title: "CNC LASER CUTTER",
      images: ["/assets/images/cnc-laser.jpg", "/assets/images/cnc-laser.jpg"],
      make: "Kavone Technology",
      model: "KL1060",
      links: { spec: "#", form: "#", charge: "#" },
    },
    {
      title: "CNC LASER CUTTER",
      images: ["/assets/images/cnc-laser.jpg", "/assets/images/cnc-laser.jpg"],
      make: "Kavone Technology",
      model: "KL1060",
      links: { spec: "#", form: "#", charge: "#" },
    },
    {
      title: "CNC LASER CUTTER",
      images: ["/assets/images/cnc-laser.jpg", "/assets/images/cnc-laser.jpg"],
      make: "Kavone Technology",
      model: "KL1060",
      links: { spec: "#", form: "#", charge: "#" },
    },
    {
      title: "CNC LASER CUTTER",
      images: ["/assets/images/cnc-laser.jpg", "/assets/images/cnc-laser.jpg"],
      make: "Kavone Technology",
      model: "KL1060",
      links: { spec: "#", form: "#", charge: "#" },
    },
    {
      title: "CNC LASER CUTTER",
      images: ["/assets/images/cnc-laser.jpg", "/assets/images/cnc-laser.jpg"],
      make: "Kavone Technology",
      model: "KL1060",
      links: { spec: "#", form: "#", charge: "#" },
    },
    {
      title: "CNC LASER CUTTER",
      images: ["/assets/images/cnc-laser.jpg", "/assets/images/cnc-laser.jpg"],
      make: "Kavone Technology",
      model: "KL1060",
      links: { spec: "#", form: "#", charge: "#" },
    },
    {
      title: "CNC LASER CUTTER",
      images: ["/assets/images/cnc-laser.jpg", "/assets/images/cnc-laser.jpg"],
      make: "Kavone Technology",
      model: "KL1060",
      links: { spec: "#", form: "#", charge: "#" },
    },
  ];

  const electricTools = [
    {
      title: "CNC MILLING MACHINE",
      images: ["/assets/images/cnc-miling.jpg", "/assets/images/cnc-miling.jpg"],
      make: "Tormach",
      model: "PCNC 770",
      links: { spec: "#", form: "#", charge: "#" },
    },
    // Repeat manually
    {
      title: "CNC MILLING MACHINE",
      images: ["/assets/images/cnc-miling.jpg", "/assets/images/cnc-miling.jpg"],
      make: "Tormach",
      model: "PCNC 770",
      links: { spec: "#", form: "#", charge: "#" },
    },
    {
      title: "CNC MILLING MACHINE",
      images: ["/assets/images/cnc-miling.jpg", "/assets/images/cnc-miling.jpg"],
      make: "Tormach",
      model: "PCNC 770",
      links: { spec: "#", form: "#", charge: "#" },
    },
    {
      title: "CNC MILLING MACHINE",
      images: ["/assets/images/cnc-miling.jpg", "/assets/images/cnc-miling.jpg"],
      make: "Tormach",
      model: "PCNC 770",
      links: { spec: "#", form: "#", charge: "#" },
    },
    {
      title: "CNC MILLING MACHINE",
      images: ["/assets/images/cnc-miling.jpg", "/assets/images/cnc-miling.jpg"],
      make: "Tormach",
      model: "PCNC 770",
      links: { spec: "#", form: "#", charge: "#" },
    },
    {
      title: "CNC MILLING MACHINE",
      images: ["/assets/images/cnc-miling.jpg", "/assets/images/cnc-miling.jpg"],
      make: "Tormach",
      model: "PCNC 770",
      links: { spec: "#", form: "#", charge: "#" },
    },
    {
      title: "CNC MILLING MACHINE",
      images: ["/assets/images/cnc-miling.jpg", "/assets/images/cnc-miling.jpg"],
      make: "Tormach",
      model: "PCNC 770",
      links: { spec: "#", form: "#", charge: "#" },
    },
    {
      title: "CNC MILLING MACHINE",
      images: ["/assets/images/cnc-miling.jpg", "/assets/images/cnc-miling.jpg"],
      make: "Tormach",
      model: "PCNC 770",
      links: { spec: "#", form: "#", charge: "#" },
    },
  ];

  const threeDTools = [
    {
      title: "FDM 3D PRINTER",
      images: ["/assets/images/3d-printer.jpg", "/assets/images/3d-printer.jpg"],
      make: "Ultimaker",
      model: "Ultimaker 2+",
      links: { spec: "#", form: "#", charge: "#" },
    },
    // Repeat manually
    {
      title: "FDM 3D PRINTER",
      images: ["/assets/images/3d-printer.jpg", "/assets/images/3d-printer.jpg"],
      make: "Ultimaker",
      model: "Ultimaker 2+",
      links: { spec: "#", form: "#", charge: "#" },
    },
    {
      title: "FDM 3D PRINTER",
      images: ["/assets/images/3d-printer.jpg", "/assets/images/3d-printer.jpg"],
      make: "Ultimaker",
      model: "Ultimaker 2+",
      links: { spec: "#", form: "#", charge: "#" },
    },
    {
      title: "FDM 3D PRINTER",
      images: ["/assets/images/3d-printer.jpg", "/assets/images/3d-printer.jpg"],
      make: "Ultimaker",
      model: "Ultimaker 2+",
      links: { spec: "#", form: "#", charge: "#" },
    },
    {
      title: "FDM 3D PRINTER",
      images: ["/assets/images/3d-printer.jpg", "/assets/images/3d-printer.jpg"],
      make: "Ultimaker",
      model: "Ultimaker 2+",
      links: { spec: "#", form: "#", charge: "#" },
    },
    {
      title: "FDM 3D PRINTER",
      images: ["/assets/images/3d-printer.jpg", "/assets/images/3d-printer.jpg"],
      make: "Ultimaker",
      model: "Ultimaker 2+",
      links: { spec: "#", form: "#", charge: "#" },
    },
    {
      title: "FDM 3D PRINTER",
      images: ["/assets/images/3d-printer.jpg", "/assets/images/3d-printer.jpg"],
      make: "Ultimaker",
      model: "Ultimaker 2+",
      links: { spec: "#", form: "#", charge: "#" },
    },
    {
      title: "FDM 3D PRINTER",
      images: ["/assets/images/3d-printer.jpg", "/assets/images/3d-printer.jpg"],
      make: "Ultimaker",
      model: "Ultimaker 2+",
      links: { spec: "#", form: "#", charge: "#" },
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="power-machine-page">
      {/* Navigation Buttons */}
      <div className="tool-buttons-container">
        <button onClick={() => scrollToSection('power-tools')}>Power Tools</button>
        <button onClick={() => scrollToSection('electric-tools')}>Electric Tools</button>
        <button onClick={() => scrollToSection('three-d-tools')}>3D Tools</button>
      </div>

      {/* Sections */}
      <section id="power-tools" className="tools-section">
        <h2 className="section-title">Power Tools</h2>
        <div className="power-machine-container">
          {powerTools.map((machine, index) => (
            <TiltCard key={`power-${index}`} options={tiltOptions} className="machine-card rgb">
              <ImageSlider images={machine.images} interval={4000} />
              <h2 className="machine-title">{machine.title}</h2>
              <p className="machine-make">Make: {machine.make}</p>
              <p className="machine-model">Model: {machine.model}</p>
              <div className="machine-links">
                <a href={machine.links.spec} target="_blank" rel="noopener noreferrer">Technical Spec</a>
                {/* <a href={machine.links.form} target="_blank" rel="noopener noreferrer">Job Request Form</a> */}
                <a href={machine.links.charge} target="_blank" rel="noopener noreferrer">User Charge</a>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      <section id="electric-tools" className="tools-section">
        <h2 className="section-title">Electric Tools</h2>
        <div className="power-machine-container">
          {electricTools.map((machine, index) => (
            <TiltCard key={`electric-${index}`} options={tiltOptions} className="machine-card rgb">
              <ImageSlider images={machine.images} interval={4000} />
              <h2 className="machine-title">{machine.title}</h2>
              <p className="machine-make">Make: {machine.make}</p>
              <p className="machine-model">Model: {machine.model}</p>
              <div className="machine-links">
                <a href={machine.links.spec} target="_blank" rel="noopener noreferrer">Technical Spec</a>
                {/* <a href={machine.links.form} target="_blank" rel="noopener noreferrer">Job Request Form</a> */}
                <a href={machine.links.charge} target="_blank" rel="noopener noreferrer">User Charge</a>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      <section id="three-d-tools" className="tools-section">
        <h2 className="section-title">3D Tools</h2>
        <div className="power-machine-container">
          {threeDTools.map((machine, index) => (
            <TiltCard key={`threeD-${index}`} options={tiltOptions} className="machine-card rgb">
              <ImageSlider images={machine.images} interval={4000} />
              <h2 className="machine-title">{machine.title}</h2>
              <p className="machine-make">Make: {machine.make}</p>
              <p className="machine-model">Model: {machine.model}</p>
              <div className="machine-links">
                <a href={machine.links.spec} target="_blank" rel="noopener noreferrer">Technical Spec</a>
                {/* <a href={machine.links.form} target="_blank" rel="noopener noreferrer">Job Request Form</a> */}
                <a href={machine.links.charge} target="_blank" rel="noopener noreferrer">User Charge</a>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PowerMachine;
