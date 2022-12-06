// Import our CSS and any other files we need.
import '/styles/globals.scss'
import '/styles/Home.scss'
import '/styles/Projects.scss'
import '/styles/Team.scss'
import '/styles/Contacts.scss'
import '/styles/People.scss'
import '/styles/Admin.scss'
import '/styles/Login.scss'
import '/styles/404.scss'

import Head from 'next/head'

// Main app function.
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>codcsclub.com</title>
        <link rel="icon" href="/CSLogo.png" />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta content="codcsclub.com" property="og:title" />
        <meta content="The official website for the College of Dupage Computer Science Club." property="og:description" />
        <meta content="/CSLogo.png" property="og:image" />
        <meta content="#00ff6e" data-react-helmet="true" name="theme-color" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}