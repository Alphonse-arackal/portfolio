function About() {
  return (
    <section className="about-section" id="about">

      <div className="section-heading">
        <div>
          <span className="section-number">02</span>
          <h2>About Me</h2>
        </div>

        <p>
          A little about who I am, how I work,
          and what I enjoy building.
        </p>
      </div>

      <div className="about-grid">

        <div className="about-statement">
          <p>
            I'm a <strong>full-stack developer</strong> who enjoys
            turning ideas into reliable, well-crafted digital
            products.
          </p>

          <p>
            I work across the entire stack — from building
            thoughtful interfaces to designing APIs, databases,
            authentication systems, and deployment workflows.
          </p>
        </div>

        <div className="about-details">
          <div className="detail">
            <span>FOCUS</span>
            <p>Full Stack Development</p>
          </div>

          <div className="detail">
            <span>APPROACH</span>
            <p>Clean · Scalable · User-focused</p>
          </div>

          <div className="detail">
            <span>BASED IN</span>
            <p>India</p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default About;