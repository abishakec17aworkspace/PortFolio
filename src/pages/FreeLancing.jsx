import React from "react";
import {
  BsFillArrowUpRightCircleFill,
} from "react-icons/bs";

import {
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaRobot,
  FaGlobe,
} from "react-icons/fa";

import VioletRoom from "../assets/Portal.png";
import { FaWebflow } from "react-icons/fa6";

const FreeLancing = () => {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      description:
        "Building responsive, modern websites tailored to your personal brand or business."
    },
    {
      icon: <FaCode />,
      title: "Full-Stack Applications",
      description:
        "Transforming ideas into scalable applications with seamless frontend and backend experiences."
    },
    {
      icon: <FaDatabase />,
      title: "Data Analytics",
      description:
        "Turning complex datasets into meaningful insights through intelligent analysis and visualization."
    },
    {
      icon: <FaRobot />,
      title: "AI-Powered Solutions",
      description:
        "Integrating intelligent AI features to automate workflows and enhance digital experiences."
    },
    {
      icon: <FaGlobe />,
      title: "Professional Portfolio's",
      description:
        "Designing and developing visually compelling, portfolios that showcase personal branding, skills, achievements."
    },
  ];

  return (
    <section
      id="freelancing"
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat px-6 py-16 md:px-12 lg:px-20 text-white"
      style={{ backgroundImage: `url(${VioletRoom})` }}
    >

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-[85vh] flex flex-col justify-around">

        {/* Heading */}
        <div className="mb-5 md:mb-20">
          <p className="text-sm md:text-base uppercase tracking-[0.4em] text-orange-300 mb-5">
            Freelance Services
          </p>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight">
            Make your Ideas Into
            <br />
            Digital Experiences.
          </h1>

          <p className="mt-6 text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed">
            Helping individuals and businesses build impactful digital
            products through thoughtful design, modern technologies,
            and creative engineering.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 md:gap-7">

          {services.map((service, index) => (
            <div
              key={index}
              className="min-h-fit flex items-center p-3 md:p-8 rounded-xl shadow-xl shadow-black/30 backdrop-blur-lg hover:scale-105 duration-200"
            >
              <div>
                <div className="text-orange-300 text-2xl mb-5">
                  {service.icon}
                </div>

                <h3 className="text-lg md:text-xl font-light leading-relaxed text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* Contact Section */}
        <div className="mt-20 md:mt-28 pt-4 scale-y-90 md:pt-14">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">

            {/* Contact Text */}
            <div className="max-w-3xl">
              <p className="uppercase text-sm tracking-[0.4em] text-orange-300/70 mb-6">
                Have Something In Mind?
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-6xl font-light leading-tight">
                Let's Build Something
                <br />
                <span className="text-orange-400">
                  Extraordinary.
                </span>
              </h2>
            </div>

            {/* Contact Button */}
            <a
              href="#contact"
              aria-label="Let's work together"
              className="flex items-center gap-4 text-orange-300 pb-2 hover:text-orange-400 transition-colors"
            >
              <span className="text-sm md:text-base uppercase tracking-[0.2em]">
                Let's Connect
              </span>

              <BsFillArrowUpRightCircleFill
                size={45}
                className="shrink-0"
              />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FreeLancing;
