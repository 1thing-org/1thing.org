import Story from './Story';
import './StorySection.css';
import { Button } from 'react-bootstrap';

const storyData: {name: string, quote: string, picUrl: string}[] = [
    {
        "name": "Li M.",
        "quote": "Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim porttitor tristique id lectus.",
        "picUrl": require("assets/home-page/profile-placeholder.jpeg")
    },
    {
        "name": "Kai K.",
        "quote": "Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim porttitor tristique id lectus.",
        "picUrl": require("assets/home-page/profile-placeholder.jpeg")
    },
    {
        "name": "Josh C.",
        "quote": "Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim porttitor tristique id lectus.",
        "picUrl": require("assets/home-page/profile-placeholder.jpeg")
    },
    {
        "name": "Hannelore B.",
        "quote": "Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim porttitor tristique id lectus.",
        "picUrl": require("assets/home-page/profile-placeholder.jpeg")
    }
];


function StorySection(){
    return (
        <div id='story-section'>
            <div id='story-desc'>
                <h2 className='our-story'>Our Story</h2>
                <p className='story-text'> 
                1 Thing Against Racism began as a slide deck shared around the offices at 
                Google. Today, it is a mission driven organization comprised of volunteers who 
                contribute their time to our mission.
                </p>
                <Button className='story-button' href="#">
                            <div className='story-button-text'>Read More</div>
                         </Button>
            </div>
            <div id="stories">
                {storyData.map(story => <Story name={story.name} quote={story.quote} picUrl={story.picUrl}/>)}
            </div>
        </div>
    )
}

export default StorySection;