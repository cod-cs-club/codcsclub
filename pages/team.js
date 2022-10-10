// Import any custom components we need.
import Navbar from '/components/Navbar.js'

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
        <h1>Meet the Team</h1>
      </div>
    </>
  )
}

// Export the page.
export default Team