import Icons from '/components/CommonSVGs'
import api from '/functions/api'
import cropImage from '/functions/cropImage'
import tags from '/data/projectTags.json'

import { useState } from 'react'

// Admin Page Projects Section & Projects Modals.
export default function AdminProjectsSection({ projects, setProjects, people }) {
  const [projectEditModal, setProjectEditModal] = useState(null)
  const [projectCreateModal, setProjectCreateModal] = useState(null)
  const [projectDeleteModal, setProjectDeleteModal] = useState(null)
  const [projectAddContributorModal, setProjectAddContributorModal] = useState(false)
  const [projectImage, setProjectImage] = useState(null)
  const [projectContributors, setProjectContributors] = useState([])
  const [projectTags, setProjectTags] = useState([])

  // Edit/update project info.
  function editProject(event) {
    event.preventDefault()
    setProjectEditModal(null)
    const contributors = []
    projectContributors.forEach((contributor, index) => {
      // Super hacky way of getting the correct input value, should fix later.
      const inputIndex = 6 + tags.length + (index * 2)
      if (!people.find(f => f.id == contributor.id)) return
      contributors.push({
        id: contributor.id,
        note: event.target[inputIndex].value
      })
    })
    const info = {
      id: event.target[0].value,
      name: event.target[1].value,
      description: event.target[2].value,
      image: projectImage,
      visit: event.target[4].value,
      repository: event.target[5].value,
      tags: projectTags,
      contributors: contributors
    }

    api.editProject(info)
      .then(() => api.getProjects()
      .then(newProjects => setProjects(newProjects)))
  }

  // Create new project.
  function createProject(event) {
    event.preventDefault()
    setProjectCreateModal(null)
    api.createProject(event.target[0].value)
      .then(newProjectID => api.getProjects()
      .then(newProjects => {
        setProjects(newProjects)
        const editProject = newProjects.find(f => f.id == newProjectID)
        openProjectEditor(editProject)
      }))
  }

  // Delete given project.
  function deleteProject(event) {
    event.preventDefault()
    setProjectDeleteModal(null)
    api.deleteProject(event.target[0].value)
      .then(() => api.getProjects()
      .then(newProjects => setProjects(newProjects)))
  }

  // Toggle inclusion of a project tag.
  function projectToggleTag(name) {
    const tags = [...projectTags]
    const index = tags.findIndex(f => f == name)
    if (index >= 0) tags.splice(index, 1)
    else tags.push(name)
    setProjectTags(tags)
  }

  // Add new contributor to project.
  function projectAddContributor(event) {
    event.preventDefault()
    if (projectContributors.find(f => f.id == 0)) {
      setProjectAddContributorModal(projectContributors.length - 1)
    } else {
      const contributors = [...projectContributors]
      contributors.push({ id: 0, note: 'Note here' })
      setProjectContributors(contributors)
      setProjectAddContributorModal(contributors.length - 1)
    }
  }

  // Delete contributor from the list.
  function projectDeleteContributor(index) {
    const contributors = [...projectContributors]
    contributors.splice(index, 1)
    setProjectContributors(contributors)
  }

  // Select project contributor from the modal.
  function projectSelectContributor(person, index) {
    setProjectAddContributorModal(null)
    const p = [...projectContributors]
    p[index].id = person.id
    setProjectContributors(p)
  }

  // Open editor modal + set all other needed states.
  function openProjectEditor(project) {
    setProjectEditModal(project)
    setProjectImage(project.image)
    setProjectContributors(project.contributors)
    setProjectTags(project.tags)
  }
  
  return (
    <section id="projects-sec">
      <header>
        <h3>Projects</h3>
        <button onClick={() => setProjectCreateModal(true)} className="create-button button">Add Project</button>
      </header>
      <div id="projects-list">
        { projects.map(project => {
          return (
            <div className="project-item">
              <img src={project.image} alt="Project logo" />
              <h4>{project.name}</h4>
              <p>{project.description}</p>
              <p>{project.contributors.length} Contributors</p>
              <button onClick={() => openProjectEditor(project)} className="edit-button button"><Icons name="edit" />Edit</button>
              <button onClick={() => setProjectDeleteModal(project)} className="delete-button button"><Icons name="delete" />Delete</button>
            </div>
          )
        })}
      </div>

        {/* Edit project modal */}
      { projectEditModal &&
        <>
          <div className="modal-container">
            <div id="project-edit-modal" className="modal modal-wide">
              <h4>Edit Project</h4>
              <form onSubmit={editProject}>
                <div className="colum">
                  <input id="project-edit-id" type="hidden" value={projectEditModal.id} />
                  <label htmlFor="project-edit-name">Project Name</label>
                  <input id="project-edit-name" type="text" defaultValue={projectEditModal.name} />
                  <label htmlFor="project-edit-description">Project Description</label>
                  <textarea id="project-edit-description" defaultValue={projectEditModal.description}></textarea>
                  <div className="image-select">
                    <div>
                      <label htmlFor="project-edit-image">Project Image</label>
                      <input type="file" accept="image/*" onChange={(e) => cropImage(e.target.files[0]).then(data => setProjectImage(data))} />
                    </div>
                    <img src={projectImage} alt="Image" />
                  </div>
                  <label htmlFor="project-edit-link">Project Visit Link</label>
                  <input id="project-edit-link" type="text" defaultValue={projectEditModal.visit} />
                  <label htmlFor="project-edit-repository">Project Repository Link</label>
                  <input id="project-edit-repository" type="text" defaultValue={projectEditModal.repository} />
                </div>
                <div className="colum">
                  <label>Project Tags</label>
                  <div className="tags-select-container">
                    { tags.map(tag => {
                      return (
                        <button type="button" className={projectTags.find(f => f == tag.name) ? "tag selected" : "tag"} onClick={() => projectToggleTag(tag.name)}>
                          <img src={tag.image} alt="" />
                          {tag.name}
                        </button>
                      )
                    })}
                  </div>
                  <label>Project Contributors</label>
                  <div className="items-select-container">
                    { projectContributors.map((contributor, index) => {
                      return (
                        <div className="item" key={`${index}_${contributor.id}`}>
                          <PersonItem
                            people={people}
                            personID={contributor.id}
                            clickAction={() => setProjectAddContributorModal(index)}
                          />
                          <input type="text" defaultValue={contributor.note} />
                          <button type="button" className="delete" onClick={() => projectDeleteContributor(index)}><Icons name="delete" /></button>
                        </div>
                      )
                    })}
                    <button type="button" className="add" onClick={projectAddContributor}>+ Add Contributor</button>
                  </div>
                </div>
                <button type="button" onClick={() => setProjectEditModal(null)} className="button-close">Cancel</button>
                <button type="submit">Save Changes</button>
              </form>
            </div>
          </div>

          {/* Add new project contributor modal. */}
          { Number.isInteger(projectAddContributorModal) &&
            <div className="modal-container">
              <div id="project-contributor-modal" className="modal">
                <h4>Add New Contributor</h4>
                { people.map(person => {
                  if (projectContributors.find(f => f.id == person.id)) return
                  return (
                    <div onClick={() => projectSelectContributor(person, projectAddContributorModal)} className="add-item-select">
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

      {/* Create project modal */}
      { projectCreateModal &&
        <div className="modal-container">
          <div id="project-create-modal" className="modal">
            <h4>Create New Project</h4>
            <form onSubmit={createProject}>
              <label htmlFor="project-create-name">Project Name</label>
              <input id="project-create-name" type="text" />
              <button type="submit">Create</button>
            </form>
            <button onClick={() => setProjectCreateModal(null)} className="button-close">Cancel</button>
          </div>
        </div>
      }

      {/* Delete project modal */}
      { projectDeleteModal &&
        <div className="modal-container">
          <div id="project-delete-modal" className="modal">
            <h4>Delete Project</h4>
            <p>Are you sure you want to permanently delete this project?</p>
            <form onSubmit={deleteProject}>
              <input id="project-delete-id" type="hidden" value={projectDeleteModal.id} />
              <button className="button-delete">Delete</button>
            </form>
            <button onClick={() => setProjectDeleteModal(null)} className="button-close">Close</button>
          </div>
        </div>
      }
    </section>
  )
}

function PersonItem({ people, personID, clickAction }) {
  const person = [...people].find(f => f.id == personID)
  return (
    <div className="item-button" onClick={clickAction}>
      { person &&
        <>
          <img src={person.image} alt="" />
          <span>{person.name}</span>
          <Icons name="edit" />
        </>
      }
      { !person &&
        <>
          <span>No Person Selected</span>
          <Icons name="edit" />
        </>
      }
    </div>
  )
}