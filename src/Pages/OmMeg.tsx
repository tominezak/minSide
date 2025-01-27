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
      {/* Hero Section */}
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

      {/* About Section */}
      <div id="merOmMeg" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Min Historie
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  Min reise innen teknologi begynte med en nysgjerrighet for
                  hvordan ting fungerer. Jeg har alltid vært fascinert av
                  muligheten til å skape noe fra bunnen av, og programmering ga
                  meg verktøyene til å gjøre nettopp dette.
                </p>
                <p className="mb-4">
                  Gjennom årene har jeg jobbet med en rekke prosjekter som har
                  utfordret meg og hjulpet meg å vokse som utvikler. Jeg trives
                  spesielt godt med å løse komplekse problemer og finne elegante
                  løsninger som forbedrer brukeropplevelsen.
                </p>
                <p>
                  I dag fokuserer jeg på å bygge moderne web-applikasjoner med
                  fokus på brukervennlighet, ytelse og skalerbarhet. Jeg er
                  alltid på utkikk etter nye utfordringer og muligheter til å
                  lære og vokse.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    Frontend
                  </h3>
                  <p className="text-blue-700">React, Vue, Angular</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-900 mb-2">
                    Backend
                  </h3>
                  <p className="text-purple-700">
                    Node.js, Express, PostgreSQL
                  </p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-900 mb-2">
                    Design
                  </h3>
                  <p className="text-green-700">UI/UX, Figma, Adobe XD</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-orange-900 mb-2">
                    DevOps
                  </h3>
                  <p className="text-orange-700">Docker, AWS, CI/CD</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Hva Jeg Tilbyr
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Webutvikling
                </h3>
                <p className="text-gray-600">
                  Moderne og responsive nettsider bygget med de nyeste
                  teknologiene.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  UI/UX Design
                </h3>
                <p className="text-gray-600">
                  Brukervennlig design som skaper engasjerende opplevelser.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Konsultering
                </h3>
                <p className="text-gray-600">
                  Teknisk rådgivning og strategisk planlegging av prosjekter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OmMeg;
