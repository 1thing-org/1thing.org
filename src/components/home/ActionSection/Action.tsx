import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Action.css';

type Props = {
    desc: string;
}

class Action extends Component<Props> {
    constructor(props: Props){
        super(props);
    }

    render() {
        return (
            <Card id="action">
                <Card.Text id="action-content">{this.props.desc}</Card.Text>
                <Button id="button" variant="secondary" href="#">Action Type Icon</Button>
            </Card>
        )
    }
}

export default Action;