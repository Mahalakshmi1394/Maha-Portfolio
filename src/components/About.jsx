import React from "react";
import { skills } from "../data";

const About = () => {
  return (
    <section id="about" className="section__wrapper">
      
      <div className="about__card">
        {/* Left Floating Icons */}
        <div className="skills__container">
          {skills[1].data.map((skill, index) => (
            <div key={index} className="skill__item">
              <img src={skill.logo} alt={skill.skill} />
            </div>
          ))}
        </div>

        {/* Right Text */}
        <div className="about__text animate-fade-in-up">
  <h2>About Me</h2>
  <h1>
    <span className="white">I am </span>
    <span className="blue">Mahalakshmi</span>
  </h1>
  <p>
    I am Mahalakshmi U, a 3rd-year Electronics and Communication Engineering student with a Minor in Data Science at Saveetha Engineering College.
I have a strong interest in programming, with skills in Python, Java, and C, and a solid understanding of data structures and algorithms.
I am experienced in full stack development, building both front-end and back-end applications.
A fast learner and effective communicator, I am passionate about solving problems and continuously improving my skills.
I enjoy working on challenging projects and aim to contribute to innovative and impactful solutions.
  </p>
</div>

      </div>
    </section>
  );
};

export default About;
