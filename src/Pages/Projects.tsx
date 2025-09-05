import { ExternalLink } from "lucide-react";

function Projects() {
  const projects = [
    {
      title: "Handleliste",
      description:
        "En handleliste-app der brukere kan legge til, redigere og slette varer. Bygget med Java, JavaScript, HTML og CSS.",
      image:
        "https://images.unsplash.com/photo-1515706886582-54c73c5eaf41?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://handleliste.tzak.no",
      tags: [
        "Java",
        "JavaScript",
        "HTML",
        "CSS",
        "Bootstrap",
        "Spring Boot",
        "SQL",
      ],
    },
    {
      title: "Kino-booking",
      description:
        "Applikasjon utviklet gjennom en obligatorisk oppgave på studie som lar brukere velge en film, angi billetter og registrere informasjon for kjøp. Bygget med HTML, JavaScript og utvidet med Spring Boot og Java for serverlagring, med Bootstrap for styling.",
      image:
        "https://images.unsplash.com/photo-1604975701397-6365ccbd028a?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://github.com/tominezak/Oblig-repo",
      tags: ["Java", "JavaScript", "HTML", "Bootstrap", "Spring Boot", "SQL"],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Mine Prosjekter</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              className="h-48 w-full object-cover"
              src={project.image}
              alt={project.title}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
                target="_blank"
              >
                Se prosjekt <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
