import Card from 'react-bootstrap/Card';
import "./Project.css";

type Props = {
    name: string;
    desc: string;
    projectUrl: string;
    projectId: string; 
};

function Project(props: Props){
    return(
        <Card className="project" id={props.projectId}>
            <Card.Body id={"body-" + props.projectId}>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.desc}</Card.Text>
                <Card.Link id="learn-more" href={props.projectUrl}>Learn More</Card.Link>
            </Card.Body>
            <Card.Img id={"image-" + props.projectId} />    {/* image url in css */}
        </Card>
    )
}

export default Project;