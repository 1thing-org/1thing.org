import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';
import ShareOneThing from './share/ShareOneThing';
import ActionsGroup from './actionsgroup/ActionsGroup';
import HeroSection from '../hero/HeroSection';

const actionHeroData: {heading: string, subheading: string} = {
    "heading": `There are many small actions we can take to improve racial equality.`,
    "subheading": `Take small actions consistently. Achieve racial equality eventually
                  Get inspiration about what you can do to help.`
}

function TakeAction(){
    return (
        <div>
            <NavBar />
            <HeroSection heading={actionHeroData.heading} subheading={actionHeroData.subheading} />
            <ActionsGroup/>
            <ShareOneThing/>
            <Footer />
        </div>
    )
}

export default TakeAction;