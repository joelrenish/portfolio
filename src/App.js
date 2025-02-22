import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Home from "./pages/Home";
import AoA from "./pages/AoA";
import Mewurk from "./pages/Mewurk";
import TerrificMinds from "./pages/TerrificMinds";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/aoa" element={<AoA />} />
        <Route path="/mewurk" element={<Mewurk />} />
        <Route path="/terrificminds" element={<TerrificMinds />} />
      </Routes>
    </Router>
  );
}

export default App;
