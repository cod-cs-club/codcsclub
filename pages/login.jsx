// Import everything we need.
import HeadMeta from '/components/HeadMeta'
import Navbar from '/components/Navbar'

import Router from 'next/router'
import { useState } from 'react'

// Admin login page.
export default function Login() {
  const [wrongPassword, setWrongPassword] = useState(false)
  const [forgotPassword, setForgotPassword] = useState(false)

  // Send password and get success response.
  async function login(event) {
    event.preventDefault()
    const result = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: event.target[0].value })
    })
    
    const data = await result.json()
    if (data.success == true) Router.reload()
    else setWrongPassword(true)
  }
  function forgot() {
    setForgotPassword(true)
  }

  return (
    <>
      <HeadMeta title="Admin Login" />
      <Navbar />
      
      <main id="login">
        <div className="box">
          <form onSubmit={login}>
            <h2>Admin Panel Login</h2>
            <div className="inputBox">
              <input id="login-password" type="password" required="required"/>
              <label htmlFor="login-password">Password</label>
              <i></i>
            </div>
            <a onClick={forgot} className="link">Forgot Password</a>
            { wrongPassword &&
              <p>Wrong password bud</p>
            }
            { forgotPassword &&
              <p>Too bad.</p>
            }
            <button type="submit">Login</button>
          </form>
        </div>
      </main>

      {/* <Footer /> */}
    </>
  )
}