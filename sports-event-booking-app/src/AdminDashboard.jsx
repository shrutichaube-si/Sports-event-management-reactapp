import React from 'react'
import { Link } from 'react-router-dom'
import './AdmDash.css'

export default function AdminDashboard() {


  return (
    <div>
       
      <h1> Admin Login</h1>
      <div class="sidebar">
        <ul>
        
            {/* <li><a ><Link to="./details">Add details</Link></a></li> */}
            <li><a><Link to="./equipment">Add Equipment</Link></a></li>
            <li><a><Link to="/Home">Logout</Link></a></li>  
        </ul>
    </div>
     
    </div>
  )
}

