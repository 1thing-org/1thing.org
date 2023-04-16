import Button from 'react-bootstrap/Button';
import Action from './Action';
import './ActionSection.css';
import a1 from '../../../assets//home-page/a1.svg';
import a2 from '../../../assets//home-page/a2.svg';
import a3 from '../../../assets//home-page/a3.svg';
import a4 from '../../../assets//home-page/a4.svg';

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

function ActionSection() {
    return (
        <div id="action-section">
            <div className='action-left-side'>
                <h2 className='action-h2'>Small Actions. Big Changes</h2>
                <p className='action-p1'> 
                    By encouraging everyone to make one small but meaningful contribution we 
                    can create significant change.
                </p>
                <div className='action-container'>
                    <img className='action-img' src={a1} alt="Raise awareness" />
                    <span className='action-text'>Raise awareness</span>
                </div>
                <div className='action-container'>
                    <img className='action-img'  src={a2} alt="Support Victims" />
                    <span className='action-text'>Support vicitms of anti-Asian hate</span>
                </div>
                <div className='action-container'>
                    <img className='action-img' src={a3} alt="Use your expertise" />
                    <span className='action-text'>Use your expertise</span>
                </div>
                <div className='action-container'>
                     <img className='action-img' src={a4} alt="Promote cross" />
                    <span className='action-text'>Promote cross-racial understanding</span>
                </div>

            </div>
            <div className='action-right-side'></div>
            {/* <div id="actions">
                <div className="action-row">
                    <Action desc={actionData[0].desc}/>
                    <Action desc={actionData[1].desc}/>
                </div>
                <div className="action-row">
                    <Action desc={actionData[2].desc}/>
                    <Action desc={actionData[3].desc}/>
                </div>
                <Button id="find-button">Find your one thing</Button>
            </div> */}
        </div>
    )
}

export default ActionSection;