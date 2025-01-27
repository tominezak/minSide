import React from "react";
import TZlogo from "../images/TZlogo.jpg";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white bg-opacity-20 backdrop-blur-md text-white p-4 fixed top-0 left-0 w-full z-10">
      {/* Transparent navbar with a slight blur */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <img
          src={TZlogo}
          alt="TZ Logo"
          className="h-12 w-auto hover:scale-125 transition-transform duration-300 cursor-pointer"
        />

        {/* Navigation Links */}
        <section>
          <ul className="flex gap-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg transition-all duration-300 cursor-pointer ${
                    isActive ? "bg-black" : "hover:bg-black"
                  }`
                }
              >
                Om meg
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg transition-all duration-300 cursor-pointer ${
                    isActive ? "bg-black" : "hover:bg-black"
                  }`
                }
              >
                Prosjekter
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cv"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg transition-all duration-300 cursor-pointer ${
                    isActive ? "bg-black" : "hover:bg-black"
                  }`
                }
              >
                CV
              </NavLink>
            </li>
          </ul>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
