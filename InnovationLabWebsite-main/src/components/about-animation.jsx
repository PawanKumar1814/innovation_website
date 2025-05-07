import { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import '../styles/about-hero-section.css';

function AboutAnimation() {
  return (
    <Canvas camera={{ position: [0, 0, 1] }} className="canvas-animation">
      <Stars />
    </Canvas>
  );
}

function Stars(props) {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));
  
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#ffa0e0" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
}

function HeroSection() {
  return (
    <div className="hero-about">
      <AboutAnimation />
      <div className="content-heading">
        <h1>About us</h1>
      </div>
    </div>
  );
}

export default HeroSection;
