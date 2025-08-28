import React from "react";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h1 className="section-title">Get In Touch</h1>

      <p className="section-subtitle">
        Based in <strong>Passau, Germany</strong>. Always open to discussing new
        opportunities, collaborations, or simply chatting about technology and innovation.
      </p>
      
      <div className="contact-info">
        <div className="contact-item">
          <div className="contact-icon">
            <i className="fa-solid fa-phone"></i>
          </div>
          <div className="contact-details">
            <h3>Phone</h3>
            <p><a href="tel:+4915164415426">+49 151 64415426</a></p>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">
            <i className="fa-regular fa-envelope"></i>
          </div>
          <div className="contact-details">
            <h3>Email</h3>
            <p><a href="mailto:utkarshdalmia28@gmail.com">utkarshdalmia28@gmail.com</a></p>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div className="contact-details">
            <h3>Location</h3>
            <p><span>Passau, Germany</span></p>
          </div>
        </div>
      </div>

      <div className="availability">
        <strong>Professional Status:</strong> Available for full-time positions, 
        consulting engagements, and collaborative projects.
      </div>

      <div className="social-links">
        <a
          href="https://github.com/Udalmia"
          target="_blank"
          rel="noreferrer"
          title="GitHub Profile"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/utkarsh-dalmia-039578192/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn Profile"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="mailto:utkarshdalmia28@gmail.com"
          title="Send Email"
        >
          <i className="fa-regular fa-envelope"></i>
        </a>
        <a
          href="https://www.instagram.com/slayin_uttu?igsh=MXhzMjR6ZG80eGVvZw=="
          target="_blank"
          rel="noreferrer"
          title="Instagram Profile"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </section>
  );
}
