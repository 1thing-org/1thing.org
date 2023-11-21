import NavBar from "../../navbar/NavBar";
import Footer from "../../footer/Footer";
import Iphone from "../../../assets/project-together/iphone.png";
import Content from "./content/content";
import TopSection from "./topSection/TopSection";
import BottomSec from "./bottomSection/BottomSec";
import HeroSection from "components/hero/HeroSection";

const aboutHeroData: {
  heading: string;
  secondheading: string;
  subheading: string;
} = {
  heading: `Project Together`,
  secondheading: `Project Together is a mobile app that connects people who want to support the AAPI community.`,
  subheading: `We believe that Project Together has the potential to make a real difference in the AAPI community. 
  By connecting people who want to support the AAPI community, 
  we can help to create a more inclusive and supportive society for all.`,
};

function ProjectTogether() {
  return (
    <div>
      <NavBar />
      <TopSection
        heading={aboutHeroData.heading}
        secondheading={aboutHeroData.secondheading}
        subheading={aboutHeroData.subheading}
        imageSrc={Iphone}
      />
      <BottomSec />
      <Footer />
    </div>
  );
}

export default ProjectTogether;