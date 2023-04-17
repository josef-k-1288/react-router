import React from 'react';
import { Navigate, Link } from 'react-router-dom';
//import { Login } from './Login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Profile({ authorized }) {

    // proverava da li je korisnik autorizovan
    //   if (!authorized) {
    //     return <Navigate to='/signin' />;
    //   }
    if (localStorage.getItem('authorized') !== 'true') {
        return <Navigate to='/signin' />;
    }


    return (
        <>
            <nav className="navbar">
                <Link to='/'>
                    <div className="logo-container">
                        <img className="logo" src="./logo.png" alt="Logo" />
                    </div>
                </Link>
                <i className="ikonica" onClick={() => {
  localStorage.setItem('authorized', 'false');
  window.location.reload();
}}><FontAwesomeIcon icon={faUser} /></i>
            </nav>
            <div>
                <h1>Welcome to profile page</h1>
            </div>
        </>
    );
}

export default Profile;
