import HomeScreen from './routes/HomeScreen'
import DLaboratory from './routes/3DLaboratory'
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
      </Routes>
    </BrowserRouter>

    

  );
}

export default App;