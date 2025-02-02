import React from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Calendar } from "lucide-react";
import { FaStrava } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-white shadow-inner mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between w-full">
          {/* Social Links */}
          <div className="w-96">
            <div className="space-y-2 mt-4">
              <div className="flex items-center text-gray-600">
                <MapPin
                  size={16}
                  className="mr-2 text-blue-600"
                  strokeWidth={3}
                />
                <span>Svoldergata 2B</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone
                  size={16}
                  className="mr-2 text-blue-600"
                  strokeWidth={3}
                />
                <span>98858944</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Calendar
                  size={16}
                  className="mr-2 text-blue-600"
                  strokeWidth={3}
                />
                <span>17.10.1999</span>
              </div>
            </div>
          </div>

          {/* Personal Info */}
          <div>
            <p className="text-gray-500 my-16">
              © {new Date().getFullYear()} Alle rettigheter forbeholdt
            </p>
          </div>

          {/* Contact */}
          <div className="w-96">
            <div className="float-end">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Kontakt
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/tominezak"
                  target="_blank"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/tomine-zakariassen-390022327/"
                  target="_blank"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:tominezak@gmail.com"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="https://www.strava.com/athletes/61033275"
                  target="_blank"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <FaStrava size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
