import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Environment, Sparkles, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

const Fryer = () => {
  const texture = useLoader(THREE.TextureLoader, "/images/fryer.png");
  return (
    <mesh position={[0, -2, 0]} rotation={[0, 0, 0]} scale={[3, 3, 3]}>
      <planeGeometry args={[1.2, 1.3]} />
      <meshBasicMaterial
        map={texture}
        transparent={true}
        opacity={1}
        side={THREE.DoubleSide}
        depthTest={true}
        depthWrite={true}
      />
    </mesh>
  );
};

const Fry = () => {
  const spriteRef = useRef();
  const [hasLanded, setHasLanded] = useState(false);
  const [textureIndex, setTextureIndex] = useState(0);

  const startPosition = 4;
  const targetPosition = -2;
  const dropSpeed = 0.01;
  const bounceSpeed = 0;
  const bounceHeight = 0.15;

  // Create textures for all three sprites
  const textures = [
    new THREE.TextureLoader().load("/images/fries1.png"),
    new THREE.TextureLoader().load("/images/fries2.png"),
    new THREE.TextureLoader().load("/images/fries3.png"),
  ];

  useEffect(() => {
    if (!hasLanded) {
      const interval = setInterval(() => {
        setTextureIndex((prev) => (prev + 1) % 3);
      }, 200);

      return () => clearInterval(interval);
    }
  }, [hasLanded]);

  useFrame((state, delta) => {
    if (spriteRef.current) {
      if (!hasLanded) {
        spriteRef.current.position.y -=
          dropSpeed *
          (1 + (startPosition - spriteRef.current.position.y) * 0.05);
        spriteRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.8) * 0.2;

        if (spriteRef.current.position.y <= targetPosition) {
          setHasLanded(true);
          spriteRef.current.position.y = targetPosition;
        }
      } else {
        const bounce =
          Math.sin(state.clock.elapsedTime * bounceSpeed) * bounceHeight;
        spriteRef.current.position.y =
          targetPosition + Math.max(0, bounce * 0.2);
        spriteRef.current.rotation.z =
          Math.sin(state.clock.elapsedTime) * 0.1;
      }
    }
  });

  return (
    <sprite
      ref={spriteRef}
      position={[0, startPosition, 0]}
      scale={[1.8, 1.8, 1.8]}
    >
      <spriteMaterial
        attach="material"
        map={textures[textureIndex]}
        transparent={true}
      />
    </sprite>
  );
};

const FryScene = () => {
  return (
    <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <Environment preset="sunset" />
        <Suspense fallback={null}>
          <Fry />
          <Fryer />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default FryScene;
