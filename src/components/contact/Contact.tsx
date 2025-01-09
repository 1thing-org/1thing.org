import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import ContactSection from "./ContactSection";
import HeroImage from "assets/hero.svg";
import "./Contact.css";
import Signup from "components/signup/SignUp";

const contactHeroData: { heading: string; subheading: string } = {
  heading: `Contact Us`,
  subheading: `We ensure that victims receive support and resources to address their needs and challenges.`,
};

function Contact() {
  return (
    <div>
      <NavBar />
      <ContactSection
        heading={contactHeroData.heading}
        subheading={contactHeroData.subheading}
        imageSrc={HeroImage}
        hideHeroText={true}
      />
      <Signup signupTitle={"Contact Us"} containsSubject={true} />
      <Footer />
    </div>
  );
}

export default Contact;
