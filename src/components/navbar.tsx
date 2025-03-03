import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isSpecialPage =
    location.pathname === "/projects" || location.pathname === "/cv";
  const isHomePage = location.pathname === "/";

  const getNavLinkClass = () => {
    if (isSpecialPage) {
      return "text-white hover:text-gray-200";
    }
    if (isHomePage) {
      return isScrolled
        ? "text-gray-800 hover:text-gray-600"
        : "text-white/90 hover:text-white";
    }
    return "text-gray-800 hover:text-gray-600";
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-200 ${
        isSpecialPage
          ? "bg-blue-600 shadow-lg"
          : isScrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div
                className={`text-xl font-bold px-3 py-2 rounded-full ${
                  isSpecialPage || isScrolled
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                TZ
              </div>
            </Link>
          </div>

          {/* Navbar */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link to="/" className={getNavLinkClass()}>
              Hjem
            </Link>
            <Link to="/projects" className={getNavLinkClass()}>
              Prosjekter
            </Link>
            <Link to="/cv" className={getNavLinkClass()}>
              CV
            </Link>
          </div>

          {/* Mobil */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={isSpecialPage ? "text-white" : getNavLinkClass()}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Navbar (Mobil) */}
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
