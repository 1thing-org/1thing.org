import React, {Component} from 'react'
import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';
import HeroSection from '../hero/HeroSection';

const aboutHeroData: {heading: string, subheading: string} = {
    "heading": `1 Thing Against Racism About Page`,
    "subheading": `Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim porttitor tristique id lectus. 
                    Eget orci vestibulum fringilla diam adipiscing proin. Auctor vestibulum varius interdum euismod 
                    convallis ultricies mauris sollicitudin nisl.`
}

class AboutUs extends Component{
    render() {
        return (
            <div>
                <NavBar />
                <HeroSection heading={aboutHeroData.heading} subheading={aboutHeroData.subheading} />
                <Footer />
            </div>
        )
    }
}

export default AboutUs;