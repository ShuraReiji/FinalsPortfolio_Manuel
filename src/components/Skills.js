import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";
import { skills } from "../data";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="skills"
      className="text-gray-700 bg-gray-100 body-font"
    >
      <div className="container px-5 py-16 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <ChipIcon className="w-10 inline-block text-blue-500 mb-4" />
          <h1
            className="sm:text-4xl text-3xl font-bold title-font text-gray-800"
            data-aos="fade-up"
          >
            Skills & Technologies
          </h1>
          <p
            className="text-lg leading-relaxed text-gray-600 mx-auto max-w-3xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            From foundational programming to cutting-edge technologies, these
            are the tools I use to bring ideas to life with precision and
            creativity.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="bg-white shadow-md rounded-lg p-6 flex items-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <BadgeCheckIcon className="text-blue-500 w-8 h-8 flex-shrink-0 mr-4" />
              <span className="font-medium text-lg text-gray-800">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
