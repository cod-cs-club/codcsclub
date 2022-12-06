// Import everything we need.
import HeadMeta from '/components/HeadMeta'
import Navbar from '/components/Navbar'
import Banner from '/components/Banner'
import Footer from '/components/Footer'
import config from '/config.json'

import Image from 'next/image'
import Link from 'next/link'

// Fetch people server-side, then pass as a prop.
export async function getStaticProps() {
  const result = await fetch(`${config.host}/api/getPeople`)
  const people = await result.json()
  return {
    props: { people },
    revalidate: 10 // 10 seconds
  }
}

// Team page.
export default function Team({ people }) {
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
          { people && people.map(person => {
            return (
              <Link href={'/people/' + person.id} key={person.id}>
                <a className="person">
                  <div className="content">
                    <div className="imgBox">
                      <Image src={person.image} alt="Profile image" width="150" height="150" />
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