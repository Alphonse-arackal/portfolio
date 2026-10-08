function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <a href="#home" className="footer-brand">
          <span>/</span>
          ALPHONSE ARACKAL
        </a>

        <p>
          Full Stack Developer building
          thoughtful digital experiences.
        </p>

      </div>

      <div className="footer-bottom">

        <span>
          © {new Date().getFullYear()} ALPHONSE ARACKAL
        </span>

        <div className="footer-links">
          <a
            href="https://github.com/Alphonse-arackal"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/alphonse-arackal"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="#home">
            Back to top ↑
          </a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;