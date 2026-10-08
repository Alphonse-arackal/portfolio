import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${menuOpen ? "menu-open" : ""}`}>
      <div className="navbar-inner">

        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-mark">/</span>
          <span>ALPHONSE ARACKAL</span>
        </a>

        <nav className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="navbar-actions">
          <ThemeToggle />

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
          </button>
        </div>

      </div>

      <div className="mobile-menu">
        <nav>
          <a href="#work" onClick={closeMenu}>
            <span>01</span>
            Work
          </a>

          <a href="#about" onClick={closeMenu}>
            <span>02</span>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            <span>03</span>
            Skills
          </a>

          <a href="#contact" onClick={closeMenu}>
            <span>04</span>
            Contact
          </a>
        </nav>

        <div className="mobile-menu-footer">
          <span>FULL STACK DEVELOPER</span>
          <span>INDIA</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;