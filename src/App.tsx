import HomeScreen from './routes/HomeScreen'
import DLaboratory from './routes/3DLaboratory'
import Catalog from './routes/Catalog'
import PDF from './routes/PDF';
import MusicPlayer from './routes/MusicPlayer';
import Electronics from './routes/Electronics';
import ChatBot from './routes/ChatBot';
import LayoutFrutiger from './components/LayoutFrutiger';
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutFrutiger><HomeScreen /></LayoutFrutiger>} />
        <Route path="/3DLaboratory" element={<LayoutFrutiger><DLaboratory /></LayoutFrutiger>} />
        <Route path="/catalog" element={<LayoutFrutiger><Catalog /></LayoutFrutiger>} />
        <Route path="/PDF" element={<LayoutFrutiger><PDF /></LayoutFrutiger>} />
        <Route path="/MusicPlayer" element={<LayoutFrutiger><MusicPlayer /></LayoutFrutiger>} />
        <Route path="/ChatBot" element={<LayoutFrutiger><ChatBot /></LayoutFrutiger>} />
        <Route path="/electronics" element={<LayoutFrutiger><Electronics /></LayoutFrutiger>} />
      </Routes>
    </BrowserRouter>

    

  );
}

export default App;