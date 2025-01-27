import { Github, Linkedin, Mail, Twitter, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-12 justify-items-center">
          {/* Info om meg */}
          <div className="text-center">
            <h3 className="text-white text-lg font-semibold mb-4">
              Company Name
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 justify-center">
                <MapPin className="h-5 w-5 text-gray-400" />
                <span>123 Business Street, City, 12345</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Phone className="h-5 w-5 text-gray-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Mail className="h-5 w-5 text-gray-400" />
                <span>contact@company.com</span>
              </div>
            </div>
          </div>

          {/* Sodiale medier */}
          <div className="text-center">
            <h3 className="text-white text-lg font-semibold mb-4">
              Connect With Us
            </h3>
            <div className="flex space-x-6 justify-center">
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a
                href="mailto:contact@company.com"
                className="hover:text-white transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
