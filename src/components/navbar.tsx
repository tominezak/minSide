import React from "react";
import { Link } from "react-router-dom";
import TZlogo from "../images/TZlogo.jpg";

const Navbar: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
      {/* Background gradient for the full page */}
      <nav className="bg-white bg-opacity-20 backdrop-blur-md text-white p-4 fixed top-0 left-0 w-full z-10">
        {/* Transparent navbar with a slight blur */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/">
            <img src={TZlogo} alt="TZ Logo" className="h-12 w-auto" />
          </a>

          {/* Navigation Links */}
          <section>
            <ul className="flex gap-6">
              <li>
                <Link to="/" className="hover:underline">
                  Om meg
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:underline">
                  Prosjekter
                </Link>
              </li>
              <li>
                <Link to="/cv" className="hover:underline">
                  CV
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
