import React from 'react'
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Login } from '../Login/Login';

export const Treca = () => {
  return (
    <>
      <nav className="navbar">
        <Link to='/'>
          <div className="logo-container">
            <img className="logo" src="./logo.png" alt="Logo" />
          </div>
        </Link>
        <Login />
      </nav>


      <h1>Treca strana</h1>
    </>
  )
}
