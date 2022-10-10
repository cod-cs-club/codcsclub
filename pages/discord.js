// Import any custom components we need
import Navbar from '/components/Navbar.js'

// Discord page
function Discord() {
  return (
    <>
      <Navbar />
      <div id="discord">
        <center><img src="/DiscordLogo.png" alt="The discord logo" id="discordimg"/></center>
        <center><a href="https://discord.gg/uzBEgApK9K" class="btn">Join the Discord!</a></center>
      </div>
    </>
  )
}

// Export the page.
export default Discord