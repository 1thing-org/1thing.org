import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import "./Project.css";

type Props = {
    name: string;
    desc: string;
    imageUrl: string;
};

class Project extends Component<Props>{
    constructor(props: Props) {
        super(props)
    }
    
    render(){
        return(
            <Card className="project" id={this.props.name === "Hate Crime Tracker" ? "project-top" : "project-bottom"}>
                <Card.Body id={this.props.name === "Hate Crime Tracker" ? "project-body-top" : "project-body-bottom"}>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>{this.props.desc}</Card.Text>
                    <Card.Text id="learn-more">Learn More</Card.Text>
                </Card.Body>
                <Card.Img id={this.props.name === "Hate Crime Tracker" ? "project-image-top" : "project-image-bottom"} src={this.props.imageUrl}/>
            </Card>
        )
    }
}

export default Project;