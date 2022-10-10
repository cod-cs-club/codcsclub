// Navigation bar component.
function Navbar() {
  return (
    <div id="navbar">
      <img src="/CSLogo.png" alt="Logo for the computer science club" />
      <div>
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/team">Meet The Team</a>
        <a id="beans" href="/discord"><span id="disco">Discord</span></a>

      </div>
    </div>
  )
}

// Export the component
export default Navbar