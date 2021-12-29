import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Mahan from "./Pages/Mahan/Mahan";
import Sirvan from "./Pages/Sirvan/Sirvan";
import Saeed from "./Pages/Saeed/Saeed";
import Ehsan from "./Pages/Ehsan/Ehsan";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="mahan" element={<Mahan />} />
        <Route path="sirvan" element={<Sirvan />} />
        <Route path="saeed" element={<Saeed />} />
        <Route path="ehsan" element={<Ehsan />} />
      </Routes>
    </div>
  );
}

export default App;
