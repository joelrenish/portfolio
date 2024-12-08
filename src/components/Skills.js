function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Figma"];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <ul className="flex flex-wrap gap-4">
          {skills.map(skill => (
            <li key={skill} className="px-4 py-2 bg-gray-200 rounded">{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default Skills;