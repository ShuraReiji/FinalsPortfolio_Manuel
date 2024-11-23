import { CodeIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";
import { projects } from "../data";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section
      id="projects"
      className="text-gray-300 bg-gradient-to-br from-black via-gray-900 to-gray-800 body-font relative"
    >
      {/* Decorative SVG Background */}
      <div className="absolute inset-0">
        <svg
          className="w-full h-full opacity-10"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#gradient)"
            d="M0,128L1440,256L1440,320L0,320Z"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container px-5 py-16 mx-auto text-center lg:px-32 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col w-full mb-16">
          <CodeIcon className="mx-auto inline-block w-12 mb-4 text-green-400 animate-pulse" />
          <h1
            className="sm:text-5xl text-4xl font-bold title-font mb-4 text-white"
            data-aos="fade-down"
          >
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Projects I've developed.
            </span>
          </h1>
          <p
            className="lg:w-3/4 mx-auto leading-relaxed text-base text-gray-300"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Dive into my interstellar portfolio and discover projects that orbit
            creativity and innovation. Let’s explore together!
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.image}
              className="relative group transform hover:scale-105 transition-transform duration-500"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="relative overflow-hidden shadow-2xl rounded-xl border border-gray-700">
                {/* Project Image */}
                <img
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  src={project.image}
                />
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-transparent to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                {/* Overlay Content */}
                <div className="relative z-10 p-6 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-bold text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-sm text-gray-300">
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="mt-20" data-aos="fade-up" data-aos-delay={projects.length * 100}>
          <p className="text-gray-300 text-lg mb-6">
            Ready to embark on an adventure into the future of technology?
          </p>
          <a
            href="#contact"
            className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white py-3 px-8 rounded-full shadow-lg text-lg font-bold hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
