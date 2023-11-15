import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';
import AboutUsSection from "./AboutUsContent";
import ContactOneThing from "./ContactUs";
import './AboutUs.css';
import heartImg from "../../assets/AboutUs/1thing heart.png";


function AboutUs(){
    return (
            <div>
             
       
                <AboutUsSection />
                <ContactOneThing />
                <Footer />
            </div>
        );
}

export default AboutUs;