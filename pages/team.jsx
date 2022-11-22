// Import any custom components we need.
import Navbar from '/components/Navbar'
import Banner from '/components/Banner'
import Footer from '/components/Footer'
import api from '/functions/api'

import Link from 'next/link'
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
      </div>
      
      {/* FAILED EXPERIMENT (SEE DESIGN 3 IN CSS) */}
      {/* <div id="team">
        <div id="people-container">
          { people && people.map(person => {
            return (
              <div className="person">
                <div className="lines"></div>
                <div className="imgBx">
                <img src={person.image} />
                </div>
                <div className="content">
                  <div className="details">
                    <h2>{person.name}<br></br><span class={"role role-" + person.role}>{person.role}</span></h2>
                    <div className="data">
                      <h3>2<br/><span>Projects</span></h3>
                      <h3>3<br/><span>Semester</span></h3>
                      <h3>Status<br/><span>Active</span></h3>
                    </div>
                    <Link href={'/people/' + person.id} key={person.id}>
                      <button>More Info</button>
                      </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div> */}
      
      <Footer />
    </>
  )
}


// Export the page.
export default Team