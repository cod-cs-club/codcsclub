// Import any custom components we need.
import Navbar from '../components/Navbar.js'

// Home page
function Home() {
  return (
    <>
      <Navbar />
      <div class="home">
        <div class="showcase">
          <div class="left">
            {/* Header below */}
            <h1>Welcome to the Computer Science Club!</h1> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Mollis nunc sed id semper risus. Elementum tempus egestas sed sed risus. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit.</p>
            {/* Button below */}
            <a href="" target="_blank" class="btn">See Our Projects</a> 
          </div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/LZ-f2hMaJKs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </>
  )
}

// Export the page.
export default Home