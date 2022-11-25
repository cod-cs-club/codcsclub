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
              <Image src="/DiscordLogo.png" alt="The discord logo" width="30" height="30" />
              <a href="https://discord.gg/uzBEgApK9K" className="btn">DISCORD</a>
            </li>
            <li>
              <Image src="/github.png" alt="The github logo" width="30" height="30" />
              <a href="https://github.com/cod-cs-club" className="btn">GITHUB</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <h6>QUICK LINKS</h6>
          <ul>
            <li><Link href="/"><a>HOME</a></Link></li> 
            <li><Link href="/projects"><a>PROJECTS</a></Link></li> 
            <li><Link href="/team"><a>TEAM</a></Link></li> 
            <li><Link href="/admin"><a>ADMIN PANEL</a></Link></li> 
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