import React, {Component} from 'react';
import Project from './Project';
import "./ProjectSection.css";

const projectData: {name: string, desc: string, imageUrl: string, projectUrl: string, projectId: string, bodyId: string, imgId: string}[] = [
    {
        "name": "Hate Crime Tracker", 
        "desc": `Anti-Asian hate crimes are happening everyday and we’ve built a tool to help track them. 
                1 Thing’s Hate Crime Tracker scrapes incident reports from national media news outlets and visualizes 
                the data to raise awareness.`,
        "imageUrl": require("assets/home-page/placeholder-image.png"),
        "projectUrl": "/",
        "projectId": "project-top",
        "bodyId": "project-body-top",
        "imgId": "project-image-top"
    },
    {
        "name": "Project Together",
        "desc": `Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim porttitor tristique 
                id lectus. Eget orci vestibulum fringilla diam adipiscing proin.`,
        "imageUrl": require("assets/home-page/placeholder-image.png"),
        "projectUrl": "/",
        "projectId": "project-bottom",
        "bodyId": "project-body-bottom",
        "imgId": "project-image-bottom"
    },
    {
        "name": "Supporting Victims",
        "desc": `Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim porttitor tristique 
        id lectus. Eget orci vestibulum fringilla diam adipiscing proin.`,
        "imageUrl": require("assets/home-page/placeholder-image.png"),
        "projectUrl": "/",
        "projectId": "project-bottom",
        "bodyId": "project-body-bottom",
        "imgId": "project-image-bottom"
    }
];

class ProjectSection extends Component{
    render(){
        return(
            <div id="project-section">
                <Project 
                    name={projectData[0].name} 
                    desc={projectData[0].desc} 
                    imageUrl={projectData[0].imageUrl} 
                    projectUrl={projectData[0].projectUrl}
                    projectId={projectData[0].projectId}
                    bodyId={projectData[0].bodyId}
                    imgId={projectData[0].imgId}
                />
                <div id="bottom">
                    <Project 
                        name={projectData[1].name} 
                        desc={projectData[1].desc} 
                        imageUrl={projectData[1].imageUrl} 
                        projectUrl={projectData[1].projectUrl}
                        projectId={projectData[1].projectId}
                        bodyId={projectData[1].bodyId}
                        imgId={projectData[1].imgId}
                    />
                    <div id="middle"></div>
                    <Project 
                        name={projectData[2].name} 
                        desc={projectData[2].desc} 
                        imageUrl={projectData[2].imageUrl} 
                        projectUrl={projectData[2].projectUrl}
                        projectId={projectData[2].projectId}
                        bodyId={projectData[2].bodyId}
                        imgId={projectData[2].imgId}
                    />
                </div>
            </div>
        )
    }
}

export default ProjectSection;