// Import our CSS and any other files we need.
import '../styles/globals.css'
import '../styles/Home.css'
import '../styles/Projects.css'
import '../styles/Team.css'
import '../styles/Discord.css'
import '/styles/People.css'
import '/styles/Admin.css'

import '/functions/database.js'

// Main app function.
// For now, we don't need to worry about this.
function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// Export our app.
export default App