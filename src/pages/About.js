import React from "react";
import { Header } from "../components";

// pages/About.js
function About() {
  return (
    <div className="bg-secondary text-white">
      <Header />
      <section id="about" className="py-20 py-20 pt-44">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p>
            I'm a UX designer and web developer with a passion for creating visually appealing and easy-to-use websites. I graduated from the University of Washington with a degree in Informatics and specialize in modern web technologies.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;