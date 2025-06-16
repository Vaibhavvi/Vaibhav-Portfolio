import WordChange from '../assets/WordChange.png'
import iTask from '../assets/iTask.png'
import Kids from '../assets/Kids.png'
import CodePaste from '../assets/CodePaste.png'

const Project = () => {

   const projectData = [
    { image: CodePaste, title: "CodePaste", desc: "You can use this for store your code.", github: "https://github.com/Vaibhavvi/PasteCode", live: "https://vaibhavvi.github.io/PasteCode/" },
    { image: iTask, title: "iTask", desc: "Task management app.", github: "https://github.com/Vaibhavvi/iTask", live: "https://vaibhavvi.github.io/iTask/" },
    { image: Kids, title: "Kids App", desc: "Educational app for kids.", github: "https://github.com/Vaibhavvi/KIDS-LERNER", live: "https://vaibhavvi.github.io/KIDS-LERNER/" },
    { image: WordChange, title: "WordChange", desc: "Text manipulation tool.", github: "https://github.com/Vaibhavvi/WordChange", live: "https://vaibhavvi.github.io/WordChange/" }
     ];


  return (
   <>
   <section id="small-projects" className="py-5 bg-white">
        <div className="container">
          <h3 className="text-center fw-bold mb-4">Projects</h3>
          <div className="row justify-content-center g-4">
            {projectData.map((project, i) => (
              <div className="col-sm-6 col-md-4 col-lg-3" key={i}>
                <div className="small-project-card shadow-sm">
                  <div className="card-img-top-wrapper">
                    <img
                      src={project.image}
                      alt={`Project ${i + 1}`}
                      className="card-img-top-small"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <h6 className="fw-semibold mb-2">{project.title}</h6>
                    <div className="d-flex justify-content-center gap-2">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-primary"
                      >
                        Live
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-outline-dark"
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
   </>
  )
}

export default Project
