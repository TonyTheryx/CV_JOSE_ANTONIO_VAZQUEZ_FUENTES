import HomeScreen from './routes/HomeScreen'
import DLaboratory from './routes/3DLaboratory'
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <Canvas>
      <ambientLight />
      <DLaboratory />
    </Canvas>
  );
}

export default App;