import React from "react";
import bgs from "../../utils/bgImg";

function ProjectCard(props) {
    const project = props.project;

    // console.log(boxes[project.id - 1]);

    return (
        <a href={project.url} className="work-wrapper">
            <div className="work" style={{ backgroundImage: `url(${bgs[project.id - 1]})` }}>
                <h4 className="work-title">{project.name}</h4>
            </div>
        </a>
    );
}

export default ProjectCard