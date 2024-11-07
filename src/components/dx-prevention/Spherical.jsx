import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Billboard, Text, TrackballControls } from '@react-three/drei'

function Word({ children, ...props }) {
  const color = new THREE.Color()
  const fontProps = { font: '/Inter-Bold.woff', fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const over = (e) => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)
  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    ref.current.material.color.lerp(color.set(hovered ? '#fa2720' : 'white'), 0.1)
  })
  return (
    <Billboard {...props}>
      <Text ref={ref} onPointerOver={over} onPointerOut={out} onClick={() => console.log('clicked')} {...fontProps} children={children} />
    </Billboard>
  )
}

function Cloud({ words, radius = 20 }) {
  // Use provided words array and distribute them spherically
  const spherical = new THREE.Spherical()
  const count = words.length
  const phiSpan = Math.PI / (count + 1)
  const thetaSpan = (Math.PI * 2) / count

  const wordPositions = useMemo(() => {
    const positions = []
    for (let i = 0; i < count; i++) {
      const phi = phiSpan * (i + 1)
      const theta = thetaSpan * (i % count)
      const pos = new THREE.Vector3().setFromSpherical(spherical.set(radius, phi, theta))
      positions.push([pos, words[i]])
    }
    return positions
  }, [words, count, radius])

  return wordPositions.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)
}

export default function Spherical() {
  const words = [
    'Obesity', 'Type 2 Diabetes', 'Anthrax Cervical Cancer', 'Hypertension Lung Cancer', 
    'Malaria Metabolic Syndrome', 'STI Rabies Chronic Heart Disease', 'HIV HPV COPD Bladder Cancer Cholera',
    'Work-Related Musculoskeletal Diseases', 'High Cholesterol Slips & Lapses COVID-19 Asthma',
    'Food Poisoning Mumps n Syndrome', 'Tuberculosis Chlamydia Sleep Apnea DiphtherInfluenza Hearing Loss Hepatitis',
    'Colon Cancer Skin Cancer Hand-Arm Vibratioia Mesothelioma Mpox',
    'Brucellosis Measles Occupational Coronary Artery Disease MERS Polio'
  ];

  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
      <fog attach="fog" args={['#202025', 0, 80]} />
      <Suspense fallback={null}>
        <group rotation={[10, 10.5, 10]}>
          <Cloud words={words} radius={20} />
        </group>
      </Suspense>
      <TrackballControls />
    </Canvas>
  )
}
