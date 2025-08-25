import React from "react";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h1 className="section-title">Contact Me</h1>

      <p className="section-subtitle">
        Based in <strong>Passau, Germany</strong>. Always open to discussing new
        opportunities, collaborations, or simply chatting about technology and innovation.
      </p>

      <div className="contact-details">
        <div className="contact-item">
          <i className="fa fa-phone"></i>
          <a href="tel:+4915164415426">+49 151 64415426</a>
        </div>

        <div className="contact-item">
          <i className="fa fa-envelope-o"></i>
          <a href="mailto:utkarshdalmia28@gmail.com">utkarshdalmia28@gmail.com</a>
        </div>

        <div className="contact-item">
          <i className="fa fa-map-marker"></i>
          <span>Passau, Germany</span>
        </div>
      </div>

      <div className="social-links">
        <a
          href="https://github.com/Udalmia"
          target="_blank"
          rel="noreferrer"
          title="GitHub Profile"
        >
          <i className="fa fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/utkarsh-dalmia-039578192/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn Profile"
        >
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="mailto:utkarshdalmia28@gmail.com" title="Send Email">
          <i className="fa fa-envelope-o"></i>
        </a>
      </div>

      <p className="availability">
        <strong>Currently:</strong> Open to full-time opportunities, internships,
        and freelance projects.
      </p>
    </section>
  );
}
