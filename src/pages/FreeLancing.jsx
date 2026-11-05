
import React from "react";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import VioletRoom from "../assets/Portal.png";

const FreeLancing = () => {
  const services = [
    "Build your personal websites",
    "Turn your thoughts into applications",
    "Get valuable insights from your data",
    "Increase your business productivity with a proper showcase",
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
      <div className="relative z-10 max-w-7xl mx-auto min-h-[85vh] flex flex-col justify-around ">

        {/* Heading */}
        <div className="mb-5 md:mb-20">
          <p className="text-sm md:text-base uppercase tracking-[0.4em] text-orange-300 mb-5">
            Freelance Services
          </p>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight">
            Freelancing <br className="hidden sm:block" />
            {/* <span className="text-orange-400">Aspects</span> */}
          </h1>

          <p className="mt-6 text-gray-300 text-base md:text-xl max-w-xl leading-relaxed">
            Transforming your ideas into meaningful digital experiences
            through technology, creativity, and innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-7">

          {services.map((service, index) => (
            <div
              key={index}
              className="min-h-fit flex items-center p-3 md:p-8 rounded-xl shadow-xl shadow-black/30  backdrop-blur-lg  hover:scale-125 duration-200 "
            >
              <div>
                {/* <span className="block text-sm text-orange-300/70 tracking-[0.3em] mb-5">
                  0{index + 1}
                </span> */}

                <h3 className="text-lg md:text-xl font-light leading-relaxed text-white">
                  {service}
                </h3>
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
                Have a project work idea?
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-6xl font-light leading-tight">
                Let's get to work
                <br />
                <span className="text-orange-400">together.</span>
              </h2>
            </div>

            {/* Contact Button */}
            <a
              href="#contact"
              aria-label="Let's work together"
              className="flex items-center gap-4 text-orange-300 pb-2"
            >
              <span className="text-sm md:text-base uppercase tracking-[0.2em]">
                Just Contact
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
