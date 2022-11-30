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
        image = "bg-contact.jpg"
        title="Contact Us"
        subtitle="Subtitle"
      />


      <main id="contacts">
        <div class="container">
          <div class="discord">
            <center><img src="/DiscordLogo.png" alt="The discord logo" id="discordimg"/></center>
            <center><p class="p">Join our discord to find meeting information and get started!</p></center>
            <center><a href="https://discord.gg/uzBEgApK9K" class="btn">Join the Discord!</a></center>
          </div>

          <div class="github">
            <center><img src="/github.png" alt="The github logo" id="githubimg"/></center>
            <center><p class="p">Take a look at our projects in our GitHub repository!</p></center>
            <center><a href="https://github.com/cod-cs-club" class="btn">Join the Github!</a></center>
          </div>

          <div class="email">
            <center><img src="/email.png" alt="The email logo" id="emailimg"/></center>
            <center><p class="p">Get in contact with leadership here!</p></center>
              <div class="emails">
                <center><a href = "mailto: stovanjovsksid@dupage.edu" class="btn">Send Email</a></center>
              </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  )
}