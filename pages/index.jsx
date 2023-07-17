// Import everything we need.
import HeadMeta from '/components/HeadMeta'
import Navbar from '/components/Navbar'
import Banner from '/components/Banner'
import Footer from '/components/Footer'
import GalleryImage from '/components/GalleryImage'
import Question from '/components/Question'
import ScrollToTop from '/components/ScrollToTop'
import Icons from '/components/CommonSVGs'
import getPeople from '/functions/db/getPeople'
import getProjects from '/functions/db/getProjects'

import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

// Fetch projects server-side, then pass as a prop.
export async function getStaticProps() {
  const projects = await getProjects()
  const people = await getPeople()
  return {
    props: {
      projectsCount: projects.length,
      peopleCount: people.length
    },
    revalidate: 10 // 10 seconds
  }
}

// Home page.
export default function Home({ projectsCount, peopleCount }) {
  return (
    <>
      <HeadMeta title="Home" />
      <Navbar selectedPage="Home" />
      <Banner
       image = "bg-home.png"
       title="Computer Science Club"
        subtitle="The best club on Earth!"
      />
      
      <main id="home">
        { /* Showcase */ }
        <div className="showcase">
          <div className="showcase-text">
            { /* Header below */ }
            <div className="wrapper">
              <h1>A Club of</h1>
              <ul className="dynamic-txts">
                <li><span>Innovation</span></li>
                <li><span>Creativity</span></li>
                <li><span>Inspiration</span></li>
                <li><span>Development</span></li>
              </ul>
            </div>
            <p>Empowering the next generation of tech leaders through hands-on, industry-standard projects</p>
            <Link href="/projects">
              <a className="button">See Our Projects</a>
            </Link>
          </div>
          <iframe id="intro-vid" src="https://www.youtube.com/watch?v=nlaqVqR1KYA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;picture-in-picture" allowfullscreen />
        </div>

        { /* Info cards */ }
        <div className="info">
          <div className="info-text">
            <h2>About Our Club</h2>
            <p>Our Computer Science Club is a student-led organization dedicated to providing members with opportunities to learn, grow, and connect in the field of computer science. We offer a range of activities and events, including guest lectures from industry professionals, workshops on cutting-edge technologies, and group projects that allow members to work on real-world problems and projects.</p>
          </div>
          <div className="info-stats">
            <div>
              <Icons name="computer" />
              <h3>{projectsCount}+</h3>
              <p className="text-secondary">Projects</p>
            </div>
            <div>
            <Icons name="members" />
              <h3>{peopleCount}+</h3>
              <p className="text-secondary">Members</p>
            </div>
          </div>
        </div>

        { /* Image Gallery */} 
        <div className="gallery">
          <h2>Image Gallery</h2>
          <p>We are real people! Here are some photos we&apos;ve taken together.</p>
          <div className="img-container">
            <GalleryImage image="/gallery/outside2022.jpg" />
            <GalleryImage image="/gallery/session1.jpg" />
            <GalleryImage image="/gallery/session2.jpg" />
            <GalleryImage image="/gallery/team1.png" />
            <GalleryImage image="/gallery/team2.png" />
          </div>
        </div>

        {/* Languages Used */}
        <div className="languages">
          <h2>Languages Used</h2>
          <p>Here are some of the languages/technologies we&apos;ve used in our projects!</p>
          <div className="lang-container">
            <div className="card"><h4>Python</h4><Image src="/icons/python.png" alt="Python" width="80" height="80" /></div>
            <div className="card"><h4>JavaScript</h4><Image src="/icons/javascript.png" alt="JavaScript" width="80" height="80" /></div>
            <div className="card"><h4>HTML</h4><Image src="/icons/html.png" alt="HTML" width="80" height="80" /></div>
            <div className="card"><h4>CSS</h4><Image src="/icons/css.png" alt="CSS" width="80" height="80" /></div>
            <div className="card"><h4>Next.js</h4><Image src="/icons/nextjs.png" alt="Next.js" width="80" height="80" /></div>
            <div className="card"><h4>Tensorflow</h4><Image src="/icons/tensorflow.png" alt="Tensorflow" width="80" height="80" /></div>
          </div>
        </div>

        {/* FAQ */}
        <div className="faq">
          <h2>Frequently Asked Questions</h2>
          <Question
            question="Question 1: Do you work on paid projects?"
            answer="Yes. Some members choose to work on paid projects as a way to generate revenue or to fund club activities, while others may prefer to focus on unpaid projects as a way to gain other experience and build skills."
          />
          <Question
            question="Question 2: Who is on the team?"
            answer="Advanced to beginner programmers. Do not be fooled, the students can provide quality above industry standard."
          />
        </div>
      </main>

      <ScrollToTop />
      <Footer />
    </>
  )
}