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
              Hi, I'm <strong>Utkarsh Dalmia</strong>, a passionate developer
              with 3+ years of experience building innovative software solutions
              that enhance business productivity.
            </p>

            <p>
              Currently pursuing my Master's in Computer Science at{" "}
              <strong>Universität Passau, Germany</strong>, I have a strong
              foundation in web development, cloud computing, and security.
            </p>

            <p>
              Skilled in <strong>full-stack development</strong>, DevOps, and
              cloud technologies including AWS, Jenkins, and database management,
              I aim to deliver efficient and scalable applications.
            </p>

            <p>
              I love exploring new technologies and leveraging them to solve
              real-world problems—whether it's building web applications,
              managing cloud infrastructure, or developing innovative solutions.
            </p>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {/* RIGHT COLUMN: CONTACT FORM */}
        <div className="about-right">
          <ContactForm />
        </div>
      </article>
    </section>
  );
}
