import React from "react";
import ProjectItem from "../components/ProjectItem";
import Project1 from "../images/project1.png"
import Project2 from "../images/project2.png"
import Project3 from "../images/project3.png"
import Project4 from "../images/project4.png"
import Project5 from "../images/project5.png"
import Project6 from "../images/project6.png"
import "../styles/Project.css"

function Projects() {
    return <div className="projects">
                <h1>My Projects</h1>
                <div className="projectList">
                    <ProjectItem name={'Recipe Cook Book'} image={Project1}/>
                    <ProjectItem name={'Movie Selector'} image={Project2}/>
                    <ProjectItem name={'Password Generator'} image={Project3}/>
                    <ProjectItem name={'Note Taker'} image={Project4}/>
                    <ProjectItem name={'Work Day Scheduler'} image={Project5}/>
                    <ProjectItem name={'Weather Dashboard'} image={Project6}/>
                </div>
           </div>;
}

export default Projects;