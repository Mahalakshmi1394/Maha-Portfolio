import { FaPaintBrush } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { FaCodeCompare } from "react-icons/fa6";
import { GiIdea } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  profile3,
  profile4,
  profile5,
  profile6,
  figma,
  sketch,
  xd,
  css,
  html,
  javascript,
  tailwind,
  bootstrap,
  react,
  reactnative,
  emailicon,
  messengericon,
  whatsappicon,
} from "./assets";



export const menu = [
  { name: "About" },
  { name: "Services" },
  { name: "Skill" },
  { name: "Projects" },
  { name: "Testimonial" },
  { name: "Contact" },
];

export const services = [
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush />,
    description: `Crafting visually stunning and user-centric designs that ensure seamless user experiences. 
                  From wireframes to high-fidelity prototypes, I focus on creating intuitive interfaces that 
                  blend creativity and functionality, enhancing engagement and usability.`,
  },
  {
    title: "Web Development",
    icon: <FaCodeCompare />,
    color: "blueviolet",
    colorRGB: "138, 43, 226",
    description: `Building responsive, dynamic, and high-performance websites tailored to your needs. 
    Using modern technologies like React, Node.js, and more, I ensure your site is optimized 
    for speed, scalability, and accessibility, delivering a robust online presence.`,
  },
  {
    title: "Content Creation",
    icon: <GiIdea />,
    color: "var(--color-success)",
    colorRGB: "var(--color-success-rgb)",
    description: `Producing compelling digital content that resonates with your audience. From blogs 
                  and technical documentation to engaging website copy, I ensure your brand's message 
                  is clear, impactful, and aligned with your business goals.`,
  },
];

export const projects = [
  {
    title: "RescueRoute",
    image: project1,
    category: "Web",
    description: `Crowdsourced emergency management lets users report incidents on a live map with location, photos, and details. A request-response system connects victims with nearby help instantly. Users can donate essentials via a donation cart to ongoing relief efforts. 
    The Partner Hub links NGOs, hospitals, and authorities for real-time collaboration.`,
    demoLink: "https://github.com/Mahalakshmi1394/Rescue-Route",
    stacks: [
      {
        name: "XD",
        logo: xd,
      },
    ],
  },
  {
    title: "Civic Alert System",
    image: project2,
    category: "Web",
    description: `A blockchain-based civic alert system allows citizens to securely report issues like potholes or leaks. Each alert is verified through GIV (Government-Issued Verification) for trusted user access. Users can track issue resolution in real time, ensuring transparency. Officials respond through a secure dashboard, promoting accountability and trust.
`,
    demoLink: "https://github.com/Mahalakshmi1394/Civic-Alert-System",
    
  },
  {
    title: "Weather Predictor",
    image: project3,
    category: "Web",
    description: `My Weather Predictor provides real-time forecasts using location-based data and predictive algorithms. It displays temperature, humidity, wind speed, and future conditions in an intuitive interface. Users can plan ahead with accurate multi-day forecasts. The tool is reliable, responsive, and easy to use for daily weather updates.
`,
    demoLink: "https://github.com/Mahalakshmi1394/Weather-predictor",
    
  },
  {
    title: "QR Code Generator",
    image: project4,
    category: "Apps",
    description: `My QR Code Generator allows users to instantly create QR codes from text, URLs, or contact details. It supports multiple formats and customizations like color and size. Generated codes can be downloaded and used for sharing information easily. It's a fast, user-friendly tool for both personal and business use.`,
    demoLink: "https://github.com/Mahalakshmi1394/QR-code-Generator",
    stacks: [
      {
        name: "React Native",
        logo: reactnative,
      },
      {
        name: "XD",
        logo: xd,
      },
      {
        name: "CSS",
        logo: css,
      },
    ],
  },
  {
    title: "SmartKart – AI-Powered E-Commerce Platform give an basic image that how it look ",
    image: project5,
    category: "UI/UX",
    description: `SmartKart is a next-generation e-commerce platform designed to revolutionize online shopping by harnessing the power of Artificial Intelligence (AI). The platform delivers a seamless, personalized, and efficient shopping experience for both customers and sellers.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "Figma",
        logo: figma,
      },
    ],
  },
  {
    title: "Quiz App Development",
    image: project6,
    category: "Apps",
    description: `Elevate engagement and knowledge retention with our Quiz App 
                    Development project. Seamlessly crafted for interactive learning 
                    experiences, our app offers customizable quizzes, real-time feedback, 
                    and captivating visuals. Empower users to test their knowledge anytime,
                     anywhere, fostering a dynamic learning environment tailored to their 
                     needs.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "React Native",
        logo: reactnative,
      },
      {
        name: "Figma",
        logo: figma,
      },
      {
        name: "XD",
        logo: xd,
      },
      {
        name: "Bootstrap",
        logo: bootstrap,
      },
    ],
  },
];

export const skills = [
  {
    title: "UI/UX",
    data: [
      {
        skill: "Figma",
        level: "Experienced",
        logo: figma,
      },
      {
        skill: "Sketch",
        level: "Intermediate",
        logo: sketch,
      },
      {
        skill: "XD",
        level: "Intermediate",
        logo: xd,
      },
    ],
  },
  {
    title: "Frontend Development",
    data: [
      {
        skill: "HTML",
        level: "Experienced",
        logo: html,
      },
      {
        skill: "CSS",
        level: "Experienced",
        logo: css,
      },
      {
        skill: "JavaScript",
        level: "Experienced",
        logo: javascript,
      },
      {
        skill: "Tailwind",
        level: "Intermediate",
        logo: tailwind,
      },
      {
        skill: "Bootstrap",
        level: "Experienced",
        logo: bootstrap,
      },
      {
        skill: "React",
        level: "Experienced",
        logo: react,
      },
      {
        skill: "React Native",
        level: "Experienced",
        logo: reactnative,
      },
    ],
  },
];
export const contactInfo = [
  {
    name: "Email",
    value: "roshithmaha@gmail.com",
    link: "mailto:roshithmaha@gmail.com",
    icon: emailicon,
    btnIcon: <MdOutlineEmail />,
    color: "rgb(56,115,205)",
  },
  {
    name: "WhatsApp",
    value: "+91 9384601134",
    link: "https://api.whatsapp.com/send?phone=+9384601134",
    icon: whatsappicon,
    btnIcon: <BsWhatsapp />,
    color: "rgb(38,234,112)",
  },
];
export const socialHandles = [
  {
    name: "Fiverr",
    icon: <SiFiverr />,
    link: "",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/Mahalakshmi1394/",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "www.linkedin.com/in/maha-lakshmi-216492261",
  }
];




// Place this in your main JS file or inside a <script> tag
document.addEventListener("DOMContentLoaded", () => {
  const scrollSections = document.querySelectorAll(
    '.section__wrapper, .skills-section, .projects-section'
  );
  const observer = new window.IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          // Uncomment next line to animate only once and not reset if scrolled out
          // observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );
  scrollSections.forEach(section => observer.observe(section));
});
