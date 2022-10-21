// Import everything we need.
import Navbar from '/components/Navbar'
import Footer from '/components/Footer'
import projects from '/data/projects.json'

import Input from 'react'
import { useState, useEffect } from 'react'

const editIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M364.13 125.25L87 403l-23 45 44.99-23 277.76-277.13-22.62-22.62zM420.69 68.69l-22.62 22.62 22.62 22.63 22.62-22.63a16 16 0 000-22.62h0a16 16 0 00-22.62 0z"/></svg>
const deleteIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 112h352"/><path d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>

// Admin Panel page
function Admin() {
  const [section, setSection] = useState('Projects')
  const [projectEditModal, setProjectEditModal] = useState(null)
  const [projectCreateModal, setProjectCreateModal] = useState(null)
  const [projectDeleteModal, setProjectDeleteModal] = useState(null)

  // Close open modal if you press ESCAPE.
  useEffect(() => {
    document.addEventListener("keydown", e => {
      if (e.key == "Escape") closeModals()
    })
  }, [])

  // Disable body scrolling when a modal is open.
  useEffect(() => {
    const modal = document.querySelector('.modal-container')
    if (modal) document.body.style.position = 'fixed'
    else document.body.style.position = 'static'
  })

  // Catch-all function to close current modal.
  function closeModals() {
    setProjectEditModal(null)
    setProjectDeleteModal(null)
    setProjectCreateModal(null)
  }

  function createProject(event) {
    event.preventDefault()
    // console.log(e.target[0].value)
  }

  function editProject(event) {
    event.preventDefault()
  }

  return (
    <>
      <Navbar />
      
      <div id="admin">
        <nav>
          <h2>Admin Sections</h2>
          <button class={section == 'Projects' ? 'nav-selected' : ''} onClick={() => setSection('Projects')}>Projects</button>
          <button class={section == 'People' ? 'nav-selected' : ''} onClick={() => setSection('People')}>People</button>
          <button class={section == 'Other' ? 'nav-selected' : ''} onClick={() => setSection('Other')}>Other</button>
        </nav>

        { section == 'Projects' &&
          <section id="projects-sec">
            <header>
              <h3>Projects</h3>
              <button onClick={() => setProjectCreateModal(true)} class="create-button button">Add Project</button>
            </header>
            <div id="projects-list">
              {
                projects.map(project => {
                  return (
                    <div class="project-item">
                      <div class="left">
                        <img src={project.image} alt="Project logo" />
                        <h4>{project.name}</h4>
                      </div>
                      <div class="right">
                        <button onClick={() => setProjectEditModal(project)} class="edit-button button">{editIcon}Edit</button>
                        <button onClick={() => setProjectDeleteModal(project)} class="delete-button button">{deleteIcon}Delete</button>
                      </div>
                    </div>
                  )
                })
              }
            </div>

            { projectEditModal &&
              <div className="modal-container">
                <div id="project-edit-modal" className="modal">
                  <h4>Edit Project</h4>
                  <form>
                    <label for="project-edit-name">Project Name</label>
                    <input id="project-edit-name" type="text" defaultValue={projectEditModal.name} />
                    <label for="project-edit-description">Project Description</label>
                    <textarea id="project-edit-description" defaultValue={projectEditModal.description}></textarea>
                    <label for="project-edit-link">Project Visit Link</label>
                    <input id="project-edit-link" type="text" defaultValue={projectEditModal.link} />
                    <label for="project-edit-repository">Project Repository Link</label>
                    <input id="project-edit-repository" type="text" defaultValue={projectEditModal.repository} />
                    <button type="submit">Save Changes</button>
                  </form>
                  <button onClick={() => closeModals()} class="button-close">Close</button>
                </div>
              </div>
            }

            { projectCreateModal &&
              <div className="modal-container">
                <div id="project-create-modal" className="modal">
                  <h4>Create New Project</h4>
                  <form onSubmit={createProject}>
                    <label for="project-create-name">Project Name</label>
                    <input id="project-create-name" type="text" />
                    <button type="submit">Create</button>
                  </form>
                  <button onClick={() => closeModals()} class="button-close">Close</button>
                </div>
              </div>
            }

            { projectDeleteModal &&
              <div className="modal-container">
                <div id="project-delete-modal" className="modal">
                  <h4>Delete Project</h4>
                  <p>Are you sure you want to permanently delete this project?</p>
                  <button className="button-delete">Delete</button>
                  <button onClick={() => closeModals()} className="button-close">Close</button>
                </div>
              </div>
            }
          </section>
        }

        { section == 'People' &&
          <section id="people-sec">
            <h3>People</h3>
          </section>
        }

        { section == 'Other' &&
          <section id="other-sec">
            <h3>Other</h3>
          </section>
        }
      </div>

      <Footer />
    </>
  )
}

// Export the page.
export default Admin