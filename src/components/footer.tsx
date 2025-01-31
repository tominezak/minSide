import React from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Calendar } from "lucide-react";

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
                <span>Din Adresse Her</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone
                  size={16}
                  className="mr-2 text-blue-600"
                  strokeWidth={3}
                />
                <span>Ditt Telefonnummer</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Calendar
                  size={16}
                  className="mr-2 text-blue-600"
                  strokeWidth={3}
                />
                <span>Din Fødselsdato</span>
              </div>
            </div>
          </div>

          {/* Personal Info */}
          <div>
            <p className="text-gray-500 text-sm my-16">
              © {new Date().getFullYear()} Alle rettigheter forbeholdt
            </p>
          </div>

          {/* Copyright */}
          <div className="w-96">
            <div className="float-end">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Kontakt
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <Github size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
