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
    <section id="portfolio" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Portfolio</h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col lg:flex-row items-center justify-between gap-8`}
            >
              {/* Project Image */}
              <div
                className={`flex-1" ${index % 2 === 0 ? "lg:order-last" : ""}`}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-auto max-h-72 rounded-lg shadow-lg object-contain"
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                />
              </div>

              {/* Project Text */}
              <div
                className={`flex-1 text-center`}
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
                <p className="mt-4 text-lg leading-relaxed max-w-xl break-words">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="mt-4 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors"
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

  /*
  return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={project.id} className="flex flex-col sm:flex-row bg-white shadow rounded-lg overflow-hidden">
              <div className={`w-full sm:w-1/2 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                <img src={project.image} alt={project.name} className="h-48 w-full object-cover" />
              </div>
              <div className="w-full sm:w-1/2 p-6 flex flex-col justify-center">
                <h3 className="font-semibold text-xl mb-2">{project.name}</h3>
                <p className="text-sm text-gray-700">{project.description}</p>
                <a href={project.link} className="mt-4 text-blue-500 hover:underline text-sm">View Details</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );*/
}

export default Portfolio;
