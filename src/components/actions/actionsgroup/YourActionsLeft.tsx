import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import './YourActionsLeft.css';

type Props = {
    name: string;
    desc: string[];
    actionId: string;
};

class YourActionsLeft extends Component<Props>{
    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <Card className="your-actions-left" id={this.props.actionId}>
                <Card.Body id={"body-" + this.props.actionId}>
                    <Card.Title className="title">{this.props.name}</Card.Title>
                    <Card.Text className="text">
                        <ul>
                            {
                                this.props.desc.map((item,index)=>{
                                    return <li key={index}>{item}</li>
                                })
                            }
                        </ul>
                    </Card.Text>
                </Card.Body>
                <Card.Img id={"image-" + this.props.actionId} />    {/* image url in css */}
            </Card>
        )
    }
}

export default YourActionsLeft;