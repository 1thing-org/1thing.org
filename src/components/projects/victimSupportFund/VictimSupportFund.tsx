import NavBar from "../../navbar/NavBar";
import Footer from "../../footer/Footer";
import HeroSection from "../../hero/HeroSection";
import HeroImage from "assets/hero.svg";

const aboutHeroData: { heading: string; subheading: string } = {
  heading: `Victim Support Fund Page`,
  subheading: `1thing.org receives donations from individuals and corporations like Google. We disburse the funds to victims of anti-Asian hate crimes in a transparent and accountable manner, and provide regular updates to donors and the public on the progress of the fundraising campaign and how the funds are being used. With careful planning and execution, we ensure that the funds are used effectively and efficiently. We ensure that victims receive support and resources to address their needs and challenges.`,
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
      <Footer />
    </div>
  );
}

export default VictimSupportFund;
