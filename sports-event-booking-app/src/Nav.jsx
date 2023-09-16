import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
import Admin from './Admin'
import Employee from './Employee'
import './Nav.css';
export default function Nav() {
  return (
    <div>
      {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <a class="nav-link"><Link to="/Home">Home</Link></a>
            <a class="nav-link"><Link to="/Admin">Admin Login</Link></a>
            <a class="nav-link"><Link to="/Employee">Employee Login</Link></a>
          </ul>
        </div>

      </nav> */}
      <nav>
        <ul>
            <li><a><Link to="/Home">Home</Link></a></li>
            <li><a ><Link to="/Admin">Admin Login</Link></a></li>
            <li><a><Link to="/Employee">Employee Login</Link></a></li>  
        </ul>
    </nav>

    </div>

  )
}
