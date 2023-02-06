import React, {Component} from 'react';
import Project from './Project';
import "./ProjectSection.css";

const projectData: {name: string, desc: string, projectUrl: string, projectId: string}[] = [
    {
        "name": "Hate Crime Tracker", 
        "desc": `Anti-Asian hate crimes are happening everyday and we’ve built a tool to help track them. 
                1 Thing’s Hate Crime Tracker scrapes incident reports from national media news outlets and visualizes 
                the data to raise awareness.`,
        "projectUrl": "/",
        "projectId": "tracker"
    },
    {
        "name": "Project Together",
        "desc": `Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim porttitor tristique 
                id lectus. Eget orci vestibulum fringilla diam adipiscing proin.`,
        "projectUrl": "/",
        "projectId": "together"
    },
    {
        "name": "Supporting Victims",
        "desc": `Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim porttitor tristique 
        id lectus. Eget orci vestibulum fringilla diam adipiscing proin.`,
        "projectUrl": "/",
        "projectId": "victim-support"
    }
];

class ProjectSection extends Component{
    render(){
        return(
            <div id="project-section">
                <Project 
                    name={projectData[0].name} 
                    desc={projectData[0].desc} 
                    projectUrl={projectData[0].projectUrl}
                    projectId={projectData[0].projectId}
                />
                <div id="bottom">
                    <Project 
                        name={projectData[1].name} 
                        desc={projectData[1].desc} 
                        projectUrl={projectData[1].projectUrl}
                        projectId={projectData[1].projectId}
                    />
                    <div id="middle"></div>
                    <Project 
                        name={projectData[2].name} 
                        desc={projectData[2].desc} 
                        projectUrl={projectData[2].projectUrl}
                        projectId={projectData[2].projectId}
                    />
                </div>
            </div>
        )
    }
}

export default ProjectSection;