import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white shadow-inner mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Social Links */}
          <div>
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

          {/* Strava Activities */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Siste Aktiviteter
            </h3>
            <div className="space-y-2"></div>
          </div>

          {/* Copyright */}
          <div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Alle rettigheter forbeholdt
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
