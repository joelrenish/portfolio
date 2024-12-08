import React from "react";

const Resume = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="border-2 border-gray-300 rounded-md overflow-hidden">
        <iframe
          src="/portfolio/resume.pdf"
          className="w-full h-[700px]"
          title="Resume"
        />
      </div>
    </div>
  );
};

export default Resume;
