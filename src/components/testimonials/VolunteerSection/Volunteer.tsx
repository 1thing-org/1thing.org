import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import "./Volunteer.css";

type Props = {
    name: string;
    quote: string;
    pic: string;
    interview: string;
}

class Volunteer extends Component<Props> {
    constructor(props: Props){
        super(props);
    }

    render() {
        return (
            <Card id="volunteer">
                <Card.Body id="left-side">
                    <Card.Text id="volunteer-quote">{this.props.quote}</Card.Text>
                    <Card.Link href={this.props.interview} id="volunteer-interview">Read the interview</Card.Link>
                </Card.Body>
                <Card.Body id="right-side">
                    <Card.Img id="volunteer-profile-pic" src={this.props.pic}/>
                    <Card.Text id="volunteer-name">{this.props.name}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default Volunteer;