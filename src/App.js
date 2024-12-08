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
import { FormspreeProvider } from "@formspree/react";

function App() {
  return (
    <FormspreeProvider project="{portfolio}">
      <Router>
        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </FormspreeProvider>
  );
}

export default App;
