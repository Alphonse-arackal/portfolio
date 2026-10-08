import projects from "../data/projects";

function ProjectVisual({ project, featured = false }) {
  return (
    <div className={`project-visual ${featured ? "project-visual-featured" : ""}`}>
      <img
        src={project.image}
        alt={`${project.title} preview`}
        loading={featured ? "eager" : "lazy"}
        onError={(event) => {
          event.currentTarget.style.display = "none";
          event.currentTarget.parentElement.classList.add("image-fallback");
        }}
      />

      <div className="project-visual-fallback" aria-hidden="true">
        <span>{String(project.id).padStart(2, "0")}</span>
        <strong>{project.title}</strong>
        <small>{project.category}</small>
      </div>

      <div className="project-visual-overlay">
        <span>VIEW PROJECT</span>
        <span>↗</span>
      </div>
    </div>
  );
}

function ProjectTech({ items }) {
  return (
    <div className="project-tech">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

function ProjectLinks({ project, featured = false }) {
  return (
    <div className={featured ? "project-actions" : "project-card-links"}>
      <a href={project.github} target="_blank" rel="noreferrer">
        GitHub <span>↗</span>
      </a>

      <a href={project.live} target="_blank" rel="noreferrer">
        Live Project <span>↗</span>
      </a>
    </div>
  );
}

function Projects() {
  const featuredProject = projects.find((project) => project.featured) || projects[0];
  const otherProjects = projects.filter((project) => project.id !== featuredProject.id);

  return (
    <section className="projects-section" id="work">
      <div className="section-heading projects-heading">
        <div>
          <span className="section-number">01</span>

          <h2>
            Selected
            <br />
            <span>Work.</span>
          </h2>
        </div>

        <div className="projects-heading-right">
          <p>
            A selection of full-stack applications, interfaces,
            and digital products built with modern technologies.
          </p>

          <span className="projects-count">
            {String(projects.length).padStart(2, "0")} PROJECTS
          </span>
        </div>
      </div>

      <article className="featured-project">
        <a
          href={featuredProject.live}
          target="_blank"
          rel="noreferrer"
          className="featured-project-image"
          aria-label={`Open ${featuredProject.title}`}
        >
          <ProjectVisual project={featuredProject} featured />
        </a>

        <div className="featured-project-info">
          <div className="featured-project-top">
            <div className="featured-project-meta">
              <span className="project-number">
                {String(featuredProject.id).padStart(2, "0")}
              </span>
              <span>{featuredProject.year}</span>
              <span>{featuredProject.category}</span>
            </div>

            <span className="featured-label">FEATURED PROJECT</span>
          </div>

          <div className="featured-project-main">
            <div className="featured-project-title">
              <h3>{featuredProject.title}</h3>
              <p>{featuredProject.description}</p>
            </div>

            <div className="featured-project-side">
              <ProjectTech items={featuredProject.tech} />
              <ProjectLinks project={featuredProject} featured />
            </div>
          </div>
        </div>
      </article>

      {otherProjects.length > 0 && (
        <div className="other-projects">
          <div className="other-projects-heading">
            <span>MORE PROJECTS</span>
            <span>02 — {String(projects.length).padStart(2, "0")}</span>
          </div>

          <div className="other-projects-grid">
            {otherProjects.map((project) => (
              <article className="project-card" key={project.id}>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="project-card-image"
                  aria-label={`Open ${project.title}`}
                >
                  <ProjectVisual project={project} />
                </a>

                <div className="project-card-content">
                  <div className="project-card-meta">
                    <span>{String(project.id).padStart(2, "0")}</span>
                    <span>{project.year}</span>
                    <span>{project.category}</span>
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-card-bottom">
                    <ProjectTech items={project.tech} />
                    <ProjectLinks project={project} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
