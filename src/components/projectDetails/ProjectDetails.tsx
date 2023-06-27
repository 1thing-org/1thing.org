import React from "react";
import "./ProjectDetails.css";
import { useParams } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer"; 

// Projects details based on the projectId
const projects = {
  "project-together": {
    id: "project-together",
    title: "Project Together",
    image: "/path/to/project-together.jpg",
    description: "Detailed description of the Project Together goes here.",
  },
  "victim-support-fund": {
    id: "victim-support-fund",
    title: "Victim Support Fund",
    image: "/path/to/victim-support-fund.jpg",
    description: "Detailed description of the Victim Support Fund goes here.",
  },
  // If we have more projects later...
};

function ProjectDetails() {
  const { id } = useParams();

  // Fix the error: We need to ensure projectId is a valid key in projects
  const projectId = id as keyof typeof projects;

  // Fetch project details based on the projectId
  const project = projects[projectId];

  // basic error handling, make sure project exists, redirect or show an error if it does not
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <NavBar /> 
      <div className="project-details-container">
        <h1>{project.title}</h1>
        <img src={project.image} alt={project.title} />
        <p>{project.description}</p>
      </div>
      <Footer /> 
    </div>
  );
}

export default ProjectDetails;
