import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import VolunteerSection from "./VolunteerSection/VolunteerSection";
import Signup from "components/signup/SignUp";

function Testimonials() {
  return (
    <div>
      <NavBar />

      <VolunteerSection />
      <Signup signupTitle={"Sign Up to Volunteer"} />
      <Footer />
    </div>
  );
}

export default Testimonials;
