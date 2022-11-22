// Import any custom components we need
import Navbar from '/components/Navbar'
import Footer from '/components/Footer'

// Contacts page
function Contacts() {
  return (
    <>
      <Navbar selectedPage="Contacts" />

      <div id="contacts">
        <div class="container">
          <div>
            <center><img src="/DiscordLogo.png" alt="The discord logo" id="discordimg"/></center>
            <center><a href="https://discord.gg/uzBEgApK9K" class="btn">Join the Discord!</a></center>
          </div>

          <div>
            <center><img src="/github.png" alt="The github logo" id="githubimg"/></center>
            <center><a href="https://github.com/cod-cs-club" class="btn">Join the Github!</a></center>
          </div>
          
        </div>
        
      </div>
      
      <Footer />
    </>
  )
}

// Export the page.
export default Contacts