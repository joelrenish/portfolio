function Portfolio() {
  const projects = [
    {
      id: 1,
      name: "Alliance of Angels Capstone",
      description:
        "How I increased their member interaction by 200% for RSVPs and made it easier to form connections before monthly investor meetings.",
      link: "#",
      image: "/portfolio/images/aoa.png",
    },
    {
      id: 2,
      name: "Mewurk's HR Management System",
      description:
        "My first dive into a professional programming environment, where I contributed to a large-scale project and collaborated with a team on front-end development, gaining valuable industry experience.",
      link: "#",
      image: "/portfolio/images/mewurk.png",
    },
    {
      id: 3,
      name: "TerrificMinds Web Design",
      description:
        "At TerrificMinds, I designed multiple iterations of websites for various clients, refining my skills in user-centered design. I learned to craft seamless, intuitive user experiences that help users achieve their goals quickly and effectively, while balancing aesthetics and functionality.",
      link: "#",
      image: "/portfolio/images/terrificminds.png",
    },
  ];
  return (
    <section id="portfolio" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Portfolio</h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col lg:flex-row items-center justify-between gap-8`}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {/* Project Image */}
              <div
                className={`flex-1" ${index % 2 === 0 ? "lg:order-last" : ""}`}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-auto max-h-72 rounded-lg shadow-lg object-contain"
                />
              </div>

              {/* Project Text */}
              <div
                className={`flex-1 text-center`}
              >
                <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
                <p className="mt-4 text-lg leading-relaxed max-w-xl break-words">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="mt-4 inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-altprimary transition-colors"
                >
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
