import React from "react";
import { NavLink } from "react-router-dom"
import "../styles/Navbar.css"

function Navbar() {
    return  <div className="navbar"> 
                <div className="links">
                    <NavLink to='/'>About Me</NavLink>
                    <NavLink to='/projects'>Projects</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                    <NavLink to='/resume'>Resume</NavLink>
                </div>
            </div>
}

export default Navbar;