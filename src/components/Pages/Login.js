import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <>
      <h1>Login Page</h1>
      <main  className='login-content'>
        <form>
          <label>Username:</label>
          <input type="text" required /> <br />
          <label>Password:</label>
          <input type="password" required /> <br />
          <button type="submit" >Submit</button>
        </form>
      </main>
    </>
  )
}

export default Login
