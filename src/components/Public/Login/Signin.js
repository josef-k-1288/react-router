import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Login } from '../Login/Login';
import './Signin.css';

export const Signin = ({ setAuthorized }) => {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    console.log('radi');

    if (username === 'lemi' && password === '123') {
      // Postavi authorized flag u state-u App komponente
      setAuthorized(true);

      localStorage.setItem('authorized', true);

      // Osveži stranicu da bi se izmena na localStorage-u ažurirala
      //window.location.reload();

      // Preusmeri korisnika na stranicu profila
      return navigate('/profile');
    } else {
      // Prikazi poruku o pogresnom korisnickom imenu ili lozinci
      alert('Pogresno korisnicko ime ili lozinka!');
    }
  }




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
      

      <div className="container">
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" />
                <button type="submit">Login</button>
            </form>
        </div>



    </>
  )
}
