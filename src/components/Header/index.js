// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="nav">
    <div className="logo">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="waveImg"
      />
      <h1>Wave</h1>
    </div>
    <ul className="lists">
      <li>
        <Link to="/" className="navLink">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="navLink">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="navLink">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
