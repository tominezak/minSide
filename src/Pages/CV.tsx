import React from "react";
import test from "../images/test.jpg";
import { FileText } from "lucide-react";

function CV() {
  // Sample PDF URLs - replace these with your actual PDF URLs
  const attachments = [
    {
      name: "Vitnemål - Bachelor i Sykepleie",
      url: "#", // Replace with actual PDF URL
    },
    {
      name: "Autorisasjonsbevis - Sykepleier",
      url: "#", // Replace with actual PDF URL
    },
    {
      name: "Attester fra tidligere arbeidsgivere",
      url: "#", // Replace with actual PDF URL
    },
  ];
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
        <div className="flex items-center space-x-6 mb-8">
          <img
            src={test}
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
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Butikkmedarbeider
                </h3>
                <p className="text-gray-600">
                  Bergans Flaggskipbutikk Oslo • 02.2024 - Nåværende
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Kundebehandling & salg</li>
                  <li>Rydding & mottak av varer</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Eksamensvakt/prøvevakt
                </h3>
                <p className="text-gray-600">
                  Sandvika vidergående skole • 05.2022 - 06.2023
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Vakt under prøver og eksamener</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Pleiemedarbeider
                </h3>
                <p className="text-gray-600">
                  Atriumgården omsorgsbolig • 06.2020 - 08.2021
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Pasientbehandling og oppfølging</li>
                  <li>Tverrfaglig samarbeid</li>
                  <li>Dokumentasjon og rapportering</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Cafémedarbeider
                </h3>
                <p className="text-gray-600">
                  Bekkestua Bibliotekcafé • 02.2019 - 06.2019
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Salg, baking og kaffebrygging mm.</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Butikkmedarbeider
                </h3>
                <p className="text-gray-600">
                  Coop Extra Lommedalen • 08.2018 - 11.2018
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Kasse, vareplassering & rydding mm.</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Konfirmantleder
                </h3>
                <p className="text-gray-600">Lommedalen Kirke • 02.2015</p>
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
              <p className="text-gray-600">OsloMet • 08.2023 - Nåværende</p>
              <p className="text-gray-600">
                Relevante fag: Webprogrammering, Databaser, Diskret matematikk,
                Programmering, Webutvikling og inkluderende design, Teknologi og
                samfunn for programmerere, Systemutvikling, Algoritmer og
                datastrukturer, Datanettverk og skytjenester(2025V),
                Operativsystemer(2025V)
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Bachelor i Sykepleie
              </h3>
              <p className="text-gray-600">Oslomet • 2020 - 2023</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Fornybar energi og miljøfysikk
              </h3>
              <p className="text-gray-600">
                Norges miljø- og biovitenskapelige universitet (NMBU) • 2019 -
                2020
              </p>
              <p className="text-gray-600">
                Relevante fag: Programmering og databehandling, Prinsipper i
                informasjonsbehandling
              </p>
            </div>
          </div>
        </section>

        {/* Ferdigheter */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Ferdigheter
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Programmeringsspråk
              </h3>
              <ul className="text-gray-600">
                <li>JavaScript/TypeScript</li>
                <li>Python</li>
                <li>Java</li>
                <li>SQL</li>
                <li>HTML/CSS</li>
                <li>Matlab</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Rammeverk/bibliotek
              </h3>
              <ul className="text-gray-600">
                <li>Spring Boot</li>
                <li>jQuery</li>
                <li>Bootstrap</li>
                <li>React</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Versjonskontroll
              </h3>
              <ul className="text-gray-600">
                <li>Git</li>
                <li>GitHub</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Utviklingsverktøy
              </h3>
              <ul className="text-gray-600">
                <li>IntelliJ</li>
                <li>Visual Studio Code</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Vedlegg */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b">
            Vedlegg
          </h2>
          <div className="space-y-3">
            {attachments.map((attachment, index) => (
              <a
                key={index}
                href={attachment.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors group"
              >
                <FileText className="w-5 h-5 group-hover:text-blue-600" />
                <span className="border-b border-dashed border-gray-300 group-hover:border-blue-600">
                  {attachment.name}
                </span>
              </a>
            ))}
          </div>
        </section>
        {/* Referanser */}
        <section>
          <p className="text-gray-600 italic mt-10">
            Referanser oppgis på forespørsel
          </p>
        </section>
      </div>
    </div>
  );
}

export default CV;
