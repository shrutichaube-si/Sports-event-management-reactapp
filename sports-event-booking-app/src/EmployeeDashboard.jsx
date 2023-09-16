import React from 'react'
import './AdmDash.css'
import { Link } from 'react-router-dom'

export default function EmployeeDashboard() {
  return (
    <div>
    
         
      <h1> Employee Login</h1>
      <div class="sidebar">
        <ul>
        
            <li><a ><Link to="./empdetails">Add details</Link></a></li>
            <li><a><Link to="/Home">Logout</Link></a></li>  
        </ul>
    </div>
     
    </div>
  )
}
