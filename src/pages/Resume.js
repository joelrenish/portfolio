import React from "react";

const Resume = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">My Resume</h1>
      <div className="border-2 border-gray-300 rounded-md overflow-hidden">

        <img
          src="/portfolio/resume.png"
          alt="Resume"
          className="w-full h-auto max-w-full mx-auto"
        />
      </div>
    </div>
  );
};

export default Resume;

/*
<iframe
          src="/portfolio/resume.pdf"
          className="w-full h-[700px]"
          title="Resume"
        />
        */