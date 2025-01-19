import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Bruk Routes i stedet for Switch
import Home from "./Pages/OmMeg"; // Om meg
import Projects from "./Pages/Projects"; // Prosjekter
import Cv from "./Pages/CV"; // CV

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/cv" element={<Cv />} />
      </Routes>
    </Router>
  );
};

export default App;
