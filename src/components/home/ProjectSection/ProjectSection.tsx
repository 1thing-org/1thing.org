import React, {Component} from 'react';
import Project from './Project';
import "./ProjectSection.css";

const projectData: {name: string, desc: string, imageUrl: string}[] = [
    {
        "name": "Hate Crime Tracker", 
        "desc": `Anti-Asian hate crimes are happening everyday and we’ve built a tool to help track them. 
                1 Thing’s Hate Crime Tracker scrapes incident reports from national media news outlets and visualizes 
                the data to raise awareness.`,
        "imageUrl": require("./../../../assets/home-page/placeholder-image.png")
    },
    {
        "name": "Project Together",
        "desc": `Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim porttitor tristique 
                id lectus. Eget orci vestibulum fringilla diam adipiscing proin.`,
        "imageUrl": require("./../../../assets/home-page/placeholder-image.png") 
    },
    {
        "name": "Supporting Victims",
        "desc": `Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim porttitor tristique 
        id lectus. Eget orci vestibulum fringilla diam adipiscing proin.`,
        "imageUrl": require("./../../../assets/home-page/placeholder-image.png")
    }
];

class ProjectSection extends Component{
    render(){
        return(
            <div id="project-section">
                <Project name={projectData[0].name} desc={projectData[0].desc} imageUrl={projectData[0].imageUrl} />
                <div id="bottom">
                    <Project name={projectData[1].name} desc={projectData[1].desc} imageUrl={projectData[1].imageUrl} />
                    <div id="middle"></div>
                    <Project name={projectData[2].name} desc={projectData[2].desc} imageUrl={projectData[2].imageUrl} />
                </div>
            </div>
        )
    }
}

export default ProjectSection;