import React, { useEffect, useRef } from "react";
import "../styles/Home.css";

function Home() {
  const headerRef = useRef(null);

  // Add "active" class to header on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        headerRef.current.classList.toggle("active", window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <section className="home" id="home">
      <div className="home__bg">
        {/* HEADER */}
        <header ref={headerRef} className="header">
          {/* Logo */}
          <div className="logo">
            <i className="fa fa-code" aria-hidden="true"></i>
            <span className="logo-text">UD</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="navigation">
            <ul className="navbar">
              {navLinks.map(({ href, label }) => (
                <li key={label} className="nav__item">
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        {/* HERO SECTION */}
        <main className="home-center">
          <div className="container">
            <div className="home__content">
              <div className="home__meta">
                <h2 className="home__text">Welcome</h2>
                <h1 className="home__text">I'm Utkarsh Dalmia</h1>
                <h3 className="home__text sweet">
                  Full-Stack Developer &amp; Cloud Engineer
                </h3>
                <p className="home__description">
                  Computer Science Master's student at Universität Passau with 3+ years 
                  of professional experience in full-stack development, DevOps practices, 
                  and cloud architecture. Specialized in building scalable applications 
                  and optimizing development workflows to enhance business efficiency.
                </p>

                {/* Buttons */}
                <div className="home__buttons">
                  <a
                    href="Utkarsh-Dalmia-CV.pdf"
                    download="Utkarsh-Dalmia-CV.pdf"
                    className="btn highlighted-btn"
                  >
                    <i className="fa fa-download"></i> Get Resume
                  </a>
                  <a href="#contact" className="btn secondary-btn">
                    <i className="fa fa-envelope"></i> Let's Talk
                  </a>
                </div>

                {/* Social Links */}
                <div className="quick-links">
                  <a
                    href="https://github.com/Udalmia"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/utkarsh-dalmia-039578192/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href="mailto:utkarshdalmia28@gmail.com" title="Email">
                    <i className="fa fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}

export default Home;
