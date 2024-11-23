import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";
import { skills } from "../data";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-200 body-font"
    >
      <div className="container px-5 py-20 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ChipIcon className="w-12 inline-block text-blue-400 mb-4 animate-bounce" />
          <h1
            className="sm:text-4xl text-3xl font-bold title-font text-white"
            data-aos="fade-down"
          >
            Skills & Technologies
          </h1>
          <p
            className="text-lg leading-relaxed text-gray-400 mx-auto max-w-3xl"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            A comprehensive list of tools and technologies I excel in, ranging
            from core programming skills to advanced frameworks and methodologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="bg-gray-800 bg-opacity-80 shadow-lg rounded-lg p-6 flex items-center transition-all transform hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <BadgeCheckIcon className="text-blue-400 w-10 h-10 flex-shrink-0 mr-4 animate-glow" />
              <span className="font-medium text-lg text-gray-200">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
