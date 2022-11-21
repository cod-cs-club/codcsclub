// Import everything we need.
import React, { useState, useEffect } from "react"

// Scroll to top button.
export default function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 1500) setShowTopBtn(true)
      else setShowTopBtn(false)
    })
  }, [])

  function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  
  return (
    <div id="scrollButton">
      { showTopBtn &&
        <div className="icon-position icon-style" onClick={goToTop}>
          <h1>↑</h1>
        </div>
      }
    </div>
  )
}