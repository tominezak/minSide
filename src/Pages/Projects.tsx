import React from "react";
import { Footer } from "../components/footer";
import Navbar from "../components/navbar";

const Projects: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 p-6 rounded-lg shadow-md flex-1">
        <h2 className="text-2xl font-semibold mb-4">Mine prosjekter</h2>
        <p>Her er noen av prosjektene jeg har jobbet med.</p>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
