import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reg from "./components/Register/Reg.jsx";
import Homepage from "./components/Register/Homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Reg/>} />
        <Route path="/confirm" element={<Homepage/>} />
      </Routes>
    </Router>
  );
}

export default App;
