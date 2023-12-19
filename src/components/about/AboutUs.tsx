import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import AboutUsSection from "./AboutUsContent";
import ContactOneThing from "./ContactUs";
import "./AboutUs.css";
import HeartImg from "../../assets/AboutUs/1thing heart.png"
import HeroSection from "components/hero/HeroSection";
import HeroAction from "../actions/heroaction/HeroAction"
import ShareOneThing from "components/actions/share/ShareOneThing";

function AboutUs() {
  return (
    <div>
      <AboutUsSection />
      <ContactOneThing />
      <Footer />
    </div>
  );
}

export default AboutUs;
