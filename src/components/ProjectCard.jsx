import React from "react";
import PropTypes from "prop-types";
import "../styles/ProjectCard.css";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img
        src={project.image || "/default-image.jpg"}
        alt={project.title || "Project image"}
        className="project-img"
      />

      <div className="project-content">
        <h2 className="project-title">{project.title || "Untitled Project"}</h2>
        <p className="project-description">
          {project.description || "No description available."}
        </p>

        {project.stack && (
          <p className="project-stack">
            <strong>Tech Stack:</strong> {project.stack}
          </p>
        )}

        {project.features?.length > 0 && (
          <div className="project-features">
            <strong>Features:</strong>
            <div className="badge-container">
              {project.features.map((feature, index) => (
                <span key={index} className="project-note">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.type?.length > 0 && (
          <div className="project-types">
            <strong>Type:</strong>
            <div className="badge-container">
              {project.type.map((item, index) => (
                <span key={index} className="project-note">
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.published && (
          <div className="project-note">
            <span role="img" aria-label="published">📄</span> Published Research
          </div>
        )}

        {project.link && (
          <div className="project-links">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>View Details</button>
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    stack: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string),
    type: PropTypes.arrayOf(PropTypes.string),
    published: PropTypes.bool,
    link: PropTypes.string,
  }).isRequired,
};
