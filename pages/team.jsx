// Import everything we need.
import Navbar from '/components/Navbar'
import Banner from '/components/Banner'
import Footer from '/components/Footer'
import api from '/functions/api'

import Link from 'next/link'
import { useState, useEffect } from 'react'

// Team page.
export default function Team() {
  const [people, setPeople] = useState()

  useEffect(() => {
    api.getPeople({ fullInfo: true })
      .then(data => setPeople(data))
  }, [])

  return (
    <>
      <Navbar selectedPage="Team" />
      <Banner
        image="/TheTeam.jpg"
        title="Meet the Team"
        subtitle="Subtitle"
      />

      <main id="team">
        <div id="people-container">
          { people && people.map(person => {
            return (
              <Link href={'/people/' + person.id} key={person.id}>
                <a className="person">
                  <div className="content">
                    <div className="imgBox">
                      <img src={person.image} />
                    </div>
                    <h3>{person.name}<br></br><span class={"role role-" + person.role}>{person.role}</span></h3>
                  </div>
                  <span className="info">More Info &rarr;</span>
                </a>
              </Link>
            )
          })}
        </div>
      </main>
      
      <Footer />
    </>
  )
}