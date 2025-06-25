import React from "react";
import BreathCircle from "./ui/BreathCircle";
import Hole from "./ui/Hole";
import HeaderTitle from "./ui/HeaderTitle";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ContactInfo from "./components/ContactInfo";
import Particles from "./components/Particles";

import "./index.css";

const App = () => {
  return (
    <>
      {/* Particles Background */}
      <div style={{ width: "100%", height: "100vh", position: "fixed", top: 0, left: 0, zIndex: 0 }}>
        <Particles
          particleColors={["#ffffffc1", "#ffffffc4"]}
          particleCount={100}
          particleSpread={10}
          speed={0.8}
          particleBaseSize={10}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Landing section */}
        <section id="home" className="section__wrapper">
          <HeaderTitle />
          <BreathCircle />
          <Hole />
        </section>

        {/* About section */}
        <About />

        {/* Skills section */}
        <section id="skills" className="section__wrapper">
          <Skills />
        </section>

        {/* Projects section */}
        <section id="projects" className="section__wrapper">
          <Projects />
        </section>

        {/* Testimonials section */}
        <section id="testimonials" className="section__wrapper">
          <Testimonials />
        </section>

        {/* Contact section */}
        <section id="contact" className="section__wrapper">
          <ContactInfo />
        </section>

        {/* Footer */}
        <Footer />
      </main>

      
    </>
  );
};

export default App;
