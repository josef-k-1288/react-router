import { Link } from 'react-router-dom'
import './Navbar.css';



export const Navbar = () => {
  return (
    
    <nav className="navbar">
      <Link to='/'>
        <div className="logo-container">
          <img className="logo" src="./logo.png" alt="Logo" />
        </div>
      </Link>
        <div className="search-container">
          <input className="search-input" type="text" placeholder="Pronađi takmičenje" />
          <button className="search-button">Pretraži</button>
        </div>
      </nav>
  )
}
