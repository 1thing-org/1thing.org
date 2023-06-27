import NavBar from "../../navbar/NavBar";
import Footer from "../../footer/Footer";
import HeroSection from "../../hero/HeroSection";
import HeroImage from "assets/hero.svg";
import Content from "./content/content";

const aboutHeroData: { heading: string; subheading: string } = {
  heading: `Victim Support Fund Page`,
  subheading: ``,
};

function VictimSupportFund() {
  return (
    <div>
      <NavBar />
      <HeroSection
        heading={aboutHeroData.heading}
        subheading={aboutHeroData.subheading}
        imageSrc={HeroImage}
      />
      <Content />
      <Footer />
    </div>
  );
}

export default VictimSupportFund;
