import React, { useRef, useState } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { useSpring, a } from '@react-spring/three';
import * as THREE from 'three';

function ThreeDImage({ src, width = 3, height = 2 }) {
	const texture = useLoader(THREE.TextureLoader, src);
	const meshRef = useRef();
	const [hovered, setHovered] = useState(false);

	// Use spring animation for smooth scaling and rotation
	const { scale, rotation } = useSpring({
		scale: hovered ? 1.2 : 1, // Scale up on hover
		rotation: hovered ? [0.05, 0.2, 0] : [0, 0, 0], // Slight rotation for 3D effect
		config: { mass: 1, tension: 170, friction: 26 }, // Adjust spring dynamics
	});

	return (
		<a.mesh // Use animated mesh
			ref={meshRef}
			position={[0, 0, 0]}
			scale={scale} // Animated scale
			rotation={rotation} // Animated rotation
			castShadow
			onPointerOver={() => setHovered(true)} // Trigger hover
			onPointerOut={() => setHovered(false)} // Reset hover
		>
			<planeGeometry args={[width, height]} />
			<meshStandardMaterial map={texture} />
		</a.mesh>
	);
}

export default function PublicHealthInterventions() {
	return (
		<Canvas style={{ height: '100vh', background: '#f0f0f0' }} shadowmap>
			<ambientLight intensity={0.5} />
			<spotLight position={[10, 10, 10]} intensity={1000} castShadow />
			<ThreeDImage src='/nine-news.png' width={8} height={6} />
		</Canvas>
	);
}
