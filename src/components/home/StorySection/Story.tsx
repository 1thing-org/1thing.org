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
            <Card.Text id="story-quote">{props.quote}</Card.Text>
            <Card.Body id="story-body">
                <Card.Text id="story-name">{props.name}</Card.Text>
                <Card.Img id="profile-pic" src={props.picUrl}/>
            </Card.Body>
        </Card>
    )
}

export default Story;