import Card from 'react-bootstrap/Card';
import "./Project.css";
import { Button } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'; 

{/*need to install recharts if need to make dynamic grapth*/}

type Props = {
    name: string;
    desc: string;
    projectUrl: string;
    projectId: string; 
    imageUrl: string;
};

function Project(props: Props){
    return(
        <Card className="project" id={props.projectId}>
            <Card.Body id={"body" + props.projectId}>
                <Card.Title className='card-title'>{props.name}</Card.Title>
                <Card.Text className='card-text'>{props.desc}</Card.Text>
            </Card.Body>

          
				 {/*need to make dynamic graph*/}
            {/* the tracker graph and the cases still need to work on */}
            {/* <Card.Img id={"image-" + props.projectId} src={props.imageUrl}/>     */}
            {/*image url in css*/}


            <div className='cases-container'>
                <div className='months-cases'>
                <Card.Title className='cases-text'> 5 cases </Card.Title>
                <Card.Text>were reported in November</Card.Text>
                </div>

                <div className='year-cases'>
                <Card.Title className='cases-text'>
                    199 cases 
                </Card.Title>
                <Card.Text>were reported in the past 12 months</Card.Text>
                </div>
            </div>

            {/* url go back to home page, might need to change later */}
                <Button id="learn-more" href={props.projectUrl}>
                    <div className='learnMore-text'>Learn More</div>
                </Button>
        </Card>
    )
}

export default Project;