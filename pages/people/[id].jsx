// Import everything we need.
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
  return { paths, fallback: false }
}

// Return all the given person's info as a prop,
// so we can use it in the People() function.
export async function getStaticProps(context) {
  const result = await fetch(`${config.host}/api/getPeopleFull`)
  const people = await result.json()
  const person = people.find(f => f.id == context.params.id)
  return { props: { person } }
}

// All the possible social medias people will have.
const socials = {
  github: { name: "GitHub", icon: "/github.png" },
  linkedin: { name: "LinkedIn", icon: "/linkedin.png" },
  twiter: { name: "Twiter", icon: "/twiter.png" }
}

// People's template page
function People({ person }) {
  return (
    <>
      <Navbar />
      
      <div id="people">
        <img id="profile-image" src={person.image} alt="Profile image of person" />
        <div id="right">
          <h2>{person.name}</h2>
          <p>{person.bio}</p>
          {
            person.socials.map(social => {
              return (
                <div class="social-item">
                  <img src={social.image} alt="Social icon" />
                  <a href={social.link}>{social.name}</a>
                </div>
              )
            })
          }
        </div>
      </div>

      <Footer />
    </>
  )
}

// Export the page.
export default People