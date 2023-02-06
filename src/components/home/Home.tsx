import React, {Component} from 'react';
import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';
import HeroSection from '../hero/HeroSection';
import ProjectSection from './ProjectSection/ProjectSection';
import StorySection from './StorySection/StorySection';
import ActionSection from './ActionSection/ActionSection';

const homeHeroData: {heading: string, subheading: string} = {
    "heading": `1 Thing Against Racism is a volunteer organization dedicated to fighting for racial justice and equality`,
    "subheading": `Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim porttitor tristique id lectus. 
                    Eget orci vestibulum fringilla diam adipiscing proin. Auctor vestibulum varius interdum euismod 
                    convallis ultricies mauris sollicitudin nisl.`
}

class Home extends Component{
    render() {
        return (
            <div>
                <NavBar />
                <HeroSection heading={homeHeroData.heading} subheading={homeHeroData.subheading} />
                <ProjectSection />
                <StorySection />
                <ActionSection />
                <Footer />
            </div>
        )
    }
}
export default Home;