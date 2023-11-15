import NavBar from "./navbaraction/NavAction";
import Footer from "../footer/Footer";
import ShareOneThing from "./share/ShareOneThing";
import ActionsGroup from "./actionsgroup/ActionsGroup";
import HeroSection from "./heroaction/HeroAction";
import HeroActionImage from "assets/hero-action.svg";

function TakeAction() {
  return (
    <div>
      <NavBar />
      <HeroSection imageSrc={HeroActionImage} />
      <ActionsGroup />
      <ShareOneThing />
      <Footer />
    </div>
  );
}

export default TakeAction;
