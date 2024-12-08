function Portfolio() {
  const projects = [
    { id: 1, name: "Project A", description: "Brief description here", link: "#" },
    { id: 2, name: "Project B", description: "Brief description here", link: "#" },
    // Add more projects as needed
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <div key={project.id} className="p-4 bg-white shadow rounded">
              <h3 className="font-bold text-xl">{project.name}</h3>
              <p className="mt-2">{project.description}</p>
              <a href={project.link} className="mt-4 inline-block text-blue-500 hover:underline">View Details</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Portfolio;