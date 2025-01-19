import React from "react";
import Navbar from "../components/navbar";
import { Footer } from "../components/footer";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 p-6 rounded-lg shadow-md flex-1">
        <h2 className="text-2xl font-semibold mb-4">Om meg</h2>
        <p>Dette er en kort beskrivelse av meg.</p>
      </div>
      <Footer />
    </>
  );
};

export default Home;
