import logo from "./logo.svg";
import "./App.css";
import Appbar from "./Components/Appbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Register from "./Components/Register";
import { Route, Link, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Appbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
