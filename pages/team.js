// Import any custom components we need.
import Navbar from '/components/Navbar.js'
import people from '/data/people.json'


// Meet the Team page
function Team() {
  return (
    <>
      <Navbar />
      <div id="team">
      <section class="jumbotron">
          <div class="container">
            <div class="jumbotron-text">
              <h1>Meet The Team</h1>
            </div>
          </div>
        </section>

        { /*About the team*/ }
      <div class = "showcase">
        <div class = "container">
          <div class = "showcase-box grid">
            <div class = "left">
              <h1>About the Team</h1>
            </div>
          </div>
        </div>
        
      </div>
      </div>
      
    </>
  )
}


// Export the page.
export default Team