//TODO
/*

    Create Navbar with following link
    Note Summary,   Login, 
    Use React router
*/

import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar(){return(
    <nav className="navbar navbar-expand-lg nav-color">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">EduAsses</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
           <Link className="nav-link" to="/">Home</Link>
          
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/NoteSummary">Notes Summary </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Login">Login</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to="/Signup">Sign up</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
);}