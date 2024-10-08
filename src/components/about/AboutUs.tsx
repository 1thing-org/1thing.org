import Footer from "../footer/Footer";
import AboutUsPic from "./AboutUsPic";
import AboutUsSection from "./AboutUsContent";
import "./AboutUs.css";
import NavBar from "../navbar/NavBar";
import Signup from "components/signup/SignUp";

function AboutUs() {
  return (
    <div>
      <NavBar />
      <AboutUsPic />
      <AboutUsSection />
      <Signup signupTitle={"Contact Us"} containsSubject={true} />
      <Footer />
    </div>
  );
}

export default AboutUs;
