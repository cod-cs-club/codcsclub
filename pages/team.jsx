// Import everything we need.
import HeadMeta from '/components/HeadMeta'
import Navbar from '/components/Navbar'
import Banner from '/components/Banner'
import Footer from '/components/Footer'
import Icons from '/components/CommonSVGs'
import api from '/functions/api'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

// Team page.
export default function Team() {
  const [people, setPeople] = useState(null)

  useEffect(() => {
    api.getPeople()
      .then(data => setPeople(data))
  }, [])

  return (
    <>
      <HeadMeta title="Team" />
      <Navbar selectedPage="Team" />
      <Banner
        image="/bg-team.jpg"
        title="Meet the Team"
        subtitle="The People Who Make it Happen!"
      />

      <main id="team">
        <div id="people-container">
          { !people && <Icons name="loading" /> }
          { people && people.map(person => {
            return (
              <Link href={'/people/' + person.id} key={person.id}>
                <a className="person">
                  <div className="content">
                    <div className="imgBox">
                      <Image
                        src={person.image}
                        alt="Profile image"
                        layout="responsive"
                        width="150"
                        height="150"
                      />
                    </div>
                    <h3>{person.name}<br /><span className={"role role-" + person.role}>{person.role}</span></h3>
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