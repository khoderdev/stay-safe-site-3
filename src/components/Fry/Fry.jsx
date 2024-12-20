import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  useGLTF,
  Environment,
  Sparkles,
  PerspectiveCamera,
} from "@react-three/drei";
import * as THREE from "three";

const Fryer = () => {
  const texture = useLoader(THREE.TextureLoader, "/images/fryer.png");
  return (
    <mesh position={[0, -2, 0]} rotation={[0, 0, 0]} scale={[3, 3, 3]}>
      <planeGeometry args={[1.2, 1.2]} />
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

const Model = () => {
  const { nodes } = useGLTF("/fry.glb");
  const modelRef = useRef();
  const [hasLanded, setHasLanded] = useState(false);
  const startPosition = 8;
  const targetPosition = -1.8;
  const dropSpeed = 0.03;
  const rotationSpeed = 0.02;
  const bounceHeight = 0.3;
  const bounceSpeed = 4;

  useFrame((state, delta) => {
    if (modelRef.current) {
      if (!hasLanded) {
        modelRef.current.position.y -=
          dropSpeed * (1 + (startPosition - modelRef.current.position.y) * 0.1);
        modelRef.current.position.x = Math.sin(state.clock.elapsedTime) * 0.2;
        modelRef.current.rotation.x =
          Math.sin(state.clock.elapsedTime * 2) * 0.3;
        modelRef.current.rotation.z = Math.cos(state.clock.elapsedTime) * 0.15;
        modelRef.current.rotation.y += rotationSpeed * delta;

        if (modelRef.current.position.y <= targetPosition) {
          setHasLanded(true);
          modelRef.current.position.y = targetPosition;
        }
      } else {
        const bounce =
          Math.sin(state.clock.elapsedTime * bounceSpeed) * bounceHeight;
        modelRef.current.position.y =
          targetPosition + Math.max(0, bounce * 0.2);
        modelRef.current.rotation.z =
          Math.sin(state.clock.elapsedTime * 2) * 0.1;
      }
    }
  });

  return (
    <>
      <group
        ref={modelRef}
        position={[0, startPosition, -1]}
        scale={[1.2, 1.2, 1.2]}
      >
        <mesh geometry={nodes.Mesh1.geometry}>
          <meshStandardMaterial color="#d7bc1b" />
        </mesh>
      </group>
      {hasLanded && (
        <Sparkles
          count={20}
          scale={[3, 0.5, 3]}
          position={[0, -1.6, -1]}
          size={2}
          speed={0.3}
          color="#ffeb3b"
        />
      )}
    </>
  );
};

const Fry = () => {
  return (
    <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      <Canvas
        shadows
        camera={{ position: [0, 0, 10], fov: 45 }}
        style={{ background: "#87CEEB" }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <Environment preset="sunset" />
        <Suspense fallback={null}>
          <Model />
          <Fryer />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Fry;
