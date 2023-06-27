import NavBar from "../../navbar/NavBar";
import Footer from "../../footer/Footer";
import HeroSection from "../../hero/HeroSection";
import HeroImage from "assets/hero.svg";

const aboutHeroData: { heading: string; subheading: string } = {
  heading: `Project Together Page`,
  subheading: `Project Together is a mobile app that connects people who want to support the AAPI community.`,
};

function ProjectTogether() {
  return (
    <div>
      <NavBar />
      <HeroSection
        heading={aboutHeroData.heading}
        subheading={aboutHeroData.subheading}
        imageSrc={HeroImage}
      />
      <Footer />
    </div>
  );
}

export default ProjectTogether;
