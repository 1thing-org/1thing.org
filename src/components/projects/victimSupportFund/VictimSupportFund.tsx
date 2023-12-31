import NavBar from "../../navbar/NavBar";
import Footer from "../../footer/Footer";
import HeroSection from "../../hero/HeroSection";
import HeroImage from "assets/hero.svg";
import Content from "./content/content";
import SupportFundContent from "./content/content";
import supportImg from "../../../assets/home-page/supportFund.png";

const SupportContent: {
  heading: string;
  subheading: string;
  paragrah1: string;
  paragrah2: string;
} = {
  heading: `Victim Support Fund`,
  subheading: `We ensure that victims receive support and resources to address their needs and challenges.`,
  paragrah1: `1thing.org receives donations from individuals and corporations like Google. We disburse the funds to victims of
anti-Asian hate crimes in a transparent and accountable manner, and provide regular updates to donors and the
public on the progress of the fundraising campaign and how the funds are being used. With careful planning and
execution, we ensure that the funds are used effectively and efficiently. We ensure that victims receive support
and resources to address their needs and challenges.`,
  paragrah2: ` We disburse the funds to victims of anti-Asian hate crimes in a
          transparent and accountable manner, and provide regular updates to
          donors and the public on the progress of the fundraising campaign and
          how the funds are being used. With careful planning and execution, we
          ensure that the funds are used effectively and efficiently. We ensure
          that victims receive support and resources to address their needs and
          challenges.`,
};

function VictimSupportFund() {
  return (
    <div>
      <NavBar />
      <SupportFundContent
        heading={SupportContent.heading}
        subheading={SupportContent.subheading}
        imageSrc={supportImg}
        paragrah1={SupportContent.paragrah1}
        paragrah2={SupportContent.paragrah2}
      />
      <Footer />
    </div>
  );
}

export default VictimSupportFund;
