// Import everything we need.
import Navbar from '/components/Navbar'
import Banner from '/components/Banner'
import Footer from '/components/Footer'

// Contacts page.
export default function Contacts() {
  return (
    <>
      <Navbar selectedPage="Contacts" />
      <Banner
        image = "/contactsBanner.jpg"
        title="Contact Us"
        subtitle="Subtitle"
      />


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