// Import everything we need.
import HeadMeta from '/components/HeadMeta'
import Navbar from '/components/Navbar'
import Banner from '/components/Banner'
import Footer from '/components/Footer'
import GalleryImage from '/components/GalleryImage'
import Question from '/components/Question'
import ScrollToTop from '/components/ScrollToTop'
import Icons from '/components/CommonSVGs'
import config from '/config.json'

import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

// Fetch projects server-side, then pass as a prop.
export async function getStaticProps() {
  const result1 = await fetch(`${config.host}/api/getProjects`)
  const projects = await result1.json()
  const result2 = await fetch(`${config.host}/api/getPeople`)
  const people = await result2.json()
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Mollis nunc sed id semper risus. Elementum tempus egestas sed sed risus. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit.</p>
            <Link href="/projects">
              <a className="button">See Our Projects</a>
            </Link>
          </div>
          <iframe id="intro-vid" src="https://www.youtube.com/embed/LZ-f2hMaJKs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;picture-in-picture" allowfullscreen />
        </div>

        { /* Info cards */ }
        <div className="info">
          <div className="info-text">
            <h2>About Our Club</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Mollis nunc sed id semper risus. Elementum tempus egestas sed sed risus. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque.</p>
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
          <p>We are real people! Here are some photos we've taken together.</p>
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
          <p>Here are some of the languages/technologies we've used in our projects!</p>
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
            question="Question 1: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, cumque."
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit repellendus, nihil eligendi fugiat atque inventore nemo soluta assumenda ipsam."
          />
          <Question
            question="Question 2: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, cumque."
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit repellendus, nihil eligendi fugiat atque inventore nemo soluta assumenda ipsam."
          />
        </div>
      </main>

      <ScrollToTop />
      <Footer />
    </>
  )
}