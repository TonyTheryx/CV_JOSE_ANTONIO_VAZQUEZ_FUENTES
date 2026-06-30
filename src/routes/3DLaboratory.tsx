import { OrbitControls } from "@react-three/drei";

export default function ThreeLaboratory() {
  return (
    <>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>

      <OrbitControls />
    </>
  );
}