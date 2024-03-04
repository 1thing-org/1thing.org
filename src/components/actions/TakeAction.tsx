import NavBar from "./navbaraction/NavAction";
import Footer from "../footer/Footer";
import ActionsGroup from "./actionsgroup/ActionsGroup";
import HeroSection from "./heroaction/HeroAction";
import HeroActionImage from "assets/hero-action.svg";
import Signup from "components/signup/SignUp";

function TakeAction() {
  return (
    <div>
      <NavBar />
      <HeroSection imageSrc={HeroActionImage} />
      <ActionsGroup />
      <Signup signupTitle={"Share Your One Thing"} />
      <Footer />
    </div>
  );
}

export default TakeAction;
