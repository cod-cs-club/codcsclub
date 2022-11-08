// Import everything we need.
import Navbar from '/components/Navbar'
import Banner from '/components/Banner'
import Footer from '/components/Footer'
import api from '/functions/api'

import { useState, useEffect } from 'react'

// Projects page
function Projects() {
  const [projects, setProjects] = useState()

  useEffect(() => {
    api.getProjects({ fullInfo: true })
      .then(data => setProjects(data))
  }, [])

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
          { projects && projects.map(project => {
            return (
              <div className="project">
                <div className="left">
                  <a href={project.visit}>{project.name}</a>
                  <p>{project.description}</p>
                  <div className="contributors">
                    <span>{project.contributors.length} Contributors:</span>
                    { project.contributors.map(person => {
                      return (
                        <a href={"/people/" + person.name}>
                          <img src={person.image} />
                        </a>
                      )
                    })}
                  </div>
                  <div className="languages">
                    { project.tags.map(tag => {
                      return (
                        <div className="bubble">
                          <img src={tag.image} />
                          <span>{tag.name}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className="right">
                  <img src={project.image} alt="Project logo image" />
                  <a href={project.repository}>Open in GitHub</a>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <Footer />
    </>
  )
}

// Export the page.
export default Projects