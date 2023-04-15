import Story from './Story';
import './StorySection.css';

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
                    1 Thing Against Racism began as a slide deck shared around the offices at Google. 
                    Today, it is a mission driven orgnization comprised of volunteers who have their own 
                    reasons for contributing their time to our mission.
                </p>
                <h6>Read More</h6>
            </div>
            <div id="stories">
                {storyData.map(story => <Story name={story.name} quote={story.quote} picUrl={story.picUrl}/>)}
            </div>
        </div>
    )
}

export default StorySection;