import Icons from '/components/CommonSVGs'
import api from '/functions/api'
import cropImage from '/functions/cropImage'
import socials from '/data/socials.json'
import roles from '/data/roles.json'

import { useState } from 'react'

// Admin Page People Section & People Modals.
export default function AdminPeopleSection({ people, setPeople }) {
  const [personEditModal, setPersonEditModal] = useState()
  const [personCreateModal, setPersonCreateModal] = useState()
  const [personDeleteModal, setPersonDeleteModal] = useState()
  const [personImage, setPersonImage] = useState(null)
  const [personSocials, setPersonSocials] = useState(null)

  // Edit/update person info.
  function editPerson(event) {
    event.preventDefault()
    setPersonEditModal(null)
    const filledSocials = []
    socials.forEach((social, index) => {
      // Super hacky way of getting the correct input value, should fix later.
      const inputIndex = 6 + index
      if (event.target[inputIndex].value == '') return
      filledSocials.push({
        name: social.name,
        link: event.target[inputIndex].value
      })
    })
    const info = {
      id: event.target[0].value,
      name: event.target[1].value,
      bio: event.target[2].value,
      image: personImage,
      role: event.target[4].value,
      onteam: event.target[5].value,
      socials: filledSocials
    }

    api.editPerson(info)
      .then(() => api.getPeople()
      .then(newPeople => setPeople(newPeople)))
  }

  // Create new person.
  function createPerson(event) {
    event.preventDefault()
    setPersonCreateModal(null)
    api.createPerson(event.target[0].value)
      .then(newPersonID => api.getPeople()
      .then(newPeople => {
        setPeople(newPeople)
        const editPerson = newPeople.find(f => f.id == newPersonID)
        openPersonEditor(editPerson)
      }))
  }

  // Delete given person.
  function deletePerson(event) {
    event.preventDefault()
    setPersonDeleteModal(null)
    api.deletePerson(event.target[0].value)
      .then(() => api.getPeople()
      .then(newPeople => setPeople(newPeople)))
  }

  // Open editor modal + set all other needed states.
  function openPersonEditor(person) {
    setPersonEditModal(person)
    setPersonImage(person.image)
    setPersonSocials(person.socials)
  }

  return (
    <section id="people-sec">
      <header>
        <h3>People</h3>
        <button onClick={() => setPersonCreateModal(true)} className="create-button button">Add Person</button>
      </header>
      <div id="people-list">
        { people.map(person => {
          return (
            <div className="person-item" key={person.id}>
              <img src={person.image} alt="Profile image" />
              <h4>{person.name}</h4>
              <p>{person.bio}</p>
              <p>{person.socials.length} Socials</p>
              <button onClick={() => openPersonEditor(person)} className="edit-button button"><Icons name="edit" />Edit</button>
              <button onClick={() => setPersonDeleteModal(person)} className="delete-button button"><Icons name="delete" />Delete</button>
            </div>
          )
        })}
      </div>

      {/* Edit person modal */}
      { personEditModal &&
        <>
          <div className="modal-container">
            <div id="person-edit-modal" className="modal modal-wide">
              <h4>Edit Person Info</h4>
              <form onSubmit={editPerson}>
                <div className="colum">
                  <input id="person-edit-id" type="hidden" value={personEditModal.id} />
                  <label htmlFor="person-edit-name">Full Name</label>
                  <input id="person-edit-name" type="text" defaultValue={personEditModal.name} />
                  <label htmlFor="person-edit-bio">Person Bio</label>
                  <textarea id="person-edit-bio" defaultValue={personEditModal.bio}></textarea>
                  <div className="image-select">
                    <div>
                      <label htmlFor="person-edit-image">Profile Picture</label>
                      <input type="file" accept="image/*" onChange={(e) => cropImage(e.target.files[0]).then(data => setPersonImage(data))} />
                    </div>
                    <img src={personImage} alt="Image" />
                  </div>
                </div>
                <div className="colum">
                  <div className="side-by-side">
                    <div>
                      <label htmlFor="person-edit-role">Club Role</label>
                      <select id="person-edit-role" defaultValue={personEditModal.role}>
                        { roles.map((role, index) => {
                          return (
                            <option value={role.name} key={role.name}>{role.name}</option>
                          )
                        })}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="person-edit-onteam">On Team Page</label>
                      <select id="person-edit-onteam" defaultValue={personEditModal.onteam}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </select>
                    </div>
                  </div>
                  <label>Socials</label>
                  <div className="socials-container">
                    { socials.map((social, index) => {
                      return (
                        <div className="item" key={`${index}`}>
                          { personEditModal.socials.find(f => f.name == social.name) &&
                            <input type="text" placeholder="(URL Here)" defaultValue={personEditModal.socials.find(f => f.name == social.name).link} />
                          }
                          { !personEditModal.socials.find(f => f.name == social.name) &&
                            <input type="text" placeholder="(URL Here)" defaultValue="" />
                          }
                          <div className="social">
                            <img src={social.image} alt="" />
                            <span>{social.name}</span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <button type="button" onClick={() => setPersonEditModal(null)} className="button-close">Close</button>
                <button type="submit">Save Changes</button>
              </form>
            </div>
          </div>
        </>
      }

      {/* Create person modal */}
      { personCreateModal &&
        <div className="modal-container">
          <div id="person-create-modal" className="modal">
            <h4>Create New Person</h4>
            <form onSubmit={createPerson}>
              <label htmlFor="person-create-name">Person Name</label>
              <input id="person-create-name" type="text" />
              <button type="submit">Create</button>
            </form>
            <button onClick={() => setPersonCreateModal(null)} className="button-close">Close</button>
          </div>
        </div>
      }

      {/* Delete person modal */}
      { personDeleteModal &&
        <div className="modal-container">
          <div id="person-delete-modal" className="modal">
            <h4>Delete Person</h4>
            <p>Are you sure you want to permanently delete this person?</p>
            <form onSubmit={deletePerson}>
              <input id="person-delete-id" type="hidden" value={personDeleteModal.id} />
              <button className="button-delete">Delete</button>
            </form>
            <button onClick={() => setPersonDeleteModal(null)} className="button-close">Close</button>
          </div>
        </div>
      }
    </section>
  )
}