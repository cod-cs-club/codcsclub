import Image from 'next/image'
import Link from 'next/link'

// Global Footer component.
export default function Footer() {
  return (
    <footer id="footer">
      <div className="row">
        <div className="column">
          <h6>CONTACT US</h6>
          <ul>
            <li>
              <Image src="/icons/discord.png" alt="The discord logo" width="24" height="24" />
              <a href="https://discord.gg/uzBEgApK9K" className="btn">Join Discord</a>
            </li>
            <li>
              <Image src="/icons/github.png" alt="The github logo" width="24" height="24" />
              <a href="https://github.com/cod-cs-club" className="btn">Visit Github</a>
            </li>
            <li>
              <Image src="/icons/email.png" alt="The email logo" width="24" height="24" />
              <a href="mailto:stovanjovsksid@dupage.edu" className="btn">stovanjovsksid@dupage.edu</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <h6>QUICK LINKS</h6>
          <ul>
            <li><Link href="/"><a>Home</a></Link></li> 
            <li><Link href="/projects"><a>Projects</a></Link></li> 
            <li><Link href="/team"><a>Team</a></Link></li> 
            <li><Link href="/admin"><a>Admin Panel</a></Link></li> 
          </ul> 
        </div>
      </div>
      <div className="bottom">
        <Image src="/CSLogoWhite.png" alt="Website logo" width="30" height="30" />
        <p>&copy; Website created by the College of Dupage Computer Science Club</p>
      </div>
    </footer>
  )
}