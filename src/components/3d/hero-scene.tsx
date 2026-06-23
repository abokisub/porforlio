'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Grid } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { useState, useRef, Suspense } from 'react';
import * as THREE from 'three';

function Particles() {
  const ref = useRef<THREE.Points>(null!);
  const [sphere] = useState(() => random.inSphere(new Float32Array(3000), { radius: 2 }) as Float32Array);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 25;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#10b981"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function SceneGrid() {
  const gridRef = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    if (gridRef.current) {
      // Gentle camera sway
      state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, (state.mouse.x * Math.PI) / 10, 0.05);
      state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, (state.mouse.y * Math.PI) / 10, 0.05);
      state.camera.lookAt(0, 0, 0);
    }
  });

  return (
    <group ref={gridRef}>
      <Grid 
        position={[0, -1, 0]} 
        args={[10.5, 10.5]} 
        cellSize={0.5} 
        cellThickness={0.5} 
        cellColor="#064e3b" 
        sectionSize={2.5} 
        sectionThickness={1} 
        sectionColor="#047857" 
        fadeDistance={5} 
        fadeStrength={1}
      />
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 2], fov: 60 }}>
      <Suspense fallback={null}>
        <Particles />
        <SceneGrid />
        <ambientLight intensity={0.5} />
      </Suspense>
    </Canvas>
  );
}
