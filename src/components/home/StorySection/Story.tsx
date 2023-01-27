import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import './Story.css';

type Props = {
    name: string;
    quote: string;
    picUrl: string;
}

class Story extends Component<Props> {
    constructor(props: Props){
        super(props);
    }

    render() {
        return (
            <Card>
                <Card.Text>{this.props.quote}</Card.Text>
                <Card.Body>
                    <Card.Text>{this.props.name}</Card.Text>
                    <Card.Img id="profile-pic" src={this.props.picUrl}/>
                </Card.Body>
            </Card>
        )
    }
}

export default Story;