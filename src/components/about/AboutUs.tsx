import Footer from "../footer/Footer";
import AboutUsSection from "./AboutUsContent";
import "./AboutUs.css";
import Signup from "components/signup/SignUp";

function AboutUs() {
  return (
    <div>
      <AboutUsSection />
      <Signup  signupTitle={"Contact Us"} />
      <Footer />
    </div>
  );
}

export default AboutUs;
