import React from "react";
import Portrett from "../images/Portrett.jpeg";

function OmMeg() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("merOmMeg");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-full items-center">
            <div className="w-full md:w-1/2 text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Tomine Garborg Zakariassen
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Dataingeniør-student • Sykepleier
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                  React
                </span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                  TypeScript
                </span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                  Node.js
                </span>
              </div>
              <div className="text-center md:text-left">
                <a
                  href="#merOmMeg"
                  onClick={handleSmoothScroll}
                  className="inline-block px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Les mer om meg
                </a>
              </div>
            </div>
            <div className="hidden md:block w-1/2">
              <div className="relative w-96 h-96 mx-auto">
                <div className="absolute inset-0 bg-white rounded-full opacity-10"></div>
                <img
                  src={Portrett}
                  className="absolute inset-0 w-full h-full object-cover rounded-full"
                  alt="Profilbilde"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="merOmMeg" className="min-h-screen bg-white flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Om meg</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                Jeg er en 25 år gammel jente som går andre året på bachelor i
                dataingeniør på OsloMet.
              </p>
              <p className="mb-4">
                Gjennom årene har jeg jobbet med en rekke prosjekter som har
                utfordret meg og hjulpet meg å vokse som utvikler. Jeg trives
                spesielt godt med å løse komplekse problemer og finne elegante
                løsninger som forbedrer brukeropplevelsen.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gray-50 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-12 text-center">
            Mine tekniske ferdigheter
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
              <div className="flex flex-col items-center mb-4">
                <span className="text-4xl mb-2">💻</span>
                <h3 className="text-xl font-semibold text-blue-900">
                  Programmeringsspråk
                </h3>
              </div>
              <ul className="text-blue-800 space-y-2 list-disc list-inside">
                <li>JavaScript/TypeScript</li>
                <li>Python</li>
                <li>Java</li>
                <li>SQL</li>
                <li>HTML/CSS</li>
                <li>Matlab</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg shadow-lg">
              <div className="flex flex-col items-center mb-4">
                <span className="text-4xl mb-2">🎨</span>
                <h3 className="text-xl font-semibold text-purple-900">
                  Rammeverk/bibliotek
                </h3>
              </div>
              <ul className="text-purple-800 space-y-2 list-disc list-inside">
                <li>Spring Boot</li>
                <li>jQuery</li>
                <li>Bootstrap</li>
                <li>React</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-lg">
              <div className="flex flex-col items-center mb-4">
                <span className="text-4xl mb-2">🔧</span>
                <h3 className="text-xl font-semibold text-green-900">
                  Versjonskontroll
                </h3>
              </div>
              <ul className="text-green-800 space-y-2 list-disc list-inside">
                <li>Git</li>
                <li>GitHub</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg shadow-lg">
              <div className="flex flex-col items-center mb-4">
                <span className="text-4xl mb-2">⚡</span>
                <h3 className="text-xl font-semibold text-orange-900">
                  Utviklingsverktøy
                </h3>
              </div>
              <ul className="text-orange-800 space-y-2 list-disc list-inside">
                <li>IntelliJ</li>
                <li>Visual Studio Code</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OmMeg;
