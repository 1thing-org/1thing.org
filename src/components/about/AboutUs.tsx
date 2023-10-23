import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';
import AboutUsSection from "./AboutUsContent";
import ContactOneThing from "./ContactUs";
import './AboutUs.css';


function AboutUs(){
    return (
            <div>
                <NavBar />
                <AboutUsSection />
                <ContactOneThing />
                <Footer />
            </div>
        );
}

export default AboutUs;