import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Action from './Action';
import './ActionSection.css';

const actionData: {desc: string}[] = [
    {
        "desc": `Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim porttitor tristique id lectus.`
    },
    {
        "desc": `Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim porttitor tristique id lectus.`
    },
    {
        "desc": `Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim porttitor tristique id lectus.`
    },
    {
        "desc": `Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim porttitor tristique id lectus.`
    }
];

class ActionSection extends Component {
    render() {
        return (
            <div id="action-section">
                <div id='action-desc'>
                    <h2>Small Actions. Big Changes</h2>
                    <p> 
                        By encouraging everyone to make one small but meaningful contribution we 
                        can create significant change.
                    </p>
                </div>
                <div id="actions">
                    <div className="action-row">
                        <Action desc={actionData[0].desc}/>
                        <Action desc={actionData[1].desc}/>
                    </div>
                    <div className="action-row">
                        <Action desc={actionData[2].desc}/>
                        <Action desc={actionData[3].desc}/>
                    </div>
                    <Button id="find-button">Find your one thing</Button>
                </div>
            </div>
        )
    }
}

export default ActionSection;