import React, {Component} from 'react'
import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';
import HeroSection from '../hero/HeroSection';
import SignUp from '../signup/SignUp';

const contactHeroData: {heading: string, subheading: string} = {
    "heading": `1 Thing Against Racism Contact Page`,
    "subheading": `Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim porttitor tristique id lectus. 
                    Eget orci vestibulum fringilla diam adipiscing proin. Auctor vestibulum varius interdum euismod 
                    convallis ultricies mauris sollicitudin nisl.`
}

class Contact extends Component{
    render() {
        return (
            <div>
                <NavBar />
                <HeroSection heading={contactHeroData.heading} subheading={contactHeroData.subheading} />
                <SignUp />
                <Footer />
            </div>
        )
    }
}

export default Contact;