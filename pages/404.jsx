// Import everything we need.
import HeadMeta from '/components/HeadMeta'
import Navbar from '/components/Navbar'
import Footer from '/components/Footer'

// 404 "page not found" page.
export default function PageNotFound() {
  return (
    <>
      <HeadMeta title="404 Page not Found" />
      <Navbar />
      
      <div id="pagenotfound">
        <h2>404</h2>
        <h3>Sorry, Page not Found.</h3>
        <img src="https://media.tenor.com/vT3_OXdG3soAAAAC/family-guy.gif" alt="" />
      </div>

      <Footer />
    </>
  )
}