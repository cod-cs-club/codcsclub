// Import everything we need.
import Navbar from '/components/Navbar'
import Banner from '/components/Banner'
import Footer from '/components/Footer'
import projects from '/data/projects.json'
import getPersonInfo from '/functions/getPersonInfo.js'

// All the possible languages in the projects.
const languageIcons = {
  "HTML": "/html.png",
  "CSS": "/css.png",
  "JavaScript": "/javascript.png",
  "Next.js": "/nextjs.png",
  "Python": "/python.png"
}

// Projects page
function Projects() {
  return (
    <>
      <Navbar selectedPage="Projects" />
      <Banner
        image="/CSLogo.png"
        title="Projects"
        subtitle="All of our projects"
      />
      
      
      <div id="projects">
        
        <div id="project-list">
          {
            projects.map(project => {
              return (
                <div class="project">
                  <div class="left">
                    <a href={project.link}>{project.name}</a>
                    <p>{project.description}</p>
                    <div class="contributors">
                      <span>{project.contributors.length} Contributors:</span>
                      {
                        project.contributors.map(person => {
                          var person = getPersonInfo(person)
                          if (person) {
                            return (
                              <a href={"/people/" + person.name}>
                                <img src={person.image} />
                              </a>
                            )
                          }
                        })
                      }
                    </div>
                    <div class="languages">
                      {
                        project.languages.map(language => {
                          return (
                            <div class="bubble">
                              <img src={languageIcons[language]} />
                              <span>{language}</span>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                  <div class="right">
                    <img src={project.image} alt="Project logo image" />
                    <a href={project.repository}>Open in GitHub</a>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

      <Footer />
    </>
  )
}

// Export the page.
export default Projects