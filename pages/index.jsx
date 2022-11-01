// Import any custom components we need.
import Navbar from '/components/Navbar'
import Banner from '/components/Banner'
import Footer from '/components/Footer'
import Accordion from '/components/Accordian'
import Link from 'next/link'

import { useState } from 'react'

// Home page
function Home() {

  return (
    <>
      <Navbar selectedPage="Home" />
      <Banner
        image="/codBackground2.jpg"
        title="Computer Science Club"
        subtitle="The best club on Earth!"
      />
      
      <div id="home">
        { /* Showcase */ }
        <div class="showcase">
          <div class="showcase-text">
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
            { /* Button below */ }
            <Link href={"/projects"}><a class="button">See Our Projects</a></Link>
          </div>
          <iframe id="intro-vid" src="https://www.youtube.com/embed/LZ-f2hMaJKs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;picture-in-picture" allowfullscreen />
        </div>

        { /* Info cards */ }

        <div class="info">
          <div class="info-text">
            <h2>About Our Club</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Mollis nunc sed id semper risus. Elementum tempus egestas sed sed risus. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque.</p>
          </div>
          <div class="info-stats">
            <div>
              <img src="/computer-solid.svg" />
              <h3>10+</h3>
              <p class="text-secondary">Projects</p>
            </div>
            <div>
              <img src="/users-solid.svg" />
              <h3>350+</h3>
              <p class="text-secondary">Members</p>
            </div>
            <div>
              <img src="/server-solid.svg" />
              <h3>$5,020,893</h3>
              <p class="text-secondary">in bank account</p>
            </div>
          </div>
        </div>

        { /* Gallery */}

        <div class="gallery">
          <div class="gallery-text">
            <h2>Image Gallery</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Mollis nunc sed id semper risus. Elementum tempus egestas sed sed risus. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque.</p>
          </div>
          <div class='container'>
            <div class='box'>
              <img src='Session 1.jpg' />
            </div>
            <div class='box'>
              <img src='Team 2022.jpg' />
            </div>  
            <div class='box'>
              <img src='Session 2.jpg' />
            </div>
            <div class='box'>
              <img src='Session 1.jpg' />
            </div>
            <div class='box'>
              <img src='Team 2022.jpg' />
            </div>  
            <div class='box'>
              <img src='Session 2.jpg' />
            </div>
            <div class='box'>
              <img src='Session 1.jpg' />
            </div>
            <div class='box'>
              <img src='Team 2022.jpg' />
            </div>  
            <div class='box'>
              <img src='Session 2.jpg' />
            </div>
          </div>
        </div>
          

        {/* Languages Used */}

        <div class="languages">
          <h2>Languages Used</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div class="lang-container">
            <div class="card">
              <h4>Next.js</h4>
              <img src="/nextjs.png" />
            </div>
            <div class="card">
              <h4>HTML</h4>
              <img src="/html.png" />
            </div>
            <div class="card">
              <h4>CSS</h4>
              <img src="css.png" />
            </div>
            <div class="card">
              <h4>TensorFlow</h4>
              <img src="/tensorflow.png" />
            </div>
            <div class="card">
              <h4>Node.js</h4>
              <img src="/node.png" />
            </div>
            <div class="card">
              <h4>Python</h4>
              <img src="/python.png" />
            </div>
          </div>
        </div>

        {/* FAQ */}

        <Accordion />

      </div>

      <Footer />
    </>
  )
}

// Export the page.
export default Home