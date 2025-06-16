import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
// Removed NavLink import as we won't use it for external links
import Dube1 from '../assets/Dube1.jpg';
import Dube2 from '../assets/Dube2.png';
import Frontend from '../assets/Frontend.jpeg';
import React1 from '../assets/React1.jpeg';
import Mern from '../assets/Mern.jpeg';
import WordChange from '../assets/WordChange.png'
import iTask from '../assets/iTask.png'
import Kids from '../assets/Kids.png'
import CodePaste from '../assets/CodePaste.png'
import Contactimage from '../assets/Contactimage.jpeg';

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
    // Optionally reset form here or show a success message
  };

  const projectData = [
    { image: CodePaste, title: "CodePaste", desc: "You can use this for store your code.", github: "https://github.com/Vaibhavvi/PasteCode", live: "https://vaibhavvi.github.io/PasteCode/" },
    { image: iTask, title: "iTask", desc: "Task management app.", github: "https://github.com/Vaibhavvi/iTask", live: "https://vaibhavvi.github.io/iTask/" },
    { image: Kids, title: "Kids App", desc: "Educational app for kids.", github: "https://github.com/Vaibhavvi/KIDS-LERNER", live: "https://vaibhavvi.github.io/KIDS-LERNER/" },
    { image: WordChange, title: "WordChange", desc: "Text manipulation tool.", github: "https://github.com/Vaibhavvi/WordChange", live: "https://vaibhavvi.github.io/WordChange/" }
  ];

  return (
    <>
      <section className="home-section py-5 bg-white">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-center gap-5">

          {/* Left: Profile Card */}
          <div className="profile-card shadow">
            <img
              src={Dube1}
              alt="Vaibhav Dubey"
              className="img-fluid profile-card-img"
            />
          </div>

          {/* Right: Intro Text */}
          <div className="text-content text-center text-md-start">
            <h1 className="fw-bold mb-2">Hi, I'm <span className="text-primary">Vaibhav Dubey</span></h1>
            <h4 className="changing-text text-muted mb-3">{text}</h4>
            <p className="mb-3 small text-secondary">From Feroz Gandhi Polytechnic, Ratapur Raebareli</p>

            <div className="d-flex gap-3 flex-wrap mb-3">
              <a
                href="https://www.linkedin.com/in/vaibhav-dubey-8199292b4/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary"
              >
                Hire Me
              </a>

              <a
                href="/path-to-your-resume.pdf" // Replace with actual path to your resume
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Resume
              </a>
            </div>


            {/* Social Links */}
            <div className="d-flex gap-4 justify-content-center justify-content-md-start flex-wrap">
              <a
                href="https://github.com/Vaibhavvi"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-github fa-2x mb-1"></i>
                <small>GitHub</small>
              </a>

              <a
                href="https://leetcode.com/u/vaibhav_dubey_111/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <img
                  src="https://leetcode.com/static/images/LeetCode_logo.png"
                  alt="LeetCode"
                  style={{ height: '28px', marginBottom: '5px' }}
                />
                <small>LeetCode</small>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section py-5 bg-light">
        <div className="container d-flex justify-content-center">
          <div
            className="about-card p-4 shadow-lg rounded animate-about text-center bg-white w-100"
            style={{ maxWidth: '900px' }}
          >
            <h1 className="mb-4">About Me</h1>

            <div className="d-flex justify-content-center mb-4">
              <img
                src={Dube2}
                alt="Vaibhav Dubey"
                className="rounded-circle profile-img-lg shadow"
              />
            </div>

            <p className="px-3">
              Hi there! I’m <strong>Vaibhav Dubey</strong>, a certified <strong>MERN Stack Developer</strong> and <strong>Frontend Specialist</strong> with a deep passion for technology and problem-solving. With strong command over <strong>React</strong>, <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and frameworks like <strong>Bootstrap</strong> and <strong>Tailwind CSS</strong>, I love building beautiful, responsive, and scalable user interfaces.
            </p>

            <p className="px-3">
              I also have hands-on experience with backend development using the <strong>MERN stack (MongoDB, Express, React, Node.js)</strong>. In addition, I'm proficient in programming languages such as <strong>C++</strong> and <strong>Python</strong>, allowing me to think logically and solve problems efficiently.
            </p>

            <p className="px-3">
              I regularly work with modern development tools and platforms including <strong>Git</strong>, <strong>GitHub</strong>, <strong>Vercel</strong>, <strong>Netlify</strong>, <strong>Postman</strong>, and <strong>VS Code</strong>. Whether it's version control, API testing, or deployment — I'm continuously evolving with the ecosystem.
            </p>

            <h5 className="mt-4">Core Tech Stack</h5>
            <div className="d-flex justify-content-center gap-4 flex-wrap mt-3">
              <img src={Frontend} alt="Frontend" className="tech-img-circle shadow" />
              <img src={React1} alt="React" className="tech-img-circle shadow" />
              <img src={Mern} alt="MERN" className="tech-img-circle shadow" />
            </div>

            <div className="mt-4">
              <h6 className="mb-2">Currently Growing In:</h6>
              <p className="mb-0">
                . Mern Stack Development || DSA in Java .
              </p>
              <small className="text-muted">Progressing Day by Day 💪</small>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="small-projects" className="py-5 bg-white">
        <div className="container">
          <h3 className="text-center fw-bold mb-4 text-dark">Projects</h3>
          <div className="row justify-content-center g-4">
            {projectData.map((project, i) => (
              <div className="col-sm-6 col-md-4 col-lg-3" key={i}>
                <div className="small-project-card shadow-sm bg-dark text-white">
                  <div className="card-img-top-wrapper">
                    <img
                      src={project.image}
                      alt={`Project ${i + 1}`}
                      className="card-img-top-small"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <h6 className="fw-semibold mb-2 text-white">{project.title}</h6>
                    <div className="d-flex justify-content-center gap-2">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-outline-light"
                      >
                        Live
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-light text-dark"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Skills Section */}

      <section id="skills" className="section-skill py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">My Skills</h2>
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
                  <div className="icon mb-3">
                    <i className={`${icon} fa-2x text-primary`}></i>
                  </div>
                  <h5 className="mb-2 fw-semibold">{label}</h5>
                  <div className="progress rounded-pill" style={{ height: '10px' }}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: `${percent}%` }}
                      aria-valuenow={percent}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <small className="text-muted mt-2 d-block">{percent}% Proficiency</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}

      <section id="contact" className="section py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Get in Touch</h2>
          <div className="row">
            {/* Image Section - Now on the Left */}
            <div className="col-md-6 d-flex align-items-center justify-content-center mb-4">
              <div className="contact-img-card hover-zoom">
                <img
                  src={Contactimage}
                  alt="Contact"
                  className="img-fluid rounded shadow-sm"
                />
              </div>
            </div>

            {/* Form Section - Now on the Right */}
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    className="form-control"
                    rows="3"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Home;
