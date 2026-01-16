import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import Dube1 from '../assets/Dube1.jpg';
import Dube2 from '../assets/Dube2.png';
import Frontend from '../assets/Frontend.jpeg';
import React1 from '../assets/React1.jpeg';
import Mern from '../assets/Mern.jpeg';
import WordChange from '../assets/WordChange.png';
import iTask from '../assets/iTask.png';
import Kids from '../assets/Kids.png';
import CodePaste from '../assets/CodePaste.png';
import Contactimage from '../assets/Contactimage.jpeg';
import Product from '../assets/Product.png';
import StayVista from '../assets/StayVista.png';

function Home() {
  const [text, setText] = useState('Frontend Developer');
  const texts = ['Frontend Developer', 'Full Stack Developer', 'React Developer', 'Learner'];
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
    { image:StayVista, title: "StayVista (Full-Stack)", github: "https://github.com/Vaibhavvi/StayVista---AirbnbClone", live: "https://stayvista-airbnbclone-1.onrender.com/" },
    { image: Product, title: "Product Store (Full-Stack)", github: "https://github.com/Vaibhavvi/Product-Store-MERN", live: "https://product-store-mern-frontend.onrender.com/" },
    { image: CodePaste, title: "CodePaste", github: "https://github.com/Vaibhavvi/PasteCode", live: "https://vaibhavvi.github.io/PasteCode/" },
    { image: iTask, title: "iTask", github: "https://github.com/Vaibhavvi/iTask", live: "https://vaibhavvi.github.io/iTask/" },
  ];

  return (
    <div  className="home-container bg-dark text-light">
      {/* Home Section */}
      <section className="home-section py-5">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-center gap-5">
          <div className="profile-card shadow">
            <img src={Dube1} alt="Vaibhav Dubey" className="img-fluid profile-card-img" />
          </div>

          <div className="text-content text-center text-md-start">
            <h1 className="fw-bold mb-2">Hi, I'm <span className="text-primary">Vaibhav Dubey</span></h1>
            <h4 className="changing-text text-light mb-3">{text}</h4>
            <p className="mb-3 small text-light">FGIET Raibareli (BTech - CSE-2nd year)</p>

            <div className="d-flex gap-3 flex-wrap mb-3">
              <a href="https://www.linkedin.com/in/vaibhav-dubey-8199292b4/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">Hire Me</a>
              <a href="/path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Resume</a>
            </div>

            <div className="d-flex gap-4 justify-content-center justify-content-md-start flex-wrap">
              <a href="https://github.com/Vaibhavvi" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-github fa-2x mb-1"></i>
                <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="GitHub" style={{ height: '28px', marginBottom: '5px' }} />
                <small>GitHub</small>
              </a>
              <a href="https://leetcode.com/u/vaibhav_dubey_111/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src="https://leetcode.com/static/images/LeetCode_logo.png" alt="LeetCode" style={{ height: '28px', marginBottom: '5px' }} />
                <small>LeetCode</small>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section py-5">
        <div className="container d-flex justify-content-center">
          <div className="about-card p-4 shadow-lg rounded text-center w-100" style={{ maxWidth: '900px' }}>
            <h3 className="text-center fw-bold mb-4 text-dark">About Me</h3>
            <div className="d-flex justify-content-center mb-4">
              <img src={Dube2} alt="Vaibhav Dubey" className="rounded-circle profile-img-lg shadow" />
            </div>
            <p className="px-3 text-dark">Certified MERN stack developer with expertise in React, Node.js, and MongoDB, now focusing on AI-integrated projects and DSA in C++. Passionate about building responsive, scalable, and high-performance web applications.</p>
            {/* Core tech stack */}
            <div className="d-flex justify-content-center gap-4 flex-wrap mt-3">
              <img src={Frontend} alt="Frontend" className="tech-img-circle shadow" />
              <img src={React1} alt="React" className="tech-img-circle shadow" />
              <img src={Mern} alt="MERN" className="tech-img-circle shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="small-projects" className="py-5">
        <div className="container">
          <h3 className="text-center fw-bold mb-4 text-light">Projects</h3>
          <div className="row justify-content-center g-4">
            {projectData.map((project, i) => (
              <div className="col-sm-6 col-md-4 col-lg-3" key={i}>
                <div className="small-project-card shadow-sm text-white">
                  <img src={project.image} alt={project.title} className="card-img-top-small" />
                  <div className="p-3 text-center">
                    <h6 className="fw-semibold mb-2 text-white">{project.title}</h6>
                    <div className="d-flex justify-content-center gap-2">
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-light">Live</a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-light text-dark">GitHub</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience/Education Section */}
      <section id="experience" className="section py-5 experience-section">
        <div className="container">
          <h3 className="text-center fw-bold mb-4 text-light">Experience & Education</h3>
          <div className="row g-4">
            {/* Experience Column */}
            <div className="col-md-6">
              <h4 className="section-subtitle text-primary mb-4">Experience</h4>

              {[
                {
                  title: "Founder Office Intern",
                  subtitle: "Hukkido",
                  duration: "Summer 2025",
                  description: "Assisted in startup operations and learning management processes.",
                },
                {
                  title: "Summer Training",
                  subtitle: "DigiCoders",
                  duration: "July 2024 – Aug 2024",
                  description: "Completed training with Star Performer award in MERN stack development.",
                },
              ].map((exp, i) => (
                <div className="experience-card p-3 mb-3" key={i}>
                  <h5 className="experience-title">{exp.title}</h5>
                  <p className="experience-subtitle">{exp.subtitle}</p>
                  <p className="experience-duration">{exp.duration}</p>
                  <p>{exp.description}</p>
                </div>
              ))}
            </div>

            {/* Education Column */}
            <div className="col-md-6">
              <h4 className="section-subtitle text-primary mb-4">Education</h4>

              {[
                {
                  title: "B.Tech CSE (Lateral Entry)",
                  subtitle: "FGIET Raibareli",
                  duration: "2025 – 2028",
                  description: "Currently pursuing, focusing on MERN stack, GenAI full-stack integration projects.",
                },
                {
                  title: "Diploma in CSE",
                  subtitle: "2022 – 2025",
                  description: "Scored 71%, Star Performer of the batch, trained in full-stack web development.",
                },
                {
                  title: "10th School",
                  subtitle: "School Topper",
                  description: "Achieved top rank in class with excellent academic performance.",
                },
              ].map((edu, i) => (
                <div className="experience-card p-3 mb-3" key={i}>
                  <h5 className="experience-title">{edu.title}</h5>
                  {edu.subtitle && <p className="experience-subtitle">{edu.subtitle}</p>}
                  {edu.duration && <p className="experience-duration">{edu.duration}</p>}
                  <div>{edu.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-skill py-5">
        <div className="container">
          <h3 className="text-center fw-bold mb-4 text-light">My Skills</h3>
          <div className="row g-4">
            {[
              ['HTML5', 90, 'fab fa-html5'],
              ['CSS3', 85, 'fab fa-css3-alt'],
              ['Bootstrap', 80, 'fab fa-bootstrap'],
              ['JavaScript', 75, 'fab fa-js'],
              ['React', 80, 'fab fa-react'],
              ['C++', 85, 'fas fa-code'],
              ['Python', 70, 'fab fa-python'],
              ['MongoDB', 70, 'fas fa-database'],
              ['Express.js', 65, 'fas fa-server'],
              ['Node.js', 60, 'fab fa-node'],
            ].map(([label, percent, icon], index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="skill-card p-4 border rounded shadow-sm text-center h-100">
                  <div className="icon mb-3"><i className={`${icon} fa-2x text-primary`}></i></div>
                  <h5 className="mb-2 fw-semibold text-dark">{label}</h5>
                  <div className="progress rounded-pill" style={{ height: '10px' }}>
                    <div className="progress-bar bg-primary" style={{ width: `${percent}%` }}></div>
                  </div>
                  <small className="text-muted mt-2 d-block">{percent}% Proficiency</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section py-5">
        <div className="container">
          <h2 className="text-center mb-4 text-light">Get in Touch</h2>
          <div className="row">
            <div className="col-md-6 d-flex align-items-center justify-content-center mb-4">
              <div className="contact-img-card hover-zoom">
                <img src={Contactimage} alt="Contact" className="img-fluid rounded shadow-sm" />
              </div>
            </div>
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label text-light">Name</label>
                  <input type="text" id="name" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-light">Email</label>
                  <input type="email" id="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label text-light">Message</label>
                  <textarea id="message" className="form-control" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;