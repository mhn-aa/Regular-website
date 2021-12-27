import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Mahan from "./Pages/Mahan/Mahan";
import Sirvan from "./Pages/Sirvan/Sirvan";
import Saeed from "./Pages/Saeed/Saeed";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="mahan" element={<Mahan />} />
        <Route path="sirvan" element={<Sirvan />} />
        <Route path="saeed" element={<Saeed />} />
      </Routes>
    </div>
  );
}

export default App;
