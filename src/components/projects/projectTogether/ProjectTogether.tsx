import NavBar from "../../navbar/NavBar";
import Footer from "../../footer/Footer";
import HeroSection from "../../hero/HeroSection";
import HeroImage from "assets/hero.svg";
import Content from "./content/content";

const aboutHeroData: { heading: string; subheading: string } = {
  heading: `Project Together Page`,
  subheading: `The Asian American and Pacific Islander (AAPI) community is facing
              a number of challenges, including increased hate crimes,
              discrimination, and lack of representation. These challenges can
              be overwhelming, and it can be difficult to know where to start to
              help.`,
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
      <Content />
      <Footer />
    </div>
  );
}

export default ProjectTogether;
