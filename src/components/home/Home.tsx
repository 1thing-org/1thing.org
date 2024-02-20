import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import HeroSection from "../hero/HeroSection";
import StorySection from "./StorySection/StorySection";
import WorkingOn from "./WorkingOn/WorkingOn";
import ChartView from "./Chart/ChartView";
import HeroImage from "assets/newHero.png";
import HomeActionSection from "./ActionSection/HomeActionSection";

const homeHeroData: { heading: string; subheading: string } = {
  heading: `Act, Share and Inspire`,
  subheading: `We’re a grassroots, non-profit organization of volunteers dedicated to fighting anti-Asian racism. We believe ending all forms of racism and hate begins with uniting people through compassion, awareness, and advocacy. Together we can make the world a more beautiful place — one thing at a time.`,
};

function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection
        heading={homeHeroData.heading}
        subheading={homeHeroData.subheading}
        imageSrc={HeroImage}
      />
      <ChartView />
      <WorkingOn />
      <StorySection />
      <HomeActionSection />
      <Footer />
    </div>
  );
}
export default Home;
