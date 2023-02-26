import React from "react";
import "../styles/Footer.css"

function Footer() {
    return  <div className="footer"> 
                <div className="socialMedia"> 
                    <a href="https://github.com/HTapia7" className="socialLink">GitHub</a>
                    <a href="https://www.linkedin.com/signup/cold-join" className="socialLink" >LinkedIn</a>
                    <a href="https://twitter.com/i/flow/login" className="socialLink">Twitter</a>
                </div>
                <p> &copy; 2023 Portfolio</p>
            </div>
}

export default Footer;
