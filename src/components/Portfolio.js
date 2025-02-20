import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { motion, useTransform, useScroll } from "framer-motion";

function Portfolio() {
  const projects = [
    {
      id: 1,
      name: "Alliance of Angels Capstone",
      description:
        "How I increased their member interaction by 200% for RSVPs and made it easier to form connections before monthly investor meetings.",
      link: "#",
      image: "/portfolio/images/aoa_mockup.png",
    },
    {
      id: 2,
      name: "Mewurk's HR Management System",
      description:
        "My first dive into a professional programming environment, where I contributed to a large-scale project and collaborated with a team on front-end development, gaining valuable industry experience.",
      link: "#",
      image: "/portfolio/images/mewurk_mockup.png",
    },
    {
      id: 3,
      name: "TerrificMinds Web Design",
      description:
        "At TerrificMinds, I designed multiple iterations of websites for various clients, refining my skills in user-centered design. I learned to craft seamless, intuitive user experiences that help users achieve their goals quickly and effectively, while balancing aesthetics and functionality.",
      link: "#",
      image: "/portfolio/images/terrificminds_mockup.png",
    },
  ];
  return (
    <section id="portfolio" className="bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-12">
          {/* Project Generator */}
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col lg:flex-row items-center justify-between min-h-dvh gap-6`}
            >
              {/* Project Image */}
              <div
                className={`flex-[0 0 50%] ${index % 2 === 0 ? "lg:order-last" : ""}`}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-auto max-h-96 rounded-lg shadow-lg object-contain"
                />
              </div>

              {/* Project Info */}
              <div className={`flex-[0 0 50%] space-y-4 text-center lg:text-left`}>
                <h3 className="text-5xl font-semibold mb-4 text-white">
                  {project.name}
                </h3>
                <p className="mt-4 text-xl leading-relaxed max-w-xl break-words text-white">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="mt-4 inline-block px-6 py-3 bg-secondary text-white font-semibold rounded-lg shadow-md hover:bg-offgray transition-colors duration-500"
                >
                  <MdOutlineKeyboardDoubleArrowRight className="inline pr-2 size-7"/>
                  View Details
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
