// Import everything we need.
import Navbar from '/components/Navbar'
import Footer from '/components/Footer'
import AdminPeopleSection from '/components/AdminPeopleSection'
import AdminProjectsSection from '/components/AdminProjectsSection'
import api from '/functions/api'

import { useState, useEffect } from 'react'

// Admin Panel page
export default function Admin() {
  const [section, setSection] = useState('People')
  const [people, setPeople] = useState([])
  const [projects, setProjects] = useState([])

  // Fetch needed data.
  useEffect(() => {
    api.getPeople()
      .then(data => setPeople(data))
    api.getProjects()
      .then(data => setProjects(data))
  }, [])

  // Close open modal if you press ESCAPE.
  // useEffect(() => {
  //   document.addEventListener("keydown", e => {
  //     if (e.key == "Escape") closeModals()
  //   })
  // }, [])

  // Disable body scrolling when a modal is open.
  useEffect(() => {
    const modal = document.querySelector('.modal-container')
    if (modal) document.body.style.position = 'fixed'
    else document.body.style.position = 'static'
  }, [])

  return (
    <>
      <Navbar />
      
      <div id="admin">
        <nav>
          <h2>Admin Sections</h2>
          <button className={section == 'People' ? 'nav-selected' : ''} onClick={() => setSection('People')}>People</button>
          <button className={section == 'Projects' ? 'nav-selected' : ''} onClick={() => setSection('Projects')}>Projects</button>
          <button className={section == 'Other' ? 'nav-selected' : ''} onClick={() => setSection('Other')}>Other</button>
          <a href="/api/logout" id="logout">Logout</a>
        </nav>

        { section == 'People' &&
          <AdminPeopleSection
            people={people}
            setPeople={setPeople}
          />
        }

        { section == 'Projects' &&
          <AdminProjectsSection
            projects={projects}
            setProjects={setProjects}
            people={people}
          />
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