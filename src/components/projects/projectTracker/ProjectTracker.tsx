import NavBar from "../../navbar/NavBar";
import Footer from "../../footer/Footer";
import Mac from "../../../assets/project-tracker/mac.png"
import TopSection from "../projectTogether/topSection/TopSection";
import Iphone from "../../../assets/project-together/iphone.png";
import BottomSec from "../projectTogether/bottomSection/BottomSec";

const aboutHeroData: {
    heading: string;
    secondheading: string;
    subheading: string;
} = {
    heading: `Project Tracker`,
    secondheading: `Anti-Asian Hate Crime Tracker is a first-of-its-kind website 
    gathers anti-Asian crime incidents reported by credible news sources`,
    subheading: `Despite reduced media coverage, 
    anti-Asian hate crimes continue to occur daily across North America.
    These incidents often involve violence and robberies targeting Asian elders and businesses,
    but they may not always be categorized as hate crimes.
        It's important to recognize that these incidents are likely motivated by anti-Asian bias, 
    even if they don't meet specific legal definitions. 
    To raise awareness of this ongoing problem,
    1 Thing Org created the Anti-Asian Hate Crime Tracker.
    This first-of-its-kind website gathers anti-Asian crime incidents reported by credible news sources,
    providing insights into their trends and geographic distribution.`,

};

function ProjectTracker() {
    return (
        <div>
            <NavBar />
            <TopSection
                heading={aboutHeroData.heading}
                secondheading={aboutHeroData.secondheading}
                subheading={aboutHeroData.subheading}
                imageSrc={Mac}
            />
            <BottomSec />
            <Footer />
        </div>
    );
}

export default ProjectTracker;