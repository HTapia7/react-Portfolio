import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helper/projectList";
import "../styles/ProjectDisplay.css"

function ProjectDisplay() {
    const { id } = useParams()
    const projectId = ProjectList[id]
    return  <div className="project">
                <h1 className="projectHeader">{projectId.name}</h1>
                <img src={projectId.image} className="projectImg" alt="Project"></img>
                <p>
                    <a href={projectId.GitHub}>Github</a>
                </p>
            </div>
}

export default ProjectDisplay;