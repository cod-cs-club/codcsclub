// Import any custom components we need.
import Navbar from '/components/Navbar'
import Banner from '/components/Banner'
import Footer from '/components/Footer'
import api from '/functions/api'

import { useState, useEffect } from 'react'

// Meet the Team page
function Team() {
  const [people, setPeople] = useState()

  useEffect(() => {
    api.getPeople({ fullInfo: true })
      .then(data => setPeople(data))
  }, [])

  return (
    <>
      <Navbar selectedPage="Meet the Team" />
      <Banner
        image="/TheTeam.jpg"
        title="Meet the Team"
        subtitle="Subtitle"
      />

      <div id="team">
        <div id="people-container">
          { people && people.map(person => {
            return (
              <a class="person" href={'/people/' + person.id}>
                <img src={person.image} />
                <h3>{person.name}</h3>
                <span class={"role role-" + person.role}>{person.role}</span>
                <span class="info">More Info &rarr;</span>
              </a>
            )
          })}
        </div>
      </div>
      
      <Footer />
    </>
  )
}


// Export the page.
export default Team