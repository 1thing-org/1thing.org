import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import VolunteerSection from "./VolunteerSection/VolunteerSection";
import SignUpForm from "utility/signup";

function Testimonials() {
  return (
    <div>
      <NavBar />

      <VolunteerSection />
      <SignUpForm className={"signup"} signupTitle={"Sign Up to Volunteer"} />
      <Footer />
    </div>
  );
}

export default Testimonials;
