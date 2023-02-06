import React, {Component} from 'react'
import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';
import HeroSection from '../hero/HeroSection';
import VolunteerSection from './VolunteerSection/VolunteerSection';
import SignUp from '../signup/SignUp';

const testimonialHeroData: {heading: string, subheading: string} = {
    "heading": `1 Thing Against Racism Testimonials Page`,
    "subheading": `Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim porttitor tristique id lectus. 
                    Eget orci vestibulum fringilla diam adipiscing proin. Auctor vestibulum varius interdum euismod 
                    convallis ultricies mauris sollicitudin nisl.`
}

class Testimonials extends Component{
    render() {
        return (
            <div>
                <NavBar />
                <HeroSection heading={testimonialHeroData.heading} subheading={testimonialHeroData.subheading} />
                <VolunteerSection />
                <SignUp />
                <Footer />
            </div>
        )
    }
}

export default Testimonials;