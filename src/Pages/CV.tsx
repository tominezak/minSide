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
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
          {/* Header/Profile */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-10">
            <img
              src={test}
              alt="Profilbilde"
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover shadow-md"
            />
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Tomine Garborg Zakariassen
              </h1>
              <p className="text-lg text-gray-600">
                Dataingeniør-student • Sykepleier
              </p>
            </div>
          </div>

          {/* Arbeidserfaring */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b">
              Arbeidserfaring
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "Butikkmedarbeider",
                  company: "Bergans Flaggskipbutikk Oslo",
                  period: "02.2024 - Nåværende",
                  duties: [
                    "Kundebehandling & salg",
                    "Rydding & mottak av varer",
                  ],
                },
                {
                  title: "Eksamensvakt/prøvevakt",
                  company: "Sandvika vidergående skole",
                  period: "05.2022 - 06.2023",
                  duties: ["Vakt under prøver og eksamener"],
                },
                {
                  title: "Pleiemedarbeider",
                  company: "Atriumgården omsorgsbolig",
                  period: "06.2020 - 08.2021",
                  duties: [
                    "Pasientbehandling og oppfølging",
                    "Tverrfaglig samarbeid",
                    "Dokumentasjon og rapportering",
                  ],
                },
                {
                  title: "Cafémedarbeider",
                  company: "Bekkestua Bibliotekcafé",
                  period: "02.2019 - 06.2019",
                  duties: ["Salg, baking og kaffebrygging mm."],
                },
                {
                  title: "Butikkmedarbeider",
                  company: "Coop Extra Lommedalen",
                  period: "08.2018 - 11.2018",
                  duties: ["Kasse, vareplassering & rydding mm."],
                },
                {
                  title: "Konfirmantleder",
                  company: "Lommedalen Kirke",
                  period: "02.2015",
                  duties: [],
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="group p-4 -mx-4 rounded-lg hover:bg-blue-50/80 transition-all duration-200 cursor-pointer"
                >
                  <h3 className="text-lg font-medium text-gray-900">
                    {job.title}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {job.company} • {job.period}
                  </p>
                  {job.duties.length > 0 && (
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {job.duties.map((duty, idx) => (
                        <li key={idx}>{duty}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Utdanning */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b">
              Utdanning
            </h2>
            <div className="space-y-6">
              <div className="group p-4 -mx-4 rounded-lg hover:bg-blue-50/80 transition-all duration-200 cursor-pointer">
                <h3 className="text-lg font-medium text-gray-900">
                  Bachelor i Dataingeniør
                </h3>
                <p className="text-gray-600 mb-2">
                  OsloMet • 08.2023 - Nåværende
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Relevante fag: Webprogrammering, Databaser, Diskret
                  matematikk, Programmering, Webutvikling og inkluderende
                  design, Teknologi og samfunn for programmerere,
                  Systemutvikling, Algoritmer og datastrukturer, Datanettverk og
                  skytjenester(2025V), Operativsystemer(2025V)
                </p>
              </div>
              <div className="group p-4 -mx-4 rounded-lg hover:bg-blue-50/80 transition-all duration-200 cursor-pointer">
                <h3 className="text-lg font-medium text-gray-900">
                  Bachelor i Sykepleie
                </h3>
                <p className="text-gray-600">Oslomet • 2020 - 2023</p>
              </div>
              <div className="group p-4 -mx-4 rounded-lg hover:bg-blue-50/80 transition-all duration-200 cursor-pointer">
                <h3 className="text-lg font-medium text-gray-900">
                  Fornybar energi og miljøfysikk
                </h3>
                <p className="text-gray-600 mb-2">
                  Norges miljø- og biovitenskapelige universitet (NMBU) • 2019 -
                  2020
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Relevante fag: Programmering og databehandling, Prinsipper i
                  informasjonsbehandling
                </p>
              </div>
            </div>
          </section>

          {/* Ferdigheter */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b">
              Ferdigheter
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {[
                {
                  title: "Programmeringsspråk",
                  skills: [
                    "JavaScript/TypeScript",
                    "Python",
                    "Java",
                    "SQL",
                    "HTML/CSS",
                    "Matlab",
                  ],
                },
                {
                  title: "Rammeverk/bibliotek",
                  skills: [
                    "Spring Boot",
                    "jQuery",
                    "Bootstrap",
                    "React",
                    "Tailwind CSS",
                  ],
                },
                {
                  title: "Versjonskontroll",
                  skills: ["Git", "GitHub"],
                },
                {
                  title: "Utviklingsverktøy",
                  skills: ["IntelliJ", "Visual Studio Code"],
                },
              ].map((category, index) => (
                <div
                  key={index}
                  className="group p-4 -mx-4 rounded-lg hover:bg-blue-50/80 transition-all duration-200 cursor-pointer"
                >
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, idx) => (
                      <li key={idx} className="text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Vedlegg */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b">
              Vedlegg
            </h2>
            <div className="space-y-4">
              {attachments.map((attachment, index) => (
                <a
                  key={index}
                  href={attachment.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors group p-2 rounded-lg hover:bg-blue-50/80"
                >
                  <FileText className="w-5 h-5 group-hover:text-blue-600 shrink-0" />
                  <span className="border-b border-dashed border-gray-300 group-hover:border-blue-600">
                    {attachment.name}
                  </span>
                </a>
              ))}
            </div>
          </section>

          {/* Referanser */}
          <section>
            <p className="text-gray-600 italic text-center sm:text-left mt-8">
              Referanser oppgis på forespørsel
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CV;
