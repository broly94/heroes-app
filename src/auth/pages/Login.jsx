import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

export const Login = () => {

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleLogin = () => {

    login('Leonel Carro')

    const lastPath = localStorage.getItem('lastPath') || '/';

    navigate( lastPath , {
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
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </>
  )
}
