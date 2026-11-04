
import React from "react";
import SkillComponent from "../components/SkillComponent";
import VioletRoom from "../assets/Specs.png";

const Skills = () => {
  const coreConcepts = [
    "API Design",
    "Data Analytics",
    "Full Stack Development",
    "Data Structures & Algorithms",
  ];

  const programmingSkills = [
    "Java",
    "Python",
    "JavaScript",
    "Linux",
  ];

  const toolsAndTechnologies = [
    "React",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "Pandas",
    "mathplotlib",
    "Spring Boot",
    "FastAPI",
    "Django",
    "PostgreSQL",
    "MySQL",
    "Bootstrap",
    "Photoshop",
    "Git/GitHub",
    "Docker",
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen w-full bg-[url('../assets/OrangeRoom.jpg')] h-fit bg-cover overflow-hidden  px-6 py-10 text-white md:px-12"
      style={{ backgroundImage: `url(${VioletRoom})` }}
    >
      
      {/* Background Image */}
      {/* <div className="absolute inset-0 bg-[url('../assets/OrangeRoom.jpg')] h-fit  bg-cover bg-center " /> */}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80" />

      {/* Main Content */}
      <div className="relative z-10 ">

        {/* Heading */}
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            SPECS<span className="text-gray-500">.</span>
          </h1>

          <p className="max-w-xs text-[10px] font-semibold uppercase leading-4 text-gray-400 md:text-xs">
            Technical information across
            <br />
            categories and architecture.
          </p>
        </div>

        {/* Core Concepts */}
        <SkillComponent
          title="CORE PROCESS"
          skills={coreConcepts}
        />

        {/* Programming Languages */}
        <SkillComponent
          title="PROGRAMMING"
          skills={programmingSkills}
        />

        {/* Tools & Technologies */}
        <SkillComponent
          title="TOOLS & TECH"
          skills={toolsAndTechnologies}
        />

      </div>
    </section>
  );
};

export default Skills;
