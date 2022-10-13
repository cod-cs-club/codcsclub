// Import everything we need.
import Navbar from '/components/Navbar'
import people from '/data/people.json'
import getPersonInfo from '/functions/getPersonInfo'

// Return a list of all the possible paths.
// i.e: /people/(Every possible person's name)
// This is so Next.js can pre-render the page.
export async function getStaticPaths() {
  const paths = people.map(person => {
    return { params: { name: person.name } }
  })
  return { paths, fallback: false }
}

// Return all the given person's info as a prop,
// so we can use it in the People() function.
export async function getStaticProps(context) {
  const person = getPersonInfo(context.params.name)
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
            Object.keys(person.socials).map(item => {
              if (!socials[item]) return
              return (
                <div class="social-item">
                  <img src={socials[item].icon} alt="Social icon" />
                  <a href={person.socials[item]}>{socials[item].name}</a>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

// Export the page.
export default People