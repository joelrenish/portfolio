import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Figma"];

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (1 second)
      easing: "ease-in-out", // Animation easing
      once: true, // Trigger animation only once
    });
  }, []);

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <ul className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <li
              key={skill}
              className="px-4 py-2 bg-gray-200 rounded opacity-0" // Add opacity-0 to start hidden
              data-aos="fade-up" // Animation trigger when element enters viewport
              data-aos-delay={index * 200} // Add a slight delay for each item
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
