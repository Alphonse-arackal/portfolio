const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
    ],
  },
  {
    number: "02",
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "REST APIs",
      "Authentication",
      "API Design",
    ],
  },
  {
    number: "03",
    title: "Database",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Database Design",
    ],
  },
  {
    number: "04",
    title: "Tools & Cloud",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Linux",
      "Cloud Deployment",
    ],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">

      <div className="section-heading">
        <div>
          <span className="section-number">03</span>
          <h2>Skills</h2>
        </div>

        <p>
          The technologies and engineering practices
          I use to build complete products.
        </p>
      </div>

      <div className="skills-list">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.number}>

            <div className="skill-group-number">
              {group.number}
            </div>

            <h3>{group.title}</h3>

            <div className="skill-items">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Skills;