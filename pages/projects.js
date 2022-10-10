// Import everything we need.
import Navbar from '/components/Navbar.js'
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
      <Navbar />

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

        {/* <div class="project border">
          <div class="project-element border"><a>project title</a></div>
          <div class="project-element border">
            <div class="project-contributors border">
              <img class="border" width="100" height="100"></img>
              <img class="border" width="100" height="100"></img>
            </div>
          </div>
          <div class="project-element border">
            <img class="project-logo border" width="100" height="100"></img>
          </div>
          <div class="project-element border">
            <p>lorem ipsum sit amet
            lorem ipsum sit amet
            lorem ipsum sit amet
            lorem ipsum sit amet
            </p>
          </div>

        </div>
        

        <div id="project-footer">
          <div></div>
          <div></div>
        </div> */}

      </div>

    </>
  )
}

// Export the page.
export default Projects