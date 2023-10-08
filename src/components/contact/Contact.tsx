import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';
import HeroSection from '../hero/HeroSection';
import SignUpForm from 'utility/signup';
import HeroImage from "assets/hero.svg";
import "./Contact.css";

const contactHeroData: {heading: string, subheading: string} = {
    "heading": `1 Thing Against Racism Contact Page`,
    "subheading": `Lorem ipsum dolor sit amet consectetur. Aliquam sed egestas enim porttitor tristique id lectus. 
                    Eget orci vestibulum fringilla diam adipiscing proin. Auctor vestibulum varius interdum euismod 
                    convallis ultricies mauris sollicitudin nisl.`
}

function Contact(){
    return (
        <div>
            <NavBar />
            <HeroSection heading={contactHeroData.heading} subheading={contactHeroData.subheading} imageSrc={HeroImage} hideHeroText={true}/>
            <SignUpForm className={"signup"} />
            <Footer />
        </div>
    )
}

export default Contact;