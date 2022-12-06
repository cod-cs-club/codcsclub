// Import everything we need.
import HeadMeta from '/components/HeadMeta'
import Navbar from '/components/Navbar'
import Banner from '/components/Banner'
import Footer from '/components/Footer'

import Image from 'next/image'

// Contacts page.
export default function Contacts() {
  return (
    <>
      <HeadMeta title="Contacts" />
      <Navbar selectedPage="Contacts" />
      <Banner
        image = "/bg-contacts.jpg"
        title="Contact Us"
        subtitle="Subtitle"
      />

      <main id="contacts">
        <div className="container">
          <div className="card">
            <Image src="/icons/discord.png" alt="The Discord logo" width="180" height="180" />
            <p>Join our discord to find meeting information and get started!</p>
            <a href="https://discord.gg/uzBEgApK9K">Join the Discord!</a>
          </div>

          <div className="card">
            <Image src="/icons/github.png" alt="The GitHub logo" width="180" height="180" />
            <p>Take a look at our projects in our GitHub repository!</p>
            <a href="https://github.com/cod-cs-club">Join the Github!</a>
          </div>

          <div className="card">
            <Image src="/icons/email.png" alt="The email logo" width="180" height="180" />
            <p>Get in contact with leadership here!</p>
            <div className="emails">
              <a href = "mailto:stovanjovsksid@dupage.edu">Send Email</a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  )
}