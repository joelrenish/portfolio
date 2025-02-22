import React from "react";
import { Header } from "../components";

const Resume = () => {

  return (
    <div className="bg-secondary text-white">
      <Header />

      <div className="container mx-auto py-8" height="100vh">
        <div className="shadow-lg rounded-lg overflow-hidden mt-16" style={{ height: "100vh" }}>
          <object
            data="/portfolio/resume.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
          >
            <p>
              <a href="/portfolio/resume.pdf"> View my Resume </a>
            </p>
          </object>
        </div>
      </div>
    </div>
  );
};

export default Resume;
