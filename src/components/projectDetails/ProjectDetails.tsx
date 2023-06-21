import React from "react";
import "./ProjectDetails.css";
import { useParams } from "react-router-dom";
import NavBar from "../navbar/NavBar"; // Import the NavBar component
import Footer from "../footer/Footer"; // Optionally you can also include a Footer if you have one

function ProjectDetails() {
  const { id: projectId } = useParams();

  // Fetch project details based on the projectId, it's a static example for now
  const project = {
    id: "1",
    title: "Project Together",
    image: "/path/to/image.jpg",
    description: "Detailed description of the project goes here.",
  };

  return (
    <div>
      <NavBar /> {/* Include the NavBar component */}
      <div className="project-details-container">
        <h1>{project.title}</h1>
        <img src={project.image} alt={project.title} />
        <p>{project.description}</p>
      </div>
      <Footer /> {/* Optionally include the Footer component */}
    </div>
  );
}

export default ProjectDetails;
