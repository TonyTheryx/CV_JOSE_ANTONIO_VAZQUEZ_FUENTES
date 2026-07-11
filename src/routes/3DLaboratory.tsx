import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js'
import { useLoader } from '@react-three/fiber'
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";



export default function ThreeLaboratory() {
   const materials = useLoader(MTLLoader, "/src/components/3DModels/Courage/Courage.mtl");
  const obj = useLoader(OBJLoader, "/src/components/3DModels/Courage/Courage.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });
  return (
    <Canvas
      style={{ width: "100vw", height: "100vh" }}
      camera={{ position: [0, 0, 5], fov: 50 }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} />

      <mesh>
        <boxGeometry args={[0.1, 0.1, 0.1]} />
        <meshStandardMaterial color="orange" />
        
      </mesh>
      <primitive object={obj} />

      <OrbitControls />
    </Canvas>
  );
}