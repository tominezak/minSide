import React from "react";
import { ExternalLink } from "lucide-react";

function Projects() {
  const projects = [
    {
      title: "Prosjekt 1",
      description: "Beskrivelse av prosjekt 1 og teknologiene som ble brukt.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
      link: "#",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Prosjekt 2",
      description: "Beskrivelse av prosjekt 2 og teknologiene som ble brukt.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
      link: "#",
      tags: ["TypeScript", "Express", "PostgreSQL"],
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
