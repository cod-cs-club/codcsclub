// Import everything we need.
import Navbar from '/components/Navbar'
import Footer from '/components/Footer'

import { useState } from 'react'
import Router from 'next/router'

// Admin login page.
export default function Login() {
  const [wrongPassword, setWrongPassword] = useState(false)

  // Send password and get success response.
  async function login(event) {
    event.preventDefault()
    const result = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: event.target[0].value })
    })
    const data = await result.json()
    if (data.success == true) Router.push('/admin')
    else setWrongPassword(true)
  }

  return (
    <>
      <Navbar />
      
      <main id="login">
        <form onSubmit={login}>
          <label htmlFor="login-password">Admin Panel Login</label>
          <input id="login-oassword" type="password" />
          <button type="submit">Login</button>
          { wrongPassword &&
            <p>Wrong password bud</p>
          }
        </form>
      </main>

      <Footer />
    </>
  )
}