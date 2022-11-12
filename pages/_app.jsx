// Import our CSS and any other files we need.
import '/styles/globals.scss'
import '/styles/Home.scss'
import '/styles/Projects.scss'
import '/styles/Team.scss'
import '/styles/Contacts.scss'
import '/styles/People.scss'
import '/styles/Admin.scss'
import '/styles/404.scss'

// Main app function.
function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// Export our app.
export default App