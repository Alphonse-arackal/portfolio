const experience = [
  {
    year: "2026",
    role: "Full Stack Developer",
    company: "Your Company / Freelance",
    description:
      "Building full-stack web applications, APIs, and scalable digital products from concept to deployment.",
  },
  {
    year: "2025",
    role: "Web Developer",
    company: "Your Company / Internship",
    description:
      "Developed responsive interfaces and backend services while working with modern JavaScript technologies.",
  },
  {
    year: "2024",
    role: "Started Development",
    company: "Learning & Building",
    description:
      "Started building projects and developing a strong foundation across frontend, backend, databases, and software engineering.",
  },
];

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="section-heading">
        <div>
          <span className="section-number">04</span>
          <h2>Experience</h2>
        </div>

        <p>
          The journey, projects, and experiences that
          shaped how I build software.
        </p>
      </div>

      <div className="experience-list">
        {experience.map((item, index) => (
          <article className="experience-item" key={item.year}>
            <div className="experience-year">
              {item.year}
            </div>

            <div className="experience-content">
              <div>
                <span className="experience-role">
                  {item.role}
                </span>

                <h3>{item.company}</h3>
              </div>

              <p>{item.description}</p>
            </div>

            <span className="experience-index">
              0{index + 1}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;