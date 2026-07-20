import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js'
import { useLoader } from '@react-three/fiber'
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
import FrutigerBar from "../components/FrutigerBar";




export default function ThreeLaboratory() {
   const materials = useLoader(MTLLoader, "/src/components/3DModels/Courage/Courage.mtl");
  const obj = useLoader(OBJLoader, "/src/components/3DModels/Courage/Courage.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });
  return (

     <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <FrutigerBar isVisible={true} />
      <div className="absolute inset-0 z-10 pointer-events-none">
        
      

      {/* Botones centrados horizontalmente */}
      <div className="absolute inset-0 flex items-center justify-between px-10">
        <button className="pointer-events-auto bg-blue-500/80 text-white w-14 h-14 rounded-full text-2xl shadow-lg hover:scale-110 transition">
          ⬅️
        </button>

        <button className="pointer-events-auto bg-blue-500/80 text-white w-14 h-14 rounded-full text-2xl shadow-lg hover:scale-110 transition">
          ▶️
        </button>
      </div>
    </div>
    <Canvas
    
      style={{ width: "100vw", height: "100vh" }}
      camera={{ position: [0, 0, 5], fov: 50 }}
    >
      <color attach="background" args={['#ff6155']} />
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} />

      <mesh>
        <boxGeometry args={[0.1, 0.1, 0.1]} />
        <meshStandardMaterial color="orange" />
        
      </mesh>
      <primitive object={obj} />

      <OrbitControls />
    </Canvas>
    </div>
  );
}