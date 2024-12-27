import React, { useEffect, useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';

function ThreeDImage({ src, width = 1, height = 1 }) {
  const meshRef = useRef();
  const { gl } = useThree();

  useEffect(() => {
    // Handle WebGL context loss
    const handleContextLost = (event) => {
      event.preventDefault();
      console.log('WebGL context lost. Trying to restore...');
    };

    // Handle WebGL context restoration
    const handleContextRestored = () => {
      console.log('WebGL context restored');
      // Reload textures and reinitialize if needed
      if (meshRef.current) {
        const texture = new TextureLoader().load(src);
        meshRef.current.material.map = texture;
        meshRef.current.material.needsUpdate = true;
      }
    };

    const canvas = gl.domElement;
    canvas.addEventListener('webglcontextlost', handleContextLost);
    canvas.addEventListener('webglcontextrestored', handleContextRestored);

    return () => {
      canvas.removeEventListener('webglcontextlost', handleContextLost);
      canvas.removeEventListener('webglcontextrestored', handleContextRestored);
    };
  }, [gl, src]);

  useFrame((state) => {
    if (meshRef.current) {
      // Add subtle animation
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[width, height]} />
      <meshStandardMaterial>
        <textureLoader args={[src]} />
      </meshStandardMaterial>
    </mesh>
  );
}

export default ThreeDImage;
