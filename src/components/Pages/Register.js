import React from 'react'
import './Register.css'

const Register = () => {
  return (
    <>
    <h1>Registration Page</h1>
    <main className='form-content'>
      <h1></h1>
      <form action="" method="post">
      <label> First Name - </label>
      <input type="textbox"/> <br/>
      <label> Last  - </label>
      <input type="textbox"/><br/>
      <label> Phone - </label>
      <input type="textbox"/> <br/>
      <label> Gender - </label> 
      <select>
        <option value="">Choose your gender</option>
        <option value="">Male</option>
        <option value="">Female</option>
        <option value="">Prefer not to say</option>
      </select> <br/>  
      <label> Country - </label>
      <input type="textbox"/> <br/>
      <label> State/Province - </label>
      <input type="textbox"/> <br/>
      <label> Username - </label>
      <input type="textbox"/> <br/>
      <label> Password - </label>
      <input type="textbox"/> <br/>
      <label> Confirm Password - </label>
      <input type="textbox"/> <br/>
      <label><input type="submit"/></label>
    </form>
    </main>
    </>
  )
}

export default Register
