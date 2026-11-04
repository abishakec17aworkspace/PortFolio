
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Analyxer X",
    category: "DATA ANALYTICS · FULL STACK",
    description:
      "An AI-powered versatile data analyzer that transforms raw datasets into meaningful insights through data cleaning, statistical analysis, and interactive visualizations.",
    tech: ["React", "Python", "Pandas", "Machine Learning"],
    github: "https://github.com/AbishakeC",
    demo: "#",
    number: "01",
  },
  {
    id: 2,
    title: "Dellfy",
    category: "MOBILE APPLICATION",
    description:
      "A secure personal gallery application designed to manage private media, organize photos, and share content with trusted friends.",
    tech: ["React Native", "TypeScript", "Expo", "NativeWind"],
    github: "https://github.com/AbishakeC",
    demo: "#",
    number: "02",
  },
  {
    id: 3,
    title: "Portfolio",
    category: "WEB DEVELOPMENT",
    description:
      "A personal portfolio showcasing my technical expertise, creative ideas, projects, and journey as a software developer.",
    tech: ["React", "JavaScript", "Tailwind CSS", "Vite"],
    github: "https://github.com/AbishakeC",
    demo: "#",
    number: "03",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden bg-black px-6 py-20 text-white md:px-12 lg:px-20"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-violet-600/10 blur-[150px]" />

      <div className="relative z-10">

        {/* Section Heading */}
        <div className="mb-16 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-violet-400">
              Selected Works
            </p>

            <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
              PROJECTS<span className="text-violet-500">.</span>
            </h1>
          </div>

          <p className="max-w-xs text-xs uppercase leading-5 text-gray-400">
            Transforming ideas into
            <br />
            meaningful digital experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/50 hover:bg-white/[0.06]"
            >
              {/* Card Number */}
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-medium text-violet-400">
                  / {project.number}
                </span>

                <span className="text-xs tracking-wider text-gray-500">
                  {project.category}
                </span>
              </div>

              {/* Project Content */}
              <div>
                <h2 className="mb-4 text-2xl font-bold transition-colors duration-300 group-hover:text-violet-300 md:text-3xl">
                  {project.title}
                </h2>

                <p className="min-h-[100px] text-sm leading-6 text-gray-400">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="my-8 flex flex-wrap gap-2">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300 transition-colors duration-300 group-hover:border-violet-400/30"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex items-center gap-5 border-t border-white/10 pt-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-violet-400"
                >
                  <FaGithub size={16} />
                  Source Code
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-violet-400"
                >
                  <FaExternalLinkAlt size={13} />
                  Live Demo
                </a>
              </div>

              {/* Hover Glow */}
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-violet-500/0 blur-3xl transition-all duration-500 group-hover:bg-violet-500/20" />
            </div>
          ))}
        </div>

        {/* Bottom Label */}
        <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-6 text-xs tracking-widest text-gray-500">
          <span>EXPLORING · BUILDING · INNOVATING</span>
          <span>© 2026 ABISHAKE C</span>
        </div>

      </div>
    </section>
  );
};

export default Projects;
