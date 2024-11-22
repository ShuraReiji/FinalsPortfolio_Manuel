import { CodeIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";
import { projects } from "../data";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="projects"
      className="text-gray-400 bg-gradient-to-b from-black to-gray-800 body-font"
    >
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        {/* Section Header */}
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-12 mb-4 text-green-400 animate-bounce" />
          <h1
            className="sm:text-4xl text-3xl font-bold title-font mb-4 text-white"
            data-aos="fade-up"
          >
            Featured Projects
          </h1>
          <p
            className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            A showcase of the applications I've developed, blending creativity
            with technical expertise. Hover over each project to explore more.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-wrap -m-4">
          {projects.map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.image}
              className="sm:w-1/2 w-full p-4 transform hover:scale-105 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="flex relative shadow-lg rounded-lg overflow-hidden border border-gray-700">
                {/* Project Image */}
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                {/* Overlay Content */}
                <div className="px-8 py-10 relative z-10 w-full bg-gradient-to-t from-gray-900 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-bold text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-sm">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Call-to-Action */}
        <div
          className="mt-16"
          data-aos="fade-up"
          data-aos-delay={projects.length * 150}
        >
          <p className="text-gray-300 text-lg mb-4">
            Interested in seeing more of my work?
          </p>
          <a
            href="#contact"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg shadow-lg text-lg transition-all duration-200"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
