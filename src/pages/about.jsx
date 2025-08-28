import React from "react";
import ProfileImg from "../img/photo.jpg";
import "../styles/about.css";
import ContactForm from "./ContactForm";

export default function About() {
  return (
    <section className="about-bg" id="about">
      <h1>About Me</h1>

      <article className="about-section">
        {/* LEFT COLUMN: PROFILE + BIO */}
        <div className="about-left">
          <div className="profile-img">
            <img
              src={ProfileImg}
              alt="Utkarsh Dalmia, Full Stack Developer and Cloud Engineer"
            />
          </div>

          <div className="para">
            <p>
              I am <strong>Utkarsh Dalmia</strong>, a dedicated software engineer
              with over 3 years of professional experience developing enterprise-grade
              solutions that drive measurable business outcomes.
            </p>

            <p>
              Currently pursuing a Master's degree in Computer Science at{" "}
              <strong> Universität Passau, Germany</strong>, I maintain expertise
              in modern web technologies, cloud infrastructure, and cybersecurity.
            </p>

            <p>
              My technical proficiency spans <strong>full-stack development</strong>,
              DevOps automation, and cloud platforms including AWS. I specialize in
              architecting scalable systems and implementing CI/CD pipelines that
              optimize development velocity and product reliability.
            </p>

            <p>
              I am committed to staying at the forefront of technological innovation,
              consistently applying emerging technologies to solve complex business
              challenges across web applications, cloud infrastructure, and system
              architecture domains.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: CONTACT FORM */}
        <div className="about-right">
          <ContactForm />
        </div>
      </article>
    </section>
  );
}