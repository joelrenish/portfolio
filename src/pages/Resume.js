import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { Header } from "../components";
import "@react-pdf-viewer/core/lib/styles/index.css";

const Resume = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          My Resume
        </h1>
        <div className="shadow-lg rounded-lg overflow-hidden bg-white p-4">
          <Worker
            workerUrl={`https://unpkg.com/pdfjs-dist@3.6.172/build/pdf.worker.min.js`}
          >
            <Viewer fileUrl="/portfolio/resume.pdf" />
          </Worker>
        </div>
      </div>
    </>
  );
};

export default Resume;
