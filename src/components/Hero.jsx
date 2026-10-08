function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="status-dot"></span>
          AVAILABLE FOR WORK
        </div>

        <h1>
          Full Stack
          <br />
          <span>Developer.</span>
        </h1>

        <p className="hero-description">
          I design and build modern web applications with a focus on
          clean architecture, thoughtful interfaces, and reliable
          backend systems.
        </p>

        <div className="hero-actions">
          <a href="#work" className="button button-primary">
            View my work
            <span>↗</span>
          </a>

          <a href="#contact" className="button button-secondary">
            Let's talk
          </a>
        </div>
      </div>

      <div className="hero-meta">
        <span>BASED IN INDIA</span>
        <span>FULL STACK DEVELOPMENT</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </section>
  );
}

export default Hero;