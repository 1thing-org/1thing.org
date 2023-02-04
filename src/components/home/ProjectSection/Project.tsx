import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import "./Project.css";

type Props = {
    name: string;
    desc: string;
    imageUrl: string;
    projectUrl: string;
    projectId: string; 
    bodyId: string; 
    imgId: string
};

class Project extends Component<Props>{
    constructor(props: Props) {
        super(props)
    }
    
    render(){
        return(
            <Card className="project" id={this.props.projectId}>
                <Card.Body id={this.props.bodyId}>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>{this.props.desc}</Card.Text>
                    <Card.Link id="learn-more" href={this.props.projectUrl}>Learn More</Card.Link>
                </Card.Body>
                <Card.Img id={this.props.imgId} src={this.props.imageUrl}/>
            </Card>
        )
    }
}

export default Project;