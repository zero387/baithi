import React from 'react'
import './component.css'

export default function register() {
  return (
    <>
      <form action="" method='post'>
      <input 
      placeholder='Email'
      type="text" />
      <input 
      placeholder='Passwrod'
      type="email" />
      <input 
      placeholder='Password'
      type="password" />
      <button className='register' >Register</button>
      <p>Already have account?<a href="">Login</a></p>
      <p>Or</p>
      <button className='withLogin'>Login with Facebook</button>
      <button className='withLogin' id='withgoogle'>Login with Google</button>
      </form>
    </>
  )
}
