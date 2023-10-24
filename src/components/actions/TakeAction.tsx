import NavBar from "./navbaraction/NavAction";
import Footer from "../footer/Footer";
import ShareOneThing from "./share/ShareOneThing";
import ActionsGroup from "./actionsgroup/ActionsGroup";
import HeroSection from "./heroaction/HeroAction";
import HeroActionImage from "assets/hero-action.svg";

const actionHeroData: { heading: string; subheading: string } = {
  heading: `There are many small actions we can take to improve racial equality.`,
  subheading: `Take small actions consistently. Achieve racial equality eventually
                  Get inspiration about what you can do to help.`,
};

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
