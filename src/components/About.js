import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import the local image
import myImage from "../assets/Manuel.jpg";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row-reverse items-center">
        
        {/* Right Side: Profile Image */}
        <div className="lg:w-1/2 md:w-1/2 w-5/6 ml-auto" data-aos="fade-left">
          <img
            className="object-cover object-center rounded-full shadow-xl ring-4 ring-purple-700"
            alt="Francis Luis"
            src={myImage} // Use the imported image here
          />
        </div>

        {/* Left Side: Text Content */}
        <div
          className="lg:max-w-lg lg:w-1/2 md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start mb-12 md:mb-0"
          data-aos="fade-right"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
            Hi, The name's Francis Luis. Most people call me Louie.
            <br className="hidden lg:inline-block" />
            I love to build amazing apps.
          </h1>
          <p className="text-lg text-white mb-8 leading-relaxed max-w-xl">
            From sleek, modern websites to dynamic, scalable applications, I
            bring your ideas to life with precision and passion. Let's create
            something incredible together — tailored just for your needs and
            vision.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center text-white bg-green-500 py-3 px-8 rounded-lg text-lg font-semibold shadow-md transition-all transform hover:scale-105 hover:bg-green-600"
              data-aos="zoom-in"
            >
              Talk to Me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center text-gray-300 bg-gray-800 py-3 px-8 rounded-lg text-lg font-semibold shadow-md transition-all transform hover:scale-105 hover:bg-gray-700 hover:text-white"
              data-aos="zoom-in"
            >
              See My Past Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
