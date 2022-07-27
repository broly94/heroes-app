import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

  const navigate = useNavigate()

  const login = () => {
    navigate('/', {
      replace: true
    })
  }

  return (
    <>
      <div className="container p-5">
        <h2>Login</h2>
        <hr />
        <button
          className='btn btn-primary'
          onClick={login}
        >
          Login
        </button>
      </div>
    </>
  )
}
