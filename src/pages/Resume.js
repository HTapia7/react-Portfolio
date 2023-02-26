import React from "react";
import downloadResume from "../helper/resumeTest.pdf"
import "../styles/Resume.css"

function Resume() {
    return  <>
                <div className="skills">
                    <h2>Skills: </h2>
                    <ol className="list">
                        <li className="item">
                            <h2>Front-End</h2>
                            <p>
                                ReactJs, HTML, CSS, BootStrap, Materialize 
                            </p>
                        </li>
                        <li className="item">
                            <h2>Back-End</h2>
                            <p>
                                NodeJS, ExpressJS, GraphQL, ApolloServer, MySQL,
                                MongoDB, Sequalize
                            </p>
                        </li>
                    </ol>
                </div>
                <div className="education">
                    <h2>My Education: </h2>
                    <ol className="list">
                        <li className="item">
                            <p> High School Diploma</p>
                        </li>
                        <li className="item">
                            <p>Associates in Computer Science</p>
                        </li>
                        <li className="item">
                            <p>UC Davies Coding Certificate</p>
                        </li>
                    </ol>
                </div>
                <div className="resume">
                    <a href={downloadResume} download>Download Resume</a>
                </div>
            </>
}

export default Resume;