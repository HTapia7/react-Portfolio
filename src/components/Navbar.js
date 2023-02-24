import React from "react";
import { Link } from "react-router-dom"
import "../styles/Navbar.css"

function Navbar() {
    return  <div className="navbar"> 
                <div className="links">
                    <Link to='/'>About Me</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/resume'>Resume</Link>
                </div>
            </div>
}

export default Navbar;