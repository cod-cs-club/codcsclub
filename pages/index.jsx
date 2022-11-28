// Import everything we need.
import Navbar from '/components/Navbar'
import Banner from '/components/Banner'
import Footer from '/components/Footer'
import GallaryImage from '/components/GallaryImage'
import Question from '/components/Question'
import ScrollToTop from '/components/ScrollToTop'

import Link from 'next/link'

// Home page.
export default function Home() {
  return (
    <>
      <Navbar selectedPage="Home" />
      <Banner
       /* image = "https://source.unsplash.com/10000x10000?code"   ///shows error message but the image looks nice, possible final resort pic */
       image = "bg-home2.png"
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
              <img src="/computer-solid.svg" />
              <h3>10+</h3>
              <p className="text-secondary">Projects</p>
            </div>
            <div>
              <img src="/users-solid.svg" />
              <h3>350+</h3>
              <p className="text-secondary">Members</p>
            </div>
            <div>
              <img src="/server-solid.svg" />
              <h3>$5,020,893</h3>
              <p className="text-secondary">in bank account</p>
            </div>
          </div>
        </div>

        { /* Image Gallery */}
        <div className="gallery">
          <div className="gallery-text">
            <h2>Image Gallery</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Mollis nunc sed id semper risus. Elementum tempus egestas sed sed risus. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque.</p>
          </div>
          <div className="img-container">
            <GallaryImage image="Team 2022.jpg" />
            <GallaryImage image="bg-home2.png" />
          </div>
        </div>

        {/* Languages Used */}
        <div className="languages">
          <h2>Languages Used</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="lang-container">
            <div className="card">
              <h4>Next.js</h4>
              <img src="/nextjs.png" />
            </div>
            <div className="card">
              <h4>HTML</h4>
              <img src="/html.png" />
            </div>
            <div className="card">
              <h4>CSS</h4>
              <img src="css.png" />
            </div>
            <div className="card">
              <h4>TensorFlow</h4>
              <img src="/tensorflow.png" />
            </div>
            <div className="card">
              <h4>Node.js</h4>
              <img src="/node.png" />
            </div>
            <div className="card">
              <h4>Python</h4>
              <img src="/python.png" />
            </div>
          </div>
        </div>
        <div className="glassWindow"></div>

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