import React, {Component} from 'react';
import Story from './Story';
import './StorySection.css';

const storyData: {name: string, quote: string, picUrl: string}[] = [
    {
        "name": "Li M.",
        "quote": "Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim porttitor tristique id lectus.",
        "picUrl": require("./../../../assets/home-page/placeholder-image.png")
    },
    {
        "name": "Li M.",
        "quote": "Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim porttitor tristique id lectus.",
        "picUrl": require("./../../../assets/home-page/placeholder-image.png")
    },
    {
        "name": "Li M.",
        "quote": "Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim porttitor tristique id lectus.",
        "picUrl": require("./../../../assets/home-page/placeholder-image.png")
    },
    {
        "name": "Li M.",
        "quote": "Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim porttitor tristique id lectus.",
        "picUrl": require("./../../../assets/home-page/placeholder-image.png")
    }
];


class StorySection extends Component {
    render() {
        return (
            <div id='story-section'>
                <div id='story-desc'>
                    <h2>Our Story</h2>
                    <p> 
                        1 Thing Against Racism began as a slide deck shared around the offices at Google. 
                        Today, it is a mission driven orgnization comprised of volunteers who have their own 
                        reasons for contributing their time to our mission.
                    </p>
                    <h6>Read More</h6>
                </div>
                <div id="stories">
                    <Story name={storyData[0].name} quote={storyData[0].quote} picUrl={storyData[0].picUrl}/>
                    <Story name={storyData[1].name} quote={storyData[1].quote} picUrl={storyData[1].picUrl}/>
                    <Story name={storyData[2].name} quote={storyData[2].quote} picUrl={storyData[2].picUrl}/>
                    <Story name={storyData[3].name} quote={storyData[3].quote} picUrl={storyData[3].picUrl}/>
                </div>
            </div>
        )
    }
}

export default StorySection;