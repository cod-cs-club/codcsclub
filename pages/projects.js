// Import any custom components we need.
import Navbar from '../components/Navbar.js'

// import projects from '../data/projects.json'


// Projects page
function Projects() {
  return (
    <>
      <Navbar />

      <div id="projects">

        <div class="project border">
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
        </div>

      </div>

    </>
  )
}

// Export the page.
export default Projects