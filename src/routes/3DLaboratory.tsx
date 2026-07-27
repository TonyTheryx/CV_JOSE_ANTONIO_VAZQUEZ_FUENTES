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
        
      <div
  className="
  absolute
  top-24
  right-6
  w-80
  rounded-[28px]
  bg-white/15
  backdrop-blur-xl
  border
  border-white/20
  shadow-2xl
  overflow-hidden
  pointer-events-auto
  "
>

  {/* Encabezado */}
  <div className="bg-cyan-400/70 px-6 py-4">
    <h2 className="text-white text-xl font-bold">
      3D Laboratory
    </h2>
  </div>

  {/* Opciones */}
  <div className="grid grid-cols-2 gap-4 p-5">

    <button className="rounded-2xl bg-white/20 hover:bg-cyan-300/40 transition p-5">
      💡
      <p className="mt-2 text-sm">Lighting</p>
    </button>

    <button className="rounded-2xl bg-white/20 hover:bg-cyan-300/40 transition p-5">
      🎨
      <p className="mt-2 text-sm">Materials</p>
    </button>

    <button className="rounded-2xl bg-white/20 hover:bg-cyan-300/40 transition p-5">
      📷
      <p className="mt-2 text-sm">Camera</p>
    </button>

    <button className="rounded-2xl bg-white/20 hover:bg-cyan-300/40 transition p-5">
      ⚙
      <p className="mt-2 text-sm">Scene</p>
    </button>

  </div>

  {/* Información */}
  <div className="border-t border-white/20 p-4">

    <h3 className="font-semibold text-white">
      Current Model
    </h3>

    <p className="text-sm text-white/80 mt-2">
      Courage.obj
    </p>

    <button className="
      mt-4
      w-full
      rounded-xl
      bg-cyan-400
      hover:bg-cyan-300
      text-white
      py-3
      transition
    ">
      Load Model
    </button>

  </div>

</div>

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