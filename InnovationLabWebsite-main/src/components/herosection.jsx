import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Particles from 'react-tsparticles'; // ✅ Correct
import { loadFull } from 'tsparticles';
import '../styles/herosection.css'; // Import the CSS file

const HeroSection = () => {
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null); // Reference for the video container
  const textRef = useRef(null);
  const [videoPlayed, setVideoPlayed] = useState(false); // State to track video play status

  useEffect(() => {
    if (videoPlayed) {
      // Create a timeline for the animations after video finishes
      const tl = gsap.timeline();

      // Animation for the video container to move out of view and fade out
      tl.to(videoContainerRef.current, {
        y: -150, // Moves video upwards
        opacity: 0,
        duration: 1, // Duration for the video fade-out
        ease: 'power2.out',
        onComplete: () => {
          // Completely hide the video container after the animation
          videoContainerRef.current.style.display = 'none';
        },
      });

      // Animation for the text to fade in
      tl.to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.in',
      });
    }
  }, [videoPlayed]); // Trigger the effect when videoPlayed state changes

  // Particles setup with your provided options
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  const handleGifLoad = () => {
    // Set a delay equal to the duration of the GIF in milliseconds
    const gifDuration = 4000; // For example, 4 seconds
  
    setTimeout(() => {
      setVideoPlayed(true);
    }, gifDuration);
  };
  

  const particlesLoaded = (container) => {
    console.log(container);
  };

  // Handle video end event
  const handleVideoEnd = () => {
    setVideoPlayed(true); // Set videoPlayed to true when the video finishes
  };

  return (
    <div className="hero-section-wrapper">
      <div className="hero-section">
        {/* Particle background */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            autoPlay: true,
            background: {
              color: { value: '#000000' },
              opacity: 1,
            },
            fullScreen: { enable: false, zIndex: 0 },
            detectRetina: true,
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: { enable: true, mode: 'push' },
                onHover: { enable: true, mode: 'repulse' }, // Faster hover interaction
                resize: { enable: true },
              },
              modes: {
                repulse: {
                  distance: 150, // Reacts from a larger area
                  duration: 0.2, // Moves away quicker
                },
              },
            },
            particles: {
              number: { value: 50, density: { enable: true, area: 800 } },
              color: { value: '#ff0000', animation: { h: { enable: true, speed: 20, sync: true } } },
              shape: { type: 'circle' },
              opacity: { value: 0.7 },
              size: { value: { min: 2, max: 5 } },
              move: { enable: true, speed: 2.5 }, // **Increased speed for a more dynamic effect**
              links: { enable: false },
            },
          }}
        />
        

        {/* Video/GIF that will animate */}
        <div ref={videoContainerRef} className="video-container">
          <img
            src="./assets/hero_animation.gif"
            alt="Hero Animation"
            onLoad={handleGifLoad}
          />
        </div>


        {/* Text that appears after video completes */}
        <div ref={textRef} className="text-content">
          <h1>CSQUARE INNOVATION CENTER</h1>
          <p>Indian Institute of Technology, Palakkad</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;