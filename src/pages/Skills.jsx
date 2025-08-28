import React, { useEffect, useRef } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiOpenjdk,
  SiPython,
  SiCplusplus,
  SiJenkins,
  SiDocker,
  SiLinux,
  SiGithub,
  SiPostman,
  SiSonarqube,
} from "react-icons/si";
import { FaServer, FaNetworkWired, FaAws } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";

import "../styles/Skills.css";

const skillCategories = [
  {
    title: "Frontend Development",
    items: [
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss3 /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "React.js", icon: <SiReact /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
    ],
  },
  {
    title: "Backend & Database",
    items: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "SQL/PL-SQL", icon: <SiMysql /> },
    ],
  },
  {
    title: "Programming Languages",
    items: [
      { name: "Java", icon: <SiOpenjdk /> },
      { name: "Python", icon: <SiPython /> },
      { name: "C++", icon: <SiCplusplus /> },
    ],
  },
  {
    title: "DevOps & Cloud Technologies",
    items: [
      { name: "AWS", icon: <FaAws /> },
      { name: "Jenkins", icon: <SiJenkins /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Unix/Linux", icon: <SiLinux /> },
    ],
  },
  {
    title: "Development Tools",
    items: [
      { name: "Git/GitHub", icon: <SiGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "SonarQube", icon: <SiSonarqube /> },
    ],
  },
  {
    title: "Networking & IT Infrastructure",
    items: [
      { name: "Routers", icon: <FaNetworkWired /> },
      { name: "Servers", icon: <FaServer /> },
      { name: "ML/CNN", icon: <GiArtificialIntelligence /> },
    ],
  },
];

const professionalSkills = [
  "Network Architecture & Administration",
  "Strategic Business Development",
  "IT Infrastructure Management",
  "Technical Support & Troubleshooting", 
  "Digital Marketing & Sales Strategy",
  "Cross-Cultural Communication (English, German)",
];

export default function Skills() {
  const scrollTopBtnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTopBtnRef.current) {
        scrollTopBtnRef.current.classList.toggle(
          "active",
          window.scrollY > 0
        );
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="skills-section component__space" id="skills">
      <div className="tagline">
        <h1>Skills & Technologies</h1>
      </div>

      <div className="tech-stack">
        {skillCategories.map((category) => (
          <div className="tech-section" key={category.title}>
            <h2>{category.title}</h2>
            <div className="skills-grid">
              {category.items.map((skill) => (
                <div className="icon-name" key={skill.name}>
                  <div className="icon">{skill.icon}</div>
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="tech-section">
          <h2>Professional Skills</h2>
          <div className="soft-skills">
            {professionalSkills.map((skill) => (
              <div className="skill-item" key={skill}>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="up__to__top__btn">
        <a
          href="#home"
          className="bottom__to__top"
          ref={scrollTopBtnRef}
          aria-label="Scroll to top"
        >
          <i className="fa fa-arrow-up"></i>
        </a>
      </div>
    </div>
  );
}
