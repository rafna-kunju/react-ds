import React from 'react'
import './login.css';

function Login() {
  return (
    <>
    <div className="login-det">
    <div className='details'>
        <h1>Sign In</h1>
        <input type="text" placeholder='Enter email id'></input>
        <input type="password" placeholder='Enter password'></input>
        <button> Sign In </button>
    </div>
    </div>
    </>
  )
}

export default Login  