import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import './YourActionsRight.css';

type Props = {
    name: string;
    desc: string[];
    actionId: string;
};

class YourActionsRight extends Component<Props>{
    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <Card className="your-actions-right" id={this.props.actionId}>
                <Card.Img id={"image-" + this.props.actionId} />
                <Card.Body id={"body-" + this.props.actionId}>
                    <Card.Title className="title">{this.props.name}</Card.Title>
                    <Card.Text className="text">
                        <ul>
                            {
                                this.props.desc.map((item, index) => {
                                    return <li key={index}>{item}</li>
                                })
                            }
                        </ul>
                    </Card.Text>
                </Card.Body>{/* image url in css */}
            </Card>
        )
    }
}

export default YourActionsRight;