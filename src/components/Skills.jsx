import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaJava,
  FaGitAlt, FaFigma, FaAws, FaDocker, FaDatabase, FaServer, FaCodeBranch
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiNextdotjs, SiTypescript, SiMysql, SiGooglecloud, SiWebpack, SiGithub, SiSpring, SiKubernetes } from 'react-icons/si';

const skillsData = {
  fullStack: [
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJsSquare /> },
    { name: 'React.js', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express.js', icon: <SiExpress /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'REST APIs', icon: <FaServer /> },
  ],
  programming: [
    { name: 'Java', icon: <FaJava /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'Data Structures', icon: <FaDatabase /> },
    { name: 'Algorithms', icon: <FaCodeBranch /> },
  ],
  tools: [
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'GitHub', icon: <SiGithub /> },
    { name: 'Figma', icon: <FaFigma /> },
    { name: 'VS Code', icon: <FaJsSquare /> }
  ],
};

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-layout-container">
        {/* Left Side: Programming & Tools */}
        <div className="skills-left-area">
          {/* Programming Category */}
          <div className="skills-category-group programming-group">
            <h3 className="category-heading">Programming</h3>
            <div className="skills-grid-container">
              {skillsData.programming.map((skill, index) => (
                <div className="skill-card" key={`prog-${index}`}>
                  <div className="skill-icon">{skill.icon}</div>
                  <p className="skill-name">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools Category */}
          <div className="skills-category-group tools-group">
            <h3 className="category-heading">Tools & Technologies</h3>
            <div className="skills-grid-container">
              {skillsData.tools.map((skill, index) => (
                <div className="skill-card" key={`tool-${index}`}>
                  <div className="skill-icon">{skill.icon}</div>
                  <p className="skill-name">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Full Stack */}
        <div className="skills-right-area">
          <div className="skills-category-group fullstack-group">
            <h3 className="category-heading">Full Stack Development</h3>
            <div className="skills-grid-container">
              {skillsData.fullStack.map((skill, index) => (
                <div className="skill-card" key={`fs-${index}`}>
                  <div className="skill-icon">{skill.icon}</div>
                  <p className="skill-name">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;