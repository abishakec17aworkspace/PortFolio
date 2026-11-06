
import React, { useState } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    contact:""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Inquiry - ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:abishakec17a@gmail.com?subject=${subject}&body=${body}`;

    alert("mail updated sucessfully")
  };

  return (
    <footer
      id="contact"
      className="relative w-full min-h-screen bg-[#08090d] text-white overflow-hidden flex flex-col justify-between"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        // style={{
        //   backgroundImage:
        //     "url('https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2000&q=90')",
        // }}
      />

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
      <div className="absolute inset-0 bg-black/5"></div>


      {/* Background Overlay */}
      <div className="absolute inset-0 h-full bg-gradient-to-b from-black/5 via-[#08090d]/70 to-[#08090d]" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 pt-10 md:px-12 md:pt-14">

        {/* Heading */}
        <div className="mb-8 md:mb-10">
          <p className="text-black text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Get In Touch
          </p>

          <h2 className="text-3xl md:text-5xl font-light leading-tight">
            Let's Be in
            <br />
            <span className="text-black">Touch</span>
          </h2>
        </div>

        {/* Contact Form + Details */}
        <div className=" w-full h-fit p-4 gap-4 flex flex-row-reverse justify-center align-middle items-center mb-10">

          {/* LEFT : Contact Form */}
          <div>
            <h3 className="text-2xl text-black font-light  mb-5 tracking-wide">
              Send Me a Message
            </h3>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 w-[50vh] bg-white/5 backdrop-blur-lg rounded-lg p-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/20 py-3 text-sm text-white placeholder-white outline-none focus:border-orange-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/20 py-3 text-sm text-white placeholder-white outline-none focus:border-orange-400"
              />

              <input
                type="number"
                name="contact"
                placeholder="Your Contact Number"
                value={formData.contact}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/20 py-3 text-sm text-white placeholder-white outline-none focus:border-orange-400"
              />

              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows="2"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/20 py-3 text-sm text-white placeholder-white outline-none resize-none focus:border-orange-400"
              />

              <button
                type="submit"
                className="self-start mt-2 px-6 py-2 rounded-full border border-white/30 bg-white/25 text-xs uppercase tracking-widest"
              >
                Send Message ↗
              </button>
            </form>
          </div>

          {/* RIGHT : Contact Details */}
          <div className="flex flex-col justify-between backdrop-blur-lg rounded-xl p-14 gap-6 md:pl-10">

            {/* Email */}
            <div>
              <p className="text-xs uppercase font-bold tracking-[0.3em] text-black mb-2">
                Email
              </p>

              <a
                href="mailto:abishakec17a@gmail.com"
                className="text-base md:text-lg font-light text-gray-200 p-3 rounded-lg bg-black"
              >
                abishakec17a@gmail.com
              </a>
            </div>

            {/* Location */}
            <div>
              <p className="text-xs uppercase text-black font-bold tracking-[0.3em]  mb-2">
                Location
              </p>

              <p className="text-base md:text-lg font-light text-gray-200 bg-black p-3 rounded-lg">
                Salem, Tamilnadu, India
              </p>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-black font-bold mb-3">
                Connect With Me
              </p>

              <div className="flex flex-wrap gap-6 ">
                <a
                  href="https://github.com/AbishakeC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 p-3 rounded-lg bg-black"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://linkedin.com/in/abishake-c17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 p-3 rounded-lg bg-black"
                >
                  LinkedIn ↗
                </a>

                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 p-3 rounded-lg bg-black"
                >
                  Instagram ↗
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-400" />

              <p className="text-xs text-gray-400 tracking-wide">
                Available for Freelance Projects
              </p>
            </div>

          </div>
        </div>
      </div>

      
{/* Giant Fading Portfolio Text */}
<div className="relative w-full overflow-hidden select-none pointer-events-none">
  <h1
    className="w-full text-center font-light uppercase
      text-[12vw] sm:text-[13vw] md:text-[14vw] lg:text-[20vw] 
      tracking-[-0.04em] leading-none"
    style={{
      background:
        "linear-gradient(to bottom, #ffffff 0%, #d1d5db 30%, #6b7280 60%, #27272a 85%, #08090d 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    }}
  >
    PORTFOLIO
  </h1>
</div>

      {/* Copyright */}
      <div className="relative z-10 flex justify-between items-center flex-wrap gap-3 px-6 py-4 border-t border-white/10 text-[10px] text-gray-500 tracking-wide md:px-12">
        <p>© {new Date().getFullYear()} Abishake C.</p>

        <p>Designed & Developed by Abishake</p>
      </div>

    </footer>
  );
};

export default Footer;
