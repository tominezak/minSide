import React from "react";

function CV() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
        <div className="flex items-center space-x-6 mb-8">
          <img
            src="https://placekitten.com/200/200"
            alt="Profilbilde"
            className="w-32 h-32 rounded-full object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Tomine Garborg Zakariassen
            </h1>
            <p className="text-gray-600">Dataingeniør-student • Sykepleier</p>
          </div>
        </div>

        {/* Arbeidserfaring */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Arbeidserfaring
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <img
                src="https://placehold.co/64x64"
                alt="Sykepleier"
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Sykepleier
                </h3>
                <p className="text-gray-600">
                  Sykehus/Institusjon • 2022 - Nåværende
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Pasientbehandling og oppfølging</li>
                  <li>Tverrfaglig samarbeid</li>
                  <li>Dokumentasjon og rapportering</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <img
                src="https://placehold.co/64x64"
                alt="Programmerer"
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Sommerjobb - Utvikler
                </h3>
                <p className="text-gray-600">Teknologibedrift • Sommer 2023</p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Webutvikling med React</li>
                  <li>Teamarbeid og prosjektutvikling</li>
                  <li>Kodegjennomgang og testing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Utdanning */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Utdanning
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Bachelor i Dataingeniør
              </h3>
              <p className="text-gray-600">OsloMet • 2022 - Nåværende</p>
              <p className="text-gray-600">
                Relevante fag: Programmering, Databaser, Webutvikling
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Bachelor i Sykepleie
              </h3>
              <p className="text-gray-600">Universitet • 2018 - 2022</p>
              <p className="text-gray-600">Fullført med gode resultater</p>
            </div>
          </div>
        </section>

        {/* Ferdigheter */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Ferdigheter
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Programmering
              </h3>
              <ul className="text-gray-600">
                <li>JavaScript/TypeScript</li>
                <li>Python</li>
                <li>Java</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Frontend
              </h3>
              <ul className="text-gray-600">
                <li>React</li>
                <li>HTML/CSS</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Backend
              </h3>
              <ul className="text-gray-600">
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Vedlegg */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Vedlegg</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Vitnemål - Bachelor i Sykepleie</li>
            <li>Autorisasjonsbevis - Sykepleier</li>
            <li>Attester fra tidligere arbeidsgivere</li>
          </ul>
        </section>

        {/* Referanser */}
        <section>
          <p className="text-gray-600 italic">
            Referanser oppgis på forespørsel
          </p>
        </section>
      </div>
    </div>
  );
}

export default CV;
