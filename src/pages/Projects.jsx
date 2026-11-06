import React, { useState, useEffect, useRef } from "react";
import GeminiVid from "../assets/Videos/GeminiVideo.mp4";
import NexShopy from "../assets/Videos/NexShopy.mp4";
import oldport from "../assets/Videos/OldPortfolio.mp4"
import {
  FaGithub,
  FaExternalLinkAlt,
  FaPlay,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import VioletRoom from "../assets/Blue.jpg";

const projects = [
  {
    id: 1,
    title: "Analyxer X",
    category: "DATA ANALYTICS · FULL STACK",
    description:
      "An AI-powered versatile data analyzer that transforms raw datasets into meaningful insights through data cleaning, statistical analysis, and interactive visualizations.",
    tech: ["React", "Python", "Pandas", "Machine Learning"],
    github: "https://github.com/abishakec17aworkspace",
    demo: "#",
    video: "/videos/analyzerx.mp4",
    number: "01",
  },
  {
  id: 2,
  title: "Chat Platform",
  category: "AI-POWERED WEB APPLICATION",
  description:
    "An AI-powered chat platform that enables users to interact with Gemini AI through a secure, personalized interface. Features JWT-based authentication, individual user accounts, persistent chat history, and seamless conversation management.",
  tech: ["React", "JavaScript", "Express.js", "MongoDB", "JWT","TailwindCSS"],
  github: "https://github.com/abishakec17aworkspace",
  demo: "#",
  video: GeminiVid,
  number: "02",
},
{
  id: 4,
  title: "NexShopy",
  category: "FULL STACK E-COMMERCE",
  description:
    "A modern full-stack e-commerce platform designed to deliver a seamless online shopping experience, featuring product management, secure user authentication, shopping cart functionality, order processing, and integrated payment solutions.",
  tech: [
    "React",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "Tailwind CSS",
    "Razorpay"
  ],
  github: "https://github.com/abishakec17aworkspace",
  demo: "#",
  video: NexShopy,
  number: "03",
},

  {
    id: 3,
    title: "Portfolio",
    category: "WEB DEVELOPMENT",
    description:
      "A personal portfolio showcasing my technical expertise, creative ideas, projects, and journey as a software developer.",
    tech: ["React", "JavaScript", "Tailwind CSS", "Vite"],
    github: "https://github.com/abishakec17aworkspace",
    demo: "#",
    video: oldport,
    number: "04",
  },
];

const Projects = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const carouselRef = useRef(null);

  // Carousel Navigation
  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return;

    const firstCard =
      carouselRef.current.querySelector(".project-slide");

    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth;
    const gap = 20;

    carouselRef.current.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  // Close popup using Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setActiveVideo(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Lock background scrolling
  useEffect(() => {
    document.body.style.overflow = activeVideo ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeVideo]);

  return (
    <section
      id="projects"
      style={{ backgroundImage: `url(${VioletRoom})` }}
      className="relative min-h-screen overflow-hidden bg-cover bg-center bg-black px-5 py-14 text-white sm:px-8 lg:px-12 xl:px-16"
    >
      {/* Scrollbar Styling */}
      <style>{`
        html {
          scrollbar-width: thin;
          scrollbar-color: #7c3aed #111111;
        }

        html::-webkit-scrollbar {
          width: 2px;
        }

        html::-webkit-scrollbar-track {
          background: #111111;
        }

        html::-webkit-scrollbar-thumb {
          background: #7c3aed;
          border-radius: 20px;
        }

        .project-carousel {
          scrollbar-width: thin;
          scrollbar-color: #7c3aed transparent;
        }

        .project-carousel::-webkit-scrollbar {
          height: 5px;
        }

        .project-carousel::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.05);
          border-radius: 20px;
        }

        .project-carousel::-webkit-scrollbar-thumb {
          background: #7c3aed;
          border-radius: 20px;
        }

        .video-modal::-webkit-scrollbar {
          width: 2px;
        }

        .video-modal::-webkit-scrollbar-thumb {
          background: #7c3aed;
          border-radius: 20px;
        }
      `}</style>

      {/* Background Effects */}
      <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-violet-600/10 blur-[150px]" />

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/Background3.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/15" />

      <div className="relative z-10 w-full ">

        {/* Section Heading */}
        <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
              Selected Works
            </p>

            <h1 className="text-5xl font-extrabold tracking-tight text-black md:text-7xl">
              PROJECTS<span className="text-violet-500"></span>
            </h1>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <p className="max-w-xs rounded-lg p-3 text-xs uppercase leading-5 text-black backdrop-blur-md">
              Transforming ideas into
              <br />
              meaningful digital experiences.
            </p>

            {/* Carousel Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollCarousel(-1)}
                aria-label="Previous projects"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-violet-500/40 bg-black/70 text-white transition-all duration-300 hover:border-violet-400 hover:bg-violet-600"
              >
                <FaChevronLeft size={12} />
              </button>

              <button
                onClick={() => scrollCarousel(1)}
                aria-label="Next projects"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-violet-500/40 bg-black/70 text-white transition-all duration-300 hover:border-violet-400 hover:bg-violet-600"
              >
                <FaChevronRight size={12} />
              </button>
            </div>
          </div>
        </div>

        {/* Projects Carousel */}
        <div
          ref={carouselRef}
          className="project-carousel flex w-full snap-x cursor-pointer snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-slide  group relative flex w-full shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-white/10 bg-black/70 p-3 shadow-xl shadow-black/30 backdrop-blur-xl transition-all duration-500 hover:scale-105 cursor-pointer hover:border-violet-500/50 hover:bg-black sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-13.333px)]"
            >

              {/* Video Preview */}
              <div
                onClick={() => setActiveVideo(project)}
                className="relative mb-3 aspect-video cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-black"
              >
                <video
                  src={project.video}
                  muted
                  playsInline
                  preload="none"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Video Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors duration-300 group-hover:bg-black/50">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-300/50 bg-violet-600/80 text-white shadow-lg shadow-violet-500/30 transition-all duration-300 group-hover:scale-110">
                    <FaPlay size={12} className="ml-1" />
                  </div>
                </div>

                {/* Preview Label */}
                <span className="absolute bottom-2 left-2 rounded-full border border-white/20 bg-black/70 scale-75 px-2.5 py-1 text-[9px] uppercase tracking-widest text-white backdrop-blur-md">
                  Watch Preview
                </span>

                {/* Project Number */}
                <span className="absolute right-2 top-2 rounded-md bg-black/70 px-2 py-1 text-[10px] text-violet-300 backdrop-blur-md">
                  / {project.number}
                </span>
              </div>

              {/* Project Category */}
              <div className="mb-2">
                <span className="text-[9px] font-semibold tracking-[0.15em] text-violet-400">
                  {project.category}
                </span>
              </div>

              {/* Project Content */}
              <div className="flex-1">
                <h2 className="mb-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-violet-300">
                  {project.title}
                </h2>

                <p className="line-clamp-3 text-xs leading-5 text-gray-400">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="my-4 flex flex-wrap gap-1.5">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-2 cursor-pointer text-[9px] text-gray-300 transition-colors duration-300 group-hover:border-violet-400/30"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex items-center justify-between gap-2 border-t border-white/10 pt-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-[10px] text-gray-300 transition-colors hover:text-violet-400"
                >
                  <FaGithub size={13} />
                  Source Code
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-[10px] text-gray-300 transition-colors hover:text-violet-400"
                >
                  Live Demo
                  <FaExternalLinkAlt size={9} />
                </a>
              </div>

              {/* Hover Glow */}
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-violet-500/0 blur-3xl transition-all duration-500 group-hover:bg-violet-500/20" />
            </div>
          ))}
        </div>

        {/* Bottom Label */}
        <div className="mt-9 flex items-center justify-between border-t border-white/10 pt-5 text-[10px] tracking-widest text-gray-950">
          <span>EXPLORING · BUILDING · INNOVATING</span>
          <span>© 2026 ABISHAKE C</span>
        </div>
      </div>

      {/* ================= VIDEO POPUP ================= */}

      {activeVideo && (
        <div
          onClick={() => setActiveVideo(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="video-modal relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-[#101010] shadow-2xl shadow-violet-950/40"
          >

            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
              className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/80 text-white transition-all hover:bg-violet-600"
            >
              <FaTimes size={13} />
            </button>

            {/* Video Player */}
            <div className="aspect-video w-full bg-black">
              <video
                key={activeVideo.video}
                src={activeVideo.video}
                autoPlay
                controls
                playsInline
                className="h-full w-full object-contain"
              >
                Your browser does not support video playback.
              </video>
            </div>

            {/* Video Information */}
            <div className="p-4 md:p-5">
              <div className="mb-2 flex items-center justify-between gap-3">
                <p className="text-[10px] font-semibold tracking-[0.25em] text-violet-400">
                  {activeVideo.category}
                </p>

                <span className="text-[10px] tracking-widest text-gray-500">
                  / {activeVideo.number}
                </span>
              </div>

              <h2 className="mb-2 text-xl font-bold text-white md:text-2xl">
                {activeVideo.title}
                <span className="text-violet-500">.</span>
              </h2>

              <p className="max-w-2xl text-xs leading-6 text-gray-400 md:text-sm">
                {activeVideo.description}
              </p>

              {/* Technologies */}
              <div className="mt-3 flex flex-wrap gap-2">
                {activeVideo.tech.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-violet-500/20 bg-violet-500/10 px-2.5 py-1 text-[10px] text-violet-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="mt-4 flex items-center gap-5 border-t border-white/10 pt-3">
                <a
                  href={activeVideo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-xs text-gray-300 transition-colors hover:text-violet-400"
                >
                  <FaGithub size={14} />
                  Source Code
                </a>

                <a
                  href={activeVideo.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-xs text-gray-300 transition-colors hover:text-violet-400"
                >
                  <FaExternalLinkAlt size={11} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;