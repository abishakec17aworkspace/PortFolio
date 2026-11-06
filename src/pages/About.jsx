import React from "react";
import Profilepic from '../assets/Profilepic.jpeg'
const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full overflow-hidden bg-black px-6 py-20 text-white md:px-16 lg:px-24"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/Background4.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Section Heading */}
      <div className="relative z-10 mb-16">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-600">
          Get to know
        </p>

        <h1 className="text-5xl font-light md:text-7xl">
          About <span className="font-bold text-purple-400"></span>
        </h1>
      </div>

      {/* About Content */}
      <div className="relative z-10 grid grid-cols-1 items-center gap-12 md:grid-cols-2">

        {/* Profile Image */}
        <div className="flex justify-center ">
          <div className="relative h-[350px]  w-[280px] md:h-[450px] md:w-[350px]">
            {/* <div className="absolute -right-4 -top-4 h-full w-full rounded-2xl border border-purple-400/40" /> */}

            <img
              src={Profilepic}
              alt="Abishake C - Software Developer"
              className="relative h-[350px] w-full rounded-2xl object-cover mt-14  transition duration-500 hover:grayscale-0"
            />
          </div>
        </div>

        {/* Personal Introduction */}
        <div className="space-y-6 backdrop-blur-lg p-4 rounded-2xl ">
          <h2 className="text-2xl font-medium md:text-3xl">
            Abishake C
          </h2>

          <p className="text-lg font-light leading-7 text-white md:text-base">
          An Information Technology graduate and aspiring Software Developer
          passionate about building scalable applications and intuitive digital
          experiences. Skilled in modern frontend and backend technologies, with
          a strong interest in problem-solving, data-driven solutions, and
          continuous learning. I strive to transform innovative ideas into
          impactful, user-focused applications through clean code and thoughtful design.
        </p>

          {/* Education */}
          <div className="pt-4">
            <h3 className="mb-6 text-2xl font-semibold">
              <span className="text-red-600">Education</span>
            </h3>

            <div className="space-y-6 border-l border-white pl-6">

              {/* College */}
              <div className="relative">
                <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-white" />

                <p className="text-xs tracking-wider text-white">
                  2022 – 2026
                </p>

                <h4 className="mt-2 text-base font-medium">
                  Bachelor of Technology
                </h4>

                <p className="mt-1 text-sm text-gray-400">
                  Information Technology
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  CGPA: 7.6
                </p>
              </div>

            </div>
          </div>
        </div>
        </div>
    </section>
  );
};

export default About;