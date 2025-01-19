import React from "react";
import Navbar from "../components/navbar";
import { Footer } from "../components/footer";

const CV: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 p-6 rounded-lg shadow-md flex-1">
        <h2 className="text-2xl font-semibold mb-4">Min CV</h2>
        <p>Her kan du finne min CV og erfaring.</p>
      </div>
      <Footer />
    </>
  );
};

export default CV;
