import Card from 'react-bootstrap/Card';
import './Story.css';

type Props = {
    name: string;
    quote: string;
    picUrl: string;
}

function Story(props: Props) {
    return (
        <Card id="story">
            <Card.Img id="profile-pic" src={props.picUrl}/>
            <Card.Text id="story-name">{props.name}</Card.Text>
            <Card.Text id="story-quote">{props.quote}</Card.Text>  
            
            <Card.Body id="story-body">
            
                
               
            </Card.Body>
        </Card>
    )
}

export default Story;