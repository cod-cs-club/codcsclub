// Global Footer component.
function Footer() {
  return (
    <footer id="footer">
       <div class= "container">
           <div class= "row">
               <div class= "footer-col">
                  <h3>CONTACT US</h3>
                  <ul>
                        <li><img src="/DiscordLogo.png" alt="The discord logo" id="discordimg"/><a href="https://discord.gg/uzBEgApK9K" class="btn">DISCORD</a></li>
                        <li><img src="/github.png" alt="The github logo" id="githubimg"/><a href="https://github.com/cod-cs-club" class="btn">GITHUB</a></li>
                  </ul>
                </div>
                <div class = "footer-col">
                        <h3>ABOUT US</h3>
                        <ul>
                              <li><a href="#" >PROJECTS </a></li>
                              <li><a href="#"> GALLERY </a></li>
                        </ul> 
                 </div>
            </div>
            <div class = "footer-bottom">
                  <p><img src="/CSLogoWhite.png" alt="Website logo" />  &copy; Website created by the College of Dupage Computer Science Club</p>
            </div>
          </div>
                   
    </footer>
  )
}

// Export the component.
export default Footer