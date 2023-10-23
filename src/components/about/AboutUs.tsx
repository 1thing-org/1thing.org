import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';
import AboutUsSection from "./AboutUsContent";
import ContactOneThing from "./ContactUs";

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