import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const projectItems = projects.map(projects => {
    return <div  key={projects.id} id="project-list"><ProjectItem name={projects.name} about={projects.about} technologies={projects.technologies}/></div>
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      {projectItems}
    </div>
  );
}

export default ProjectList;
