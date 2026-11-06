import React from "react";
import { FaGithub, FaLinkedin, FaPhone, FaWhatsapp } from "react-icons/fa";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";


const Mainpage = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/Background2.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Foreground Header */}
      <div className="relative z-10 flex flex-row items-center justify-between px-8 py-6  ">

        <h1 className="rounded-lg  p-2 text-xl font-light text-white/25 ">
          this is Abishake C
        </h1>

        {/* Social Icons */}
        <div className="flex flex-row items-center gap-5">
          <span className="cursor-pointer group ">
            <a
                  href="https://wa.me/919344977677"
                  target="_blank"
                  rel="noopener noreferrer"
                >
            <FaWhatsapp size={25} className="group-hover:-translate-y-2 group-hover:scale-110 duration-200" />
                </a>
          </span>

          <span className="cursor-pointer group ">
            <a
                  href="https://www.linkedin.com/in/abishake-c17a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
            <FaLinkedin size={25} className="group-hover:-translate-y-2 group-hover:scale-110 duration-200" />
                </a>
          </span>

          <span className="cursor-pointer group">
             <a
                  href="https://github.com/abishakec17aworkspace"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <FaGithub size={25} className="group-hover:-translate-y-2 group-hover:scale-110 duration-200" />
                </a>
          </span>

          

          <div className="relative group">
          <span className="cursor-pointer inline-flex">
            <FaPhone
              size={20}
              className="transition-transform duration-200 group-hover:scale-105"
            />
          </span>

        {/* Phone number tooltip */}
        <div className="absolute  left-1/2 -translate-x-28 mb-3 scale-95
                        whitespace-nowrap rounded-lg bg-black text-white
                        px-4 py-2 text-sm shadow-lg
                        opacity-0 invisible translate-y-2
                        group-hover:opacity-100 group-hover:visible
                        group-hover:translate-y-0
                        transition-all duration-300">
          +91 93449 77677
        </div>

      </div>


      </div>
      
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex h-[calc(100vh-100px)] flex-col items-center justify-center gap-y-4 px-8">

        <h1 className="flex flex-col justify-end align-middle items-center gap-x-3 text-[90px] font-light leading-[1.1] text-white">
          Software Developer
          <span className="text-white/75 text-[45px] pr-12 py-4">
          & freelancer
          </span>
        </h1>
       <a
  href="#contact"
  aria-label="Let's work together"
  className="group inline-flex p-3"
>
  <BsFillArrowUpRightCircleFill
    size={40}
    className="transform transition-all duration-200 ease-out group-hover:scale-125 group-hover:-translate-y-4 group-hover:text-black"
  />
</a>

        {/* Description */}
        {/* <p className="max-w-xl rounded-lg bg-black/25 p-3 font-sans text-xs leading-6 text-white">
          A software developer with data analytics skills, turning thoughts
          into unique designs and attractive ideas through software and
          multiple technology stacks.
        </p> */}
        <div className="flex flex-row  justify-between align-middle items-center absolute bottom-2 w-full scale-90">
          <h3 className=" 
           text-lg font-light text-white p-3 rounded-lg">freelancing Service</h3>

             <h3 className=" 
           text-lg font-light text-white p-3 rounded-lg">unique approach</h3>

             <h3 className=" 
           text-lg font-light text-white p-3 rounded-lg">Eye catchy Designs</h3>
        </div>

      </div>
    </section>
  );
};

export default Mainpage;