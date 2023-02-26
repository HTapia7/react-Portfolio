import React from "react";
import img1 from "../images/profilePicture.png"
import "../styles/About.css"

function About() {
    return <div className="home">
                <div className="profilePicture">
                        <img src={img1} alt=""/>
                </div>
                <div className="about">
                    <h2>Hi, My name is Hernan</h2>
                    <div className="intro">I am a software developer and I enjoying creating applications. I enjoy learning new things and improving on what I know.</div>
                </div>
                <div className="skills">
                    <h1>Skills: </h1>
                    <ol className="list">
                        <li className="item">
                            <h2>Front-End</h2>
                            <span>
                                ReactJs, HTML, CSS, BootStrap, Materialize 
                            </span>
                        </li>
                        <li className="item">
                            <h2>Back-End</h2>
                            <span>
                                NodeJS, ExpressJS, GraphQL, ApolloServer, MySQL,
                                MongoDB, Sequalize
                            </span>
                        </li>
                    </ol>
                </div>
            </div>
}

export default About;