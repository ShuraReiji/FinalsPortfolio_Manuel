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
      className="text-gray-400 bg-gradient-to-b from-gray-800 to-black body-font" // Reversed gradient: from dark grey to black
    >
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1
            className="sm:text-4xl text-3xl font-medium title-font text-white mb-4"
            data-aos="fade-up" // AOS fade-up animation
          >
            Skills &amp; Technologies
          </h1>
          <p
            className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"
            data-aos="fade-up" // AOS fade-up animation
            data-aos-delay="100"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="p-2 sm:w-1/2 w-full"
              data-aos="fade-up" // AOS fade-up animation for each skill
              data-aos-delay={index * 100} // Stagger the animations
            >
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
