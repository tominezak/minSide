import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-200 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div
                className={`text-xl font-bold px-3 py-2 rounded-full ${
                  isScrolled
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                TZ
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link
              to="/"
              className={`${
                isScrolled
                  ? "text-gray-600 hover:text-gray-900"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Hjem
            </Link>
            <Link
              to="/projects"
              className={`${
                isScrolled
                  ? "text-gray-600 hover:text-gray-900"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Prosjekter
            </Link>
            <Link
              to="/cv"
              className={`${
                isScrolled
                  ? "text-gray-600 hover:text-gray-900"
                  : "text-white/90 hover:text-white"
              }`}
            >
              CV
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${
                isScrolled ? "text-gray-600 hover:text-gray-900" : "text-white"
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white shadow-lg">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Hjem
            </Link>
            <Link
              to="/projects"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Prosjekter
            </Link>
            <Link
              to="/cv"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              CV
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
