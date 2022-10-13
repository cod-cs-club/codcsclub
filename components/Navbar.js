import Link from 'next/link'

const pages = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Meet the Team", href: "/team" },
  { name: "Discord", href: "/discord" }
]

// Navigation bar component.
function Navbar({ selectedPage }) {
  return (
    <div id="navbar">
      <img src="/CSLogo.png" alt="Logo for the computer science club" />
      <div>
        {
          pages.map(page => {
            if (selectedPage == page.name) {
              return (
                <Link href={page.href}>
                  <a class="current-page">{page.name}</a>
                </Link>
              )
            }
            else {
              return (
                <Link href={page.href}>
                  <a>{page.name}</a>
                </Link>
              )
            }
          })
        }
      </div>
    </div>
  )
}

// Export the component
export default Navbar