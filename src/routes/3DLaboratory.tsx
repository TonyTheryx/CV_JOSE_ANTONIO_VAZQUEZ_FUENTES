import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function ThreeLaboratory() {
  return (
    <Canvas
      style={{ width: "100vw", height: "100vh" }}
      camera={{ position: [0, 0, 5], fov: 50 }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} />

      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>

      <OrbitControls />
    </Canvas>
  );
}