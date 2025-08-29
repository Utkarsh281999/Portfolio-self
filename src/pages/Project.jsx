import React from "react";
import "../styles/Project.css";

// Image imports
import PluralsightImg from "../img/plural.jpg";
import DunzoImg from "../img/Dunzo.jpg";
import InterntheoryImg from "../img/intern.png";
import MandalaImg from "../img/Mandala.png"; 
import CologneImg from "../img/Cologne.png";

export default function Projects() {
  const projectData = [
    {
      title: "Pluralsight Clone",
      img: PluralsightImg,
      description:
        "A comprehensive learning platform clone that focuses on providing on-demand courses and upgrading skills for users.",
      details: [
        { label: "Tech Stack", value: "HTML | CSS | JavaScript | APIs" },
        { label: "Responsibilities", value: "Authentication, Navigation, Inventory, Payment Gateway" },
      ],
      links: [
        { label: "Live Demo", url: "https://plura-sight-project.vercel.app/" },
        { label: "GitHub", url: "https://github.com/Udalmia/PluraSight_Project/tree/master/main" },
      ],
    },
    {
      title: "Dunzo Clone",
      img: DunzoImg,
      description:
        "A delivery service clone with features like real-time tracking, vendor management, and order processing.",
      details: [
        { label: "Tech Stack", value: "React | CSS | Firebase | APIs" },
        { label: "Responsibilities", value: "UI/UX design, State Management, API Integration" },
      ],
      links: [
        { label: "Live Demo", url: "https://dunzo-clone.vercel.app/" },
        { label: "GitHub", url: "https://github.com/Udalmia/Dunzo_Clone" },
      ],
    },
    {
      title: "InternTheory Clone",
      img: InterntheoryImg,
      description:
        "An internship listing platform clone that allows users to browse and apply for internships with enhanced filtering and search.",
      details: [
        { label: "Tech Stack", value: "React | Node.js | Express | MongoDB" },
        { label: "Responsibilities", value: "Frontend development, REST API integration, Authentication" },
      ],
      links: [
        { label: "Live Demo", url: "https://interntheory-clone.vercel.app/" },
        { label: "GitHub", url: "https://github.com/Udalmia/InternTheory_Clone" },
      ],
    },
    {
      title: "Dashboard-zoo-cologne",
      img: CologneImg,
      description:
        "Earlier this year, I completed a fullstack TypeScript challenge simulating the role of an IT Director at the Cologne Zoo. The system had been damaged in a fictional malware attack, and the objective was to restore and enhance a legacy dashboard used by zookeepers.",
      details: [
        { label: "Tech Stack", value: "HTML | Tailwind CSS | JavaScript | APIs | Nuxt | Vue 3" },
        { label: "Responsibilities", value: "Navigation, Inventory, Favourite Food, Calcaluation of food, Planner " },
      ],
      links: [
        { label: "GitHub", url: "https://github.com/Utkarsh281999/dashboard-zoo-cologne-challenge" },
      ],
    },
    {
      title: "The Mandala Experience",
      img: MandalaImg,
      description:
        "A music visualization of Ludovico Einaudi’s 'Experience', rendered through a dynamically evolving mandala that mirrors the emotional journey of the track.",
      details: [
        { label: "Platform", value: "Unity 3D (Timeline + Animator)" },
        { label: "Music Track", value: "'Experience' by Ludovico Einaudi" },
        { label: "Audio Type", value: "Pre-analyzed (non-real-time)" },
        { label: "Reactive Elements", value: "Color, Size, Shape based on emotional intensity" },
        { label: "Behavior", value: "Morphs progressively: Emergence → Complexity → Chaos → Resolution" },
        { label: "Output", value: "Video / Projection-based performance or installation" },
      ],
      links: [
        { label: "GitHub", url: "https://github.com/Udalmia/Mandala_Experience" },
      ],
    },
  ];

  return (
    <section id="projects" className="projects">
      <h1>Projects</h1>
      <div className="project-section center">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.img}
              alt={`${project.title} Preview`}
              loading="lazy"
              className="project-img"
            />
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>

              {project.details.map((detail, i) => (
                <p key={i}>
                  <strong>{detail.label}:</strong> {detail.value}
                </p>
              ))}

              {project.note && <div className="project-note">{project.note}</div>}

              {project.links && (
                <div className="project-links">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`project-btn ${
                        link.label.toLowerCase().includes("github")
                          ? "github-btn"
                          : "demo-btn"
                      }`}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
