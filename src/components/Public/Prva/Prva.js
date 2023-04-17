import React from 'react'
//import './Prva.css';
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Login } from '../Login/Login';


export const Prva = () => {
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

      <h1>Prva strana</h1>

    </>
  )
}
