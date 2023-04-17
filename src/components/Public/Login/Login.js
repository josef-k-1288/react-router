import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


export const Login = () => {
  return (
    <>
        <div className="search-container">
          <Link to="/">Promeni takmičenje</Link>
          <Link to='/signin'>
          <i className="ikonica"><FontAwesomeIcon icon={faUser} /></i>
          </Link>
        </div>
    </>
  )
}
