import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import OmMeg from "./Pages/OmMeg";
import CV from "./Pages/CV";
import Projects from "./Pages/Projects";
import { Footer } from "./components/footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<OmMeg />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/cv" element={<CV />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
