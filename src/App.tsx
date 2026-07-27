import HomeScreen from './routes/HomeScreen'
import DLaboratory from './routes/3DLaboratory'
import Catalog from './routes/Catalog'
import CV from './routes/cvPage'
import PDF from './routes/PDF';
import MusicPlayer from './routes/MusicPlayer';
import Electronics from './routes/Electronics';
import ChatBot from './routes/ChatBot';
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/3DLaboratory" element={<DLaboratory />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/PDF" element={<PDF />} />
        <Route path="/MusicPlayer" element={<MusicPlayer />} />
        <Route path="/ChatBot" element={<ChatBot />} />
        <Route path="/electronics" element={<Electronics />} />
      </Routes>
    </BrowserRouter>

    

  );
}

export default App;