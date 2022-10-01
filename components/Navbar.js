// Navigation bar component.
function Navbar() {
  return (
    <div class="navbar">
      <img src="CSLogo.png" alt="Logo for the computer science club" />
      <div>
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/team">Meet The Team</a>
        <a href="/discord">Discord</a>
      </div>
    </div>
  )
}

// Export the component
export default Navbar