import HomeScreen from './routes/HomeScreen'
import DLaboratory from './routes/3DLaboratory'
import Catalog from './routes/Catalog'
import CV from './routes/cvPage'
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
      </Routes>
    </BrowserRouter>

    

  );
}

export default App;