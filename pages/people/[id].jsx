// Import everything we need.
import HeadMeta from '/components/HeadMeta'
import Navbar from '/components/Navbar'
import Footer from '/components/Footer'
import config from '/config.json'

// Return a list of all the possible paths.
// i.e: /people/(Every possible person's name)
// This is so Next.js can pre-render the page.
export async function getStaticPaths() {
  const result = await fetch(`${config.host}/api/getPeople`)
  const people = await result.json()
  const paths = people.map(person => {
    return { params: { id: `${person.id}` } }
  })
  // fallback: 'blocking' will server-render
  // page on-demand if the path doesn't exist.
  return { paths, fallback: 'blocking' }
}

// Return all the given person's info as a prop,
// so we can use it in the People() function.
export async function getStaticProps(context) {
  const result = await fetch(`${config.host}/api/getPersonFull/${context.params.id}`)
  const person = await result.json()
  return {
    props: { person },
    revalidate: 10 // 10 seconds
  }
}

// People's template page.
export default function People({ person }) {
  return (
    <>
      <HeadMeta title={person.name} />
      <Navbar />
      
      <div id="people" className={person.name}>
        <div id="card">
          <div id="left">
            <img id="profile-image" src={person.image} alt="Profile image of person" />
            <div id="socials">
              { person.socials.map(social => {
                return (
                  <div className="social-item">
                    <img src={social.image} alt="Social icon" />
                    <a href={social.link}>{social.name}</a>
                  </div>
                )
              })}
            </div>
          </div>
          <div id="right">
            <div id="top">
              <h2>{person.name}</h2>
              <span className={`role-${person.role}`}>{person.role}</span>
            </div>
            <p id="bio">{person.bio}</p>
            <p id="contribute">{person.name.split(' ')[0]} has contributed to {person.projects.length} project(s):</p>
            <div id="projects-list">
              { person.projects.map(project => {
                return (
                  <div className="project">
                    <img src={project.image} alt="" />
                    <span>{project.name}</span>
                    <p>{project.note}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}