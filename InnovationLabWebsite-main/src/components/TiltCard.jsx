// src/components/TiltCard.js
import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const TiltCard = ({ children, options, className }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, options);
    }
    return () => tiltRef.current?.vanillaTilt?.destroy();
  }, [options]);

  return (
    <div ref={tiltRef} className={className}>
      {children}
    </div>
  );
};

export default TiltCard;
