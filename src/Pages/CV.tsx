import React from "react";

function CV() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">CV</h1>

        {/* Utdanning */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Utdanning
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Universitetsgrad
              </h3>
              <p className="text-gray-600">Universitet • 2018 - 2022</p>
              <p className="text-gray-600">
                Beskrivelse av utdanning og relevante kurs
              </p>
            </div>
          </div>
        </section>

        {/* Arbeidserfaring */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Arbeidserfaring
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Stillingstittel
              </h3>
              <p className="text-gray-600">Bedriftsnavn • 2022 - Nåværende</p>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Ansvar og oppgaver</li>
                <li>Prosjekter og resultater</li>
                <li>Teknologier og verktøy</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Ferdigheter */}
        <section>
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
      </div>
    </div>
  );
}

export default CV;
