// Import our CSS and any other files we need.
import '/styles/globals.css'
import '/styles/Home.css'
import '/styles/Projects.css'
import '/styles/Team.css'
import '/styles/Discord.css'
import '/styles/People.css'
import '/styles/Admin.css'

// Main app function.
function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// Export our app.
export default App