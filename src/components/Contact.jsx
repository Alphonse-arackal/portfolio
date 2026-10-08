
function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-content">

        <span className="section-number">05</span>

        <p className="contact-label">
          LET'S CONNECT
        </p>

        <h2>
          Let's build
          <br />
          <span>something good.</span>
        </h2>

        <p className="contact-description">
          Have a project, an idea, or an opportunity you'd like
          to discuss? I'm always open to interesting conversations,
          collaborations, and challenging engineering problems.
        </p>

        {/* Primary Email */}
        <a
          href="mailto:your.email@example.com"
          className="contact-email"
        >
          alphonsarackal950@gmail.com
          <span>↗</span>
        </a>

        {/* Contact Details */}
        <div className="contact-details">

          {/* Phone */}
          <a
            href="tel:+919876543210"
            className="contact-item"
          >
            <div className="contact-item-icon">
              ☎
            </div>

            <div className="contact-item-content">
              <span>PHONE</span>
              <strong>+91 8589079832</strong>
            </div>

            <span className="contact-item-arrow">↗</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/918589079832"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <div className="contact-item-icon">
              ◉
            </div>

            <div className="contact-item-content">
              <span>WHATSAPP</span>
              <strong>Message me on WhatsApp</strong>
            </div>

            <span className="contact-item-arrow">↗</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Alphonse-arackal"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <div className="contact-item-icon">
              GH
            </div>

            <div className="contact-item-content">
              <span>GITHUB</span>
              <strong>github.com/Alphonse-arackal</strong>
            </div>

            <span className="contact-item-arrow">↗</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/alphonse-arackal"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <div className="contact-item-icon">
              in
            </div>

            <div className="contact-item-content">
              <span>LINKEDIN</span>
              <strong>linkedin.com/in/alphonse-arackal</strong>
            </div>

            <span className="contact-item-arrow">↗</span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;
