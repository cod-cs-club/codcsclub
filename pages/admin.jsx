// Import everything we need.
import Navbar from '/components/Navbar'
import Footer from '/components/Footer'
import api from '/functions/api'

import { useState, useEffect } from 'react'

// import people from '/data/people.json'

const editIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M364.13 125.25L87 403l-23 45 44.99-23 277.76-277.13-22.62-22.62zM420.69 68.69l-22.62 22.62 22.62 22.63 22.62-22.63a16 16 0 000-22.62h0a16 16 0 00-22.62 0z"/></svg>
const deleteIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 112h352"/><path d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>

// Admin Panel page
function Admin() {
  const [section, setSection] = useState('People')

  const [people, setPeople] = useState([])
  const [personEditModal, setPersonEditModal] = useState()
  const [personCreateModal, setPersonCreateModal] = useState()
  const [personDeleteModal, setPersonDeleteModal] = useState()

  const [projects, setProjects] = useState([])
  const [projectEditModal, setProjectEditModal] = useState(null)
  const [projectCreateModal, setProjectCreateModal] = useState(null)
  const [projectDeleteModal, setProjectDeleteModal] = useState(null)
  const [projectAddContributorModal, setProjectAddContributorModal] = useState(false)
  const [projectContributors, setProjectContributors] = useState([])

  // Fetch needed data.
  useEffect(() => {
    api.getPeople()
      .then(data => setPeople(data))
    api.getProjects()
      .then(data => setProjects(data))
  }, [])

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
  }, [])

  // Catch-all function to close current modal.
  function closeModals() {
    setProjectEditModal(null)
    setProjectDeleteModal(null)
    setProjectCreateModal(null)
    setPersonEditModal(null)
    setPersonDeleteModal(null)
    setPersonCreateModal(null)
  }

  // People section functions.
  function createPerson(event) {
    event.preventDefault()
    closeModals()
    api.createPerson(event.target[0].value)
      .then(newPersonID => api.getPeople()
      .then(newPeople => {
        setPeople(newPeople)
        const editPerson = newPeople.find(f => f.id == newPersonID)
        setPersonEditModal(editPerson)
      }))
  }

  function deletePerson(event) {
    event.preventDefault()
    closeModals()
    api.deletePerson(event.target[0].value)
      .then(() => api.getPeople()
      .then(newPeople => setPeople(newPeople)))
  }

  function editProject(event) {
    event.preventDefault()
  }

  function createProject(event) {
    event.preventDefault()
    closeModals()
    api.createProject(event.target[0].value)
      .then(newProjectID => api.getProjects()
      .then(newProjects => {
        setProjects(newProjects)
        const editProject = newProjects.find(f => f.id == newProjectID)
        setProjectEditModal(editProject)
      }))
  }

  function deleteProject(event) {
    event.preventDefault()
    closeModals()
    api.deleteProject(event.target[0].value)
      .then(() => api.getProjects()
      .then(newProjects => setProjects(newProjects)))
  }

  function projectAddContributor(e) {
    e.preventDefault()
    const contributors = [...projectContributors]
    contributors.push({ id: 1 })
    setProjectContributors(contributors)
  }

  function projectSelectContributor(person, index) {
    setProjectAddContributorModal(null)
    const p = [...projectContributors]
    p[index].id = person.id
    setProjectContributors(p)
  }

  return (
    <>
      <Navbar />
      
      <div id="admin">
        <nav>
          <h2>Admin Sections</h2>
          <button class={section == 'People' ? 'nav-selected' : ''} onClick={() => setSection('People')}>People</button>
          <button class={section == 'Projects' ? 'nav-selected' : ''} onClick={() => setSection('Projects')}>Projects</button>
          <button class={section == 'Other' ? 'nav-selected' : ''} onClick={() => setSection('Other')}>Other</button>
        </nav>

        { section == 'People' &&
          <section id="people-sec">
            <header>
              <h3>People</h3>
              <button onClick={() => setPersonCreateModal(true)} class="create-button button">Add Person</button>
            </header>
            <div id="people-list">
              {
                people.map(person => {
                  return (
                    <div class="person-item">
                      <div class="left">
                        <img src={person.image} alt="Profile image" />
                        <h4>{person.name}</h4>
                      </div>
                      <div class="right">
                        <button onClick={() => setPersonEditModal(person)} class="edit-button button">{editIcon}Edit</button>
                        <button onClick={() => setPersonDeleteModal(person)} class="delete-button button">{deleteIcon}Delete</button>
                      </div>
                    </div>
                  )
                })
              }
            </div>

            { personEditModal &&
              <>
                <div className="modal-container">
                  <div id="person-edit-modal" className="modal">
                    <h4>Edit Person Info</h4>
                    <form>
                      <label for="person-edit-name">Full Name</label>
                      <input id="person-edit-name" type="text" defaultValue={personEditModal.name} />
                      <label for="person-edit-bio">Person Bio</label>
                      <textarea id="person-edit-bio" defaultValue={personEditModal.bio}></textarea>
                      <label for="person-edit-role">Club Role</label>
                      <input id="person-edit-role" type="text" defaultValue={personEditModal.role} />
                      <button type="submit">Save Changes</button>
                    </form>
                    <button onClick={() => closeModals()} class="button-close">Close</button>
                  </div>
                </div>
              </>
            }

            { personCreateModal &&
              <div className="modal-container">
                <div id="person-create-modal" className="modal">
                  <h4>Create New Person</h4>
                  <form onSubmit={createPerson}>
                    <label for="person-create-name">Person Name</label>
                    <input id="person-create-name" type="text" />
                    <button type="submit">Create</button>
                  </form>
                  <button onClick={() => closeModals()} class="button-close">Close</button>
                </div>
              </div>
            }

            { personDeleteModal &&
              <div className="modal-container">
                <div id="person-delete-modal" className="modal">
                  <h4>Delete Person</h4>
                  <p>Are you sure you want to permanently delete this person?</p>
                  <form onSubmit={deletePerson}>
                    <input id="person-delete-id" type="hidden" value={personDeleteModal.id} />
                    <button class="button-delete">Delete</button>
                  </form>
                  <button onClick={() => closeModals()} className="button-close">Close</button>
                </div>
              </div>
            }
          </section>
        }

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
              <>
                <div className="modal-container">
                  <div id="project-edit-modal" className="modal">
                    <h4>Edit Project</h4>
                    <form>
                      <label for="project-edit-name">Project Name</label>
                      <input id="project-edit-name" type="text" defaultValue={projectEditModal.name} />
                      <label>Project Contributors</label>
                      <div class="items-select-container">
                        { projectContributors && projectContributors.map((contributor, index) => {
                          return (
                            <div class="item">
                              <PersonItem
                                people={people}
                                personID={contributor.id}
                                clickAction={() => setProjectAddContributorModal(index)}
                              />
                              <input type="text" />
                            </div>
                          )
                        })}
                        <button onClick={projectAddContributor}>+ Contributor</button>
                      </div>
                      <label for="project-edit-description">Project Description</label>
                      <textarea id="project-edit-description" defaultValue={projectEditModal.description}></textarea>
                      <label for="project-edit-link">Project Visit Link</label>
                      <input id="project-edit-link" type="text" defaultValue={projectEditModal.visit} />
                      <label for="project-edit-repository">Project Repository Link</label>
                      <input id="project-edit-repository" type="text" defaultValue={projectEditModal.repository} />
                      <button type="submit">Save Changes</button>
                    </form>
                    <button onClick={() => closeModals()} class="button-close">Close</button>
                  </div>
                </div>
                {/* Add new project contributor modal. */}
                { Number.isInteger(projectAddContributorModal) &&
                  <div className="modal-container">
                    <div id="project-contributor-modal" className="modal">
                      <h4>Add New Contributor</h4>
                      { people.map(person => {
                        return (
                          <div onClick={() => projectSelectContributor(person, projectAddContributorModal)} class="add-item-select">
                            <img src={person.image} alt="" />
                            <span>{person.name}</span>
                          </div>
                        )
                      })}
                      <button onClick={() => setProjectAddContributorModal(false)} className="button-close">Close</button>
                    </div>
                  </div>
                }
              </>
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
                  <form onSubmit={deleteProject}>
                    <input id="project-delete-id" type="hidden" value={projectDeleteModal.id} />
                    <button class="button-delete">Delete</button>
                    {/* <button type="submit" class="button-delete">Delete</button> */}
                  </form>
                  <button onClick={() => closeModals()} className="button-close">Close</button>
                </div>
              </div>
            }
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

function PersonItem({ people, personID, clickAction }) {
  const person = [...people].find(f => f.id == personID)
  console.log(people)
  console.log(personID)

  return (
    <div class="item-button" onClick={clickAction}>
      { person &&
        <>
          <img src={person.image} alt="" />
          <span>{person.name}</span>
        </>
      }
      { !person &&
        <span>No Person Selected</span>
      }
    </div>
  )
}

// Export the page.
export default Admin