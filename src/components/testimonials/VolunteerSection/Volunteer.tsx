import Card from 'react-bootstrap/Card';
import "./Volunteer.css";

type Props = {
    name: string;
    quote: string;
    pic: string;
    interview: string;
}

function Volunteer(props: Props){
    return (
        <Card id="volunteer">
            <Card.Body id="left-side">
                <Card.Text id="volunteer-quote">{props.quote}</Card.Text>
                <Card.Link href={props.interview} id="volunteer-interview">Read the interview</Card.Link>
            </Card.Body>
            <Card.Body id="right-side">
                <Card.Img id="volunteer-profile-pic" src={props.pic}/>
                <Card.Text id="volunteer-name">{props.name}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Volunteer;