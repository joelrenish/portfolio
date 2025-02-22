import { FiArrowRight } from "react-icons/fi";
import { motion, useTransform, useScroll } from "framer-motion";
import { Link } from "react-router-dom";

function Portfolio() {
  const projects = [
    {
      id: 1,
      name: "Alliance of Angels Capstone",
      description:
        "How I increased their member interaction by 200% for RSVPs and made networking between startups and investors much simpler.",
      link: "/aoa",
      image: "/portfolio/images/aoa_mockup.png",
    },
    {
      id: 2,
      name: "Mewurk HRMS",
      description:
        "My first dive into a professional programming environment to make an HR Management System, where I contributed to a large-scale project and collaborated with a team on front-end development, gaining valuable industry experience.",
      link: "/mewurk",
      image: "/portfolio/images/mewurk_mockup.png",
    },
    {
      id: 3,
      name: "TerrificMinds Web Design",
      description:
        "At TerrificMinds, I designed multiple iterations of websites for various clients, refining my skills in user-centered design. I learned to craft seamless, intuitive user experiences that help users achieve their goals quickly with a balance of aesthetics and functionality.",
      link: "/terrificminds",
      image: "/portfolio/images/terrificminds_mockup.png",
    }
  ];
  return (
    <section id="portfolio" className="bg-secondary items-center">

      <h1 className="text-3xl font-semibold my-4 text-white text-center">Case Studies</h1>
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-12">
          {/* Project Generator */}
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col lg:flex-row items-center lg:justify-between min-h-[80dvh] gap-6`}
            >
              {/* Project Image */}
              <div
                className={`flex-[0 0 50%] ${index % 2 === 1 ? "lg:order-last" : ""}`}
              >
                <Link
                  to={project.link}
                >
                  <a href={project.link}>
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-auto max-h-96 rounded-lg shadow-lg object-contain hover:scale-105 transition-all"
                    />
                  </a>
                </Link>
              </div>

              {/* Project Info */}
              <div className={`flex-[0 0 50%] space-y-4 text-center flex flex-col items-center justify-center`}>
                <h3 className="text-5xl font-semibold mb-4 text-white">
                  {project.name}
                </h3>
                <p className="mt-4 text-xl leading-relaxed max-w-xl break-words text-white">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="group mt-4 inline-flex items-center px-6 py-3 bg-secondary text-primary font-semibold rounded-lg shadow-md hover:bg-offgray transition-colors duration-500"
                >
                  Details
                  <FiArrowRight className="inline ml-2 p-1 size-6 scale-50 -rotate-45 bg-primary group-hover:scale-100 group-hover:text-white rounded-full transition-all duration-500"/>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;