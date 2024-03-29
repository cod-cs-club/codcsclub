// Import everything we need.
import HeadMeta from '/components/HeadMeta'
import Navbar from '/components/Navbar'
import Footer from '/components/Footer'
import AdminPeopleSection from '/components/AdminPeopleSection'
import AdminProjectsSection from '/components/AdminProjectsSection'
import Icons from '/components/CommonSVGs'
import api from '/functions/api'

import Link from 'next/link'
import { useState, useEffect } from 'react'

// Admin Panel page.
export default function Admin() {
  const [section, setSection] = useState('People')
  const [people, setPeople] = useState(null)
  const [projects, setProjects] = useState(null)

  // Fetch needed data.
  useEffect(() => {
    api.getPeople()
      .then(data => setPeople(data))
    api.getProjects()
      .then(data => setProjects(data))
  }, [])

  // Disable body scrolling when a modal is open.
  useEffect(() => {
    const modal = document.querySelector('.modal-container')
    if (modal) document.body.style.position = 'fixed'
    else document.body.style.position = 'static'
  }, [])

  return (
    <>
      <HeadMeta title="Admin Panel" />
      <Navbar />
      
      <div id="admin">
        <nav>
          <h2>Admin Sections</h2>
          <button className={section == 'People' ? 'nav-selected' : ''} onClick={() => setSection('People')}>People</button>
          <button className={section == 'Projects' ? 'nav-selected' : ''} onClick={() => setSection('Projects')}>Projects</button>
          <button className={section == 'Other' ? 'nav-selected' : ''} onClick={() => setSection('Other')}>Other</button>
          <Link href="/api/logout">
            <a id="logout">Logout</a>
          </Link>
        </nav>

        { section == 'People' && !people && <Icons name="loading" /> }
        { section == 'People' && people?.length >= 0 &&
          <AdminPeopleSection
            people={people}
            setPeople={setPeople}
          />
        }

        { section == 'Projects' && !projects && <Icons name="loading" /> }
        { section == 'Projects' && projects?.length >= 0 &&
          <AdminProjectsSection
            projects={projects}
            setProjects={setProjects}
            people={people}
          />
        }

        { section == 'Other' &&
          <section id="other-sec">
            <h3>Other</h3>
            <p>This section is currently unused, but can be utilized in the future.</p>
          </section>
        }
      </div>

      <Footer />
    </>
  )
}