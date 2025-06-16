import React from 'react'

const Skill = () => {
  return (
    <>        
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
      </>
  )
}

export default Skill
