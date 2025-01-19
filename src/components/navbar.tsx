import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex gap-4">
        <li>
          <Link to="/">Om meg</Link>
        </li>
        <li>
          <Link to="/projects">Prosjekter</Link>
        </li>
        <li>
          <Link to="/cv">CV</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
