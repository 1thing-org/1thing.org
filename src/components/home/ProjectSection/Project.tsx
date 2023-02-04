import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import "./Project.css";

type Props = {
    name: string;
    desc: string;
    projectUrl: string;
    projectId: string; 
};

class Project extends Component<Props>{
    constructor(props: Props) {
        super(props)
    }
    
    render(){
        return(
            <Card className="project" id={this.props.projectId}>
                <Card.Body id={"body-" + this.props.projectId}>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>{this.props.desc}</Card.Text>
                    <Card.Link id="learn-more" href={this.props.projectUrl}>Learn More</Card.Link>
                </Card.Body>
                <Card.Img id={"image-" + this.props.projectId} />    {/* image url in css */}
            </Card>
        )
    }
}

export default Project;