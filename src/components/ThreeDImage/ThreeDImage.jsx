import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber'; 
import * as THREE from 'three';

function ThreeDImage({ src, width = 3, height = 2 }) {
  const texture = useLoader(THREE.TextureLoader, src);
  const meshRef = useRef();

  // Rotate the image gently to create a 3D effect
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; // Rotating along the Y-axis
      meshRef.current.rotation.x = Math.sin(meshRef.current.rotation.y) * 0.1; // Tilt effect for realism
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[width, height]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

export default function PublicHealthInterventions() {
  return (
    <Canvas style={{ height: '100vh', background: '#f0f0f0' }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} intensity={1} />
      <ThreeDImage src='/nine-news.png' />
    </Canvas>
  );
}
