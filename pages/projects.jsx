// Import everything we need.
import HeadMeta from '/components/HeadMeta'
import Navbar from '/components/Navbar'
import Banner from '/components/Banner'
import Footer from '/components/Footer'
import getProjectsFull from '/functions/db/getProjectsFull'

import Image from 'next/image'
import Link from 'next/link'

// Fetch projects server-side, then pass as a prop.
export async function getStaticProps() {
  const projects = await getProjectsFull()
  return {
    props: { projects },
    revalidate: 10 // 10 seconds
  }
}

// Projects page.
export default function Projects({ projects }) {
  return (
    <>
      <HeadMeta title="Projects" />
      <Navbar selectedPage="Projects" />
      <Banner
        image = "bg-projects.jpg"
        title="Projects"
        subtitle="All of our projects!"
      />
      
      <main id="projects">
        <div id="project-list">
          { projects && projects.map(project => {
            return (
              <div className="project" key={project.id}>
                <div className="left">
                  <a href={project.visit}>{project.name}</a>
                  <p>{project.description}</p>
                  <div className="contributors">
                    <span>{project.contributors.length} Contributors:</span>
                    { project.contributors.map(person => {
                      return (
                        <Link href={`/people/${person.id}`} key={person.id}>
                          <a>
                            <Image src={person.image} alt="" width="20" height="20" />
                          </a>
                        </Link>
                      )
                    })}
                  </div>
                  <div className="languages">
                    { project.tags.map(tag => {
                      return (
                        <div className="bubble" key={tag.name}>
                          <Image src={tag.image} alt="" width="18" height="18" />
                          <span>{tag.name}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className="right">
                  <Image src={project.image} alt="Project logo image" width="100" height="100" />
                  <a href={project.repository}>Open in GitHub</a>
                </div>
              </div>
            )
          })}
        </div>
      </main>

      <Footer />
    </>
  )
}