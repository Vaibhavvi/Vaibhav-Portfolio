import React, { useState, useEffect, useRef } from 'react';
import '../styles/Home.css';
import Dube1 from '../assets/Dube1.jpg';
import Dube2 from '../assets/Dube2.png';
import Frontend from '../assets/Frontend.jpeg';
import React1 from '../assets/React1.jpeg';
import Mern from '../assets/Mern.jpeg';
import iTask from '../assets/iTask.png';
import CodePaste from '../assets/CodePaste.png';
import Contactimage from '../assets/Contactimage.jpeg';
import Product from '../assets/Product.png';
import StayVista from '../assets/Stayvista.png';

function Home() {
  const [text, setText] = useState('Frontend Developer');
  const texts = ['Full Stack Developer', 'MERN Stack Developer', 'React Developer', 'Problem Solver'];
  const indexRef = useRef(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const interval = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % texts.length;
      setText(texts[indexRef.current]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const projectData = [
    {
      image: StayVista,
      title: "StayVista",
      description:
        "A full-stack Airbnb-inspired platform where users can explore and manage property listings.",
      skills: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Cloudinary"
      ],
      github: "https://github.com/Vaibhavvi/StayVista---AirbnbClone",
      live: "https://stayvista-airbnbclone-1.onrender.com/"
    },

    {
      image: Product,
      title: "Product Store",
      description:
        "A MERN stack e-commerce application for managing and exploring products with a responsive interface.",
      skills: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "REST API"
      ],
      github: "https://github.com/Vaibhavvi/Product-Store-MERN",
      live: "https://product-store-mern-frontend.onrender.com/"
    },

    {
      image: CodePaste,
      title: "CodePaste",
      description:
        "A web application for creating, storing and sharing code snippets through a simple interface.",
      skills: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Local Storage"
      ],
      github: "https://github.com/Vaibhavvi/PasteCode",
      live: "https://vaibhavvi.github.io/PasteCode/"
    },

    {
      image: iTask,
      title: "iTask",
      description:
        "A clean and responsive task management application for creating and organizing daily tasks.",
      skills: [
        "React",
        "JavaScript",
        "HTML",
        "CSS"
      ],
      github: "https://github.com/Vaibhavvi/iTask",
      live: "https://vaibhavvi.github.io/iTask/"
    }
  ];

  return (
    <div className="home-container bg-dark text-light">
      {/* Home Section */}
      <section className="hero-section py-5">
        <div className="container">
          <div className="row align-items-center justify-content-center g-5">

            {/* Profile Image */}
            <div className="col-md-5 text-center">
              <div className="hero-image-card">
                <img
                  src={Dube1}
                  alt="Vaibhav Dubey"
                  className="hero-image"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="col-md-7 text-center text-md-start">
              <h1 className="hero-title">
                Hi, I'm <span>Vaibhav Dubey</span>
              </h1>

              <h4 className="hero-subtitle">{text}</h4>

              <p className="hero-edu">
                B.Tech CSE (2nd Year) • FGIET Raibareli
              </p>

              {/* CTA Buttons */}
              <div className="d-flex gap-3 justify-content-center justify-content-md-start flex-wrap mt-4">
                <a
                  href="https://www.linkedin.com/in/vaibhav-dubey-8199292b4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-info hero-btn"
                >
                  Hire Me
                </a>

                <a
                  href="/path-to-your-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-info hero-btn"
                >
                  Download Resume
                </a>
              </div>

              {/* Social Links */}
              <div className="hero-socials mt-4">
                <a
                  href="https://github.com/Vaibhavvi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                  <span>GitHub</span>
                </a>

                <a
                  href="https://leetcode.com/u/vaibhav_dubey_111/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://leetcode.com/static/images/LeetCode_logo.png"
                    alt="LeetCode"
                  />
                  <span>LeetCode</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* About Me Section */}
      <section id="about" className="about-section py-5">
        <div className="container d-flex justify-content-center">
          <div className="about-glass-card text-center">
            <h2 className="fw-bold mb-4 text-white">About Me</h2>

            <div className="avatar-wrapper mb-4">
              <img
                src={Dube2}
                alt="Vaibhav Dubey"
                className="profile-avatar"
              />
            </div>

            <p className="about-text">
              MERN Stack Developer with strong expertise in React, Node.js, and MongoDB,
              along with a solid foundation in Java. Currently focused on building{" "}
              <strong>AI-integrated full-stack projects</strong> and strengthening{" "}
              <strong>DSA using Java</strong>. Passionate about creating scalable,
              performant, and user-centric web applications while continuously improving
              problem-solving and software development skills.
            </p>
            <div className="tech-stack mt-4">
              <img src={Frontend} alt="Frontend" />
              <img src={React1} alt="React" />
              <img src={Mern} alt="MERN" />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="projects-section py-5">

        <div className="container">

          <div className="projects-header text-center mb-5">

            <span className="section-badge">
              MY WORK
            </span>

            <h2 className="projects-title">
              Featured <span>Projects</span>
            </h2>

            <p className="projects-subtitle">
              A collection of full-stack projects built with modern
              technologies and focused on solving real-world problems.
            </p>

          </div>

          <div className="row g-4 justify-content-center">

            {projectData.map((project, index) => (

              <div
                className="col-sm-6 col-lg-4"
                key={index}
              >
                <article className="project-glass-card">

                  <div className="project-image">

                    <img
                      src={project.image}
                      alt={`${project.title} project`}
                      loading="lazy"
                    />

                    <div className="project-overlay">

                      {/* Live Demo */}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-btn live-btn"
                          aria-label={`View ${project.title} live demo`}
                        >
                          <i className="fa-solid fa-arrow-up-right-from-square"></i>
                          <span>Live Demo</span>
                        </a>
                      )}


                      {/* GitHub */}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-btn github-btn"
                          aria-label={`View ${project.title} source code`}
                        >
                          <i className="fa-brands fa-github"></i>
                          <span>GitHub</span>
                        </a>
                      )}

                    </div>

                  </div>

                  <div className="project-content">


                    {/* Project Title */}

                    <h5 className="project-title">
                      {project.title}
                    </h5>


                    {/* Project Description */}

                    {project.description && (
                      <p className="project-description">
                        {project.description}
                      </p>
                    )}

                    {project.skills?.length > 0 && (

                      <div className="project-skills">

                        {project.skills.map((skill, skillIndex) => (

                          <span
                            className="project-skill"
                            key={`${skill}-${skillIndex}`}
                          >
                            {skill}
                          </span>

                        ))}

                      </div>

                    )}

                  </div>

                </article>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Experience/Education Section */}
      <section id="experience" className="experience-section py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 text-white">
            Experience & Education
          </h2>

          <div className="row g-4">
            {/* Experience */}
            <div className="col-lg-6">
              <h4 className="section-heading mb-4">Experience</h4>

              {[
                {
                  title: "Founder Office Intern",
                  subtitle: "Hukkido",
                  duration: "Summer 2025",
                  description:
                    "Worked closely with founders, supported startup operations, and learned real-world management workflows.",
                },
                {
                  title: "Summer Training (MERN)",
                  subtitle: "DigiCoders",
                  duration: "Jul 2024 – Aug 2024",
                  description:
                    "Completed intensive MERN stack training and awarded Star Performer for project excellence.",
                },
              ].map((exp, i) => (
                <div className="timeline-card" key={i}>
                  <span className="timeline-dot"></span>
                  <div className="card-content">
                    <h5>{exp.title}</h5>
                    <span className="text-muted small">
                      {exp.subtitle} • {exp.duration}
                    </span>
                    <p className="mt-2">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="col-lg-6">
              <h4 className="section-heading mb-4">Education</h4>

              {[
                {
                  title: "B.Tech CSE (Lateral Entry)",
                  subtitle: "FGIET Raibareli",
                  duration: "2025 – 2028",
                  description:
                    "Pursuing with focus on MERN stack and GenAI-based full-stack projects.",
                },
                {
                  title: "Diploma in Computer Science",
                  subtitle: "2022 – 2025",
                  description:
                    "Scored 71%, awarded Star Performer, trained in full-stack web development.",
                },
                {
                  title: "High School (10th)",
                  subtitle: "School Topper",
                  description:
                    "Achieved top academic rank with consistent excellence.",
                },
              ].map((edu, i) => (
                <div className="timeline-card" key={i}>
                  <span className="timeline-dot"></span>
                  <div className="card-content">
                    <h5>{edu.title}</h5>
                    <span className="text-muted small">
                      {edu.subtitle} {edu.duration && `• ${edu.duration}`}
                    </span>
                    <p className="mt-2">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Skills Section */}
      <section id="skills" className="skills-section py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 text-white">
            My Skills
          </h2>

          <div className="row g-4">
            {[
              { name: "HTML5", level: 90, icon: "fab fa-html5" },
              { name: "CSS3", level: 85, icon: "fab fa-css3-alt" },
              { name: "Bootstrap", level: 80, icon: "fab fa-bootstrap" },
              { name: "JavaScript", level: 85, icon: "fab fa-js" },
              { name: "MongoDB", level: 75, icon: "fas fa-database" },
              { name: "Express.js", level: 75, icon: "fas fa-server" },
              { name: "React", level: 80, icon: "fab fa-react" },
              { name: "Node.js", level: 80, icon: "fab fa-node" },
              { name: "Java", level: 85, icon: "fa-brands fa-java" },
              { name: "C++", level: 40, icon: "fas fa-code" },
              { name: "Python", level: 70, icon: "fab fa-python" },
            ].map((skill, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="skill-glass-card h-100">
                  <div className="skill-icon">
                    <i className={`${skill.icon}`}></i>
                  </div>

                  <h5 className="skill-title">{skill.name}</h5>

                  <div className="progress skill-progress">
                    <div
                      className="progress-bar"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>

                  <span className="skill-percent">
                    {skill.level}% Proficiency
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className="contact-section py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 text-white">
            Get In Touch
          </h2>

          <div className="row align-items-center g-4">
            {/* Image */}
            <div className="col-lg-6 text-center">
              <div className="contact-image-wrapper">
                <img
                  src={Contactimage}
                  alt="Contact"
                  className="img-fluid"
                />
              </div>
            </div>

            {/* Form */}
            <div className="col-lg-6">
              <div className="contact-form-card">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control custom-input"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control custom-input"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label">Message</label>
                    <textarea
                      rows="4"
                      className="form-control custom-input"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-gradient w-100">
                    Send Message 🚀
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;