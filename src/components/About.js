import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import the local image
import myImage from "../assets/Manuel.jpg";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-blue-900 via-black to-purple-900 py-20 overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url(${myImage})`,
        }}
      ></div>

      <div className="relative container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        {/* Left Side: Text Content */}
        <div
          className="lg:max-w-lg lg:w-1/2 md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start mb-12 md:mb-0"
          data-aos="fade-right"
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-6 tracking-wide">
            Hey there! I’m <span className="text-purple-400">Francis Luis</span>.
            <br className="hidden lg:inline-block" />
            Let’s create magic together.
          </h1>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
            Whether it’s sleek websites or game-changing apps, I bring your
            vision to life with passion and precision. Ready to build something
            unforgettable? Let’s make it happen!
          </p>
          <div className="flex justify-center md:justify-start gap-6">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 px-10 rounded-full text-lg font-bold shadow-lg transform transition-transform hover:scale-110"
              data-aos="zoom-in"
            >
              Let’s Talk
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center bg-gray-800 text-gray-300 py-3 px-10 rounded-full text-lg font-bold shadow-lg transform transition-transform hover:scale-110 hover:bg-gray-700 hover:text-white"
              data-aos="zoom-in"
            >
              My Work
            </a>
          </div>
        </div>

        {/* Right Side: Profile Image */}
        <div
          className="lg:w-1/2 md:w-1/2 w-5/6 ml-auto relative"
          data-aos="fade-left"
        >
          <div className="relative w-64 h-64 mx-auto">
            <img
              className="object-cover object-center rounded-full shadow-2xl ring-8 ring-purple-700"
              alt="Francis Luis"
              src={myImage}
            />
            {/* Adjusted Ring */}
            <div className="absolute inset-0 w-full h-full border-4 border-dashed border-purple-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
