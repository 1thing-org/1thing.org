import Project from './Project';
import "./ProjectSection.css";

const projectData: {name: string, desc: string, projectUrl: string, projectId: string, imageUrl: string}[] = [
    {
        "name": "We Made A Hate Crime Tracker", 
        "desc": `Anti-Asian hate crimes are happening everyday and we’ve built 
        a tool to help track them. 1 Thing’s Hate Crime Tracker 
        scrapes reports from national media news outlets and presents the 
        data to raise awareness about these terrible incidents.`,
        "projectUrl": "/",
        "projectId": "tracker",
        "imageUrl": "../../assets/graph.svg",
    },
];

function ProjectSection(){
    return(
        <div id="home-project-section">
            <Project 
                name={projectData[0].name} 
                desc={projectData[0].desc} 
                projectUrl={projectData[0].projectUrl}
                projectId={projectData[0].projectId}
                imageUrl={projectData[0].imageUrl}
            />
        </div>
    )
}

export default ProjectSection;