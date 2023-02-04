import React, {Component} from 'react';
import Volunteer from './Volunteer';
import './VolunteerSection.css';

const volunteerData: {name: string, quote: string, pic: string, interview: string}[] = [
    {
        "name": "Li M.",
        "quote": "Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim porttitor tristique id lectus.Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim porttitor tristique id lectus.",
        "pic": require("assets/home-page/placeholder-image.png"),
        "interview": ""
    },
    {
        "name": "Kai K.",
        "quote": "Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim porttitor tristique id lectus.",
        "pic": require("assets/home-page/placeholder-image.png"),
        "interview": ""
    },
    {
        "name": "Josh C.",
        "quote": "Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim porttitor tristique id lectus.",
        "pic": require("assets/home-page/placeholder-image.png"),
        "interview": ""
    },
    {
        "name": "Hannelore B.",
        "quote": "Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim porttitor tristique id lectus.",
        "pic": require("assets/home-page/placeholder-image.png"),
        "interview": ""
    }
]


class VolunteerSection extends Component {
    render() {
        return (
            <div id="volunteer-section">
                <h2>Our Volunteers</h2>
                <div id="volunteers">
                    <div id="top-section">
                        <Volunteer name={volunteerData[0].name} quote={volunteerData[0].quote} pic={volunteerData[0].pic} interview={volunteerData[0].interview}/>
                        <Volunteer name={volunteerData[1].name} quote={volunteerData[1].quote} pic={volunteerData[1].pic} interview={volunteerData[1].interview}/>
                    </div>
                    <div id="bottom-section">
                        <Volunteer name={volunteerData[2].name} quote={volunteerData[2].quote} pic={volunteerData[2].pic} interview={volunteerData[2].interview}/>
                        <Volunteer name={volunteerData[3].name} quote={volunteerData[3].quote} pic={volunteerData[3].pic} interview={volunteerData[3].interview}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default VolunteerSection;