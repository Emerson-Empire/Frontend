import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, OrbitControls, useTexture, Stars } from "@react-three/drei";
import * as THREE from "three";
import earthTextureUrl from "../../../assets/earth-texture.jpg";

const CITIES = [
  { lat: 40.7, lon: -74.0 },   // New York
  { lat: 51.5, lon: -0.12 },   // London
  { lat: 48.9, lon: 2.35 },    // Paris
  { lat: 35.7, lon: 139.7 },   // Tokyo
  { lat: -23.5, lon: -46.6 },  // São Paulo
  { lat: 1.35, lon: 103.8 },   // Singapore
  { lat: 55.75, lon: 37.6 },   // Moscow
  { lat: -33.9, lon: 18.4 },   // Cape Town
];

function latLonToXYZ(lat: number, lon: number, r: number): [number, number, number] {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return [
    -(r * Math.sin(phi) * Math.cos(theta)),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta),
  ];
}

function PulsingDot({
  position,
  delay,
}: {
  position: [number, number, number];
  delay: number;
}) {
  const pulseRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!pulseRef.current) return;
    const t = (clock.elapsedTime + delay) % 2;
    pulseRef.current.scale.setScalar(1 + t * 3);
    (pulseRef.current.material as THREE.MeshBasicMaterial).opacity = Math.max(
      0,
      0.6 - t * 0.3
    );
  });

  return (
    <group position={position}>
      {/* Bright core */}
      <mesh>
        <sphereGeometry args={[0.038, 16, 16]} />
        <meshStandardMaterial
          color="#7dd3fc"
          emissive="#3b82f6"
          emissiveIntensity={5}
        />
      </mesh>
      {/* Expanding pulse ring */}
      <mesh ref={pulseRef}>
        <sphereGeometry args={[0.055, 16, 16]} />
        <meshBasicMaterial color="#93c5fd" transparent opacity={0.55} />
      </mesh>
    </group>
  );
}

function EarthGlobe() {
  const groupRef = useRef<THREE.Group>(null);
  const texture = useTexture(earthTextureUrl);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0012;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Real Earth photo texture */}
      <Sphere args={[2.2, 128, 128]}>
        <meshStandardMaterial map={texture} />
      </Sphere>

      {/* Inner atmosphere haze */}
      <Sphere args={[2.27, 64, 64]}>
        <meshStandardMaterial
          color="#60a5fa"
          transparent
          opacity={0.065}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Outer glow corona */}
      <Sphere args={[2.45, 32, 32]}>
        <meshStandardMaterial
          color="#1d4ed8"
          transparent
          opacity={0.03}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* City network dots */}
      {CITIES.map((city, i) => (
        <PulsingDot
          key={i}
          position={latLonToXYZ(city.lat, city.lon, 2.24)}
          delay={i * 0.75}
        />
      ))}
    </group>
  );
}

export default function Globe3D() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <color attach="background" args={["#00060f"]} />

      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 3, 5]} intensity={2.4} color="#ffffff" />
      {/* Blue fill light for the dark side */}
      <pointLight position={[-8, -2, -6]} intensity={2} color="#1e3a8a" />
      {/* Subtle warm rim */}
      <pointLight position={[0, 6, -4]} intensity={0.6} color="#fbbf24" />

      <Stars
        radius={220}
        depth={60}
        count={6000}
        factor={3.5}
        saturation={0}
        fade
        speed={0.4}
      />

      <Suspense fallback={null}>
        <EarthGlobe />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.35}
        enablePan={false}
      />
    </Canvas>
  );
}
