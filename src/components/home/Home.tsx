import React, {Component} from 'react';
import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';
import ProjectSection from './ProjectSection/ProjectSection';
import StorySection from './StorySection/StorySection';

class Home extends Component{
    render() {
        return (
            <div>
                <NavBar />
                <ProjectSection />
                <StorySection />
                <Footer />
            </div>
        )
    }
}
export default Home;