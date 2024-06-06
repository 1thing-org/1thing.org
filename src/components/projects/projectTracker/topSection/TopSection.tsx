import './TopSection.css';
import Card from "react-bootstrap/Card";
import { Container, Col, Row, Button } from "react-bootstrap";
import smallLogo from "../../../../assets/home-page/smallLogo.svg";
import trackerLogo from "../../../../assets/project-tracker/trackerLogo.png";
import project_together from "../../../../assets/home-page/ProjectTogether.svg";
import mac from "../../../../assets/project-tracker/mac.png"


type Props = {
    heading?: string;
    secondheading?: string;
    subheading?: string;
    imageSrc: string;
    hideHeroText?: boolean;
};

function TopSection(props: Props) {
    const { heading, secondheading, subheading, imageSrc, hideHeroText } = props;

    return (
        <Container id="projectTracker-container" >
            <Row>
                <Col className="pj-titleContainer" md={12} xxl={12}>
                    <Card.Img id="eye" src={trackerLogo} alt="eye"/>
                    <Card.Title id="topSection-title">{heading}</Card.Title>

                    <p className="p2">Anti-Asian Hate Crime Tracker is a first-of-its-kind website
                        gathers anti-Asian crime incidents reported by credible news sources</p>
                </Col>

                <Col md={12} id="what-is-tracker">
                    <div className="project-h2">
                        <Card.Img
                            src={smallLogo}
                            style={{width: "37.396px", height: "23.499px"}}
                        />

                        <Card.Title id="ProjectTracker-title-2">
                            What is Anti-Asian Hate Crime Tracker
                        </Card.Title>
                    </div>

                    <div className="proeject-description">
                        <p id="working-text">
                            Despite reduced media coverage,
                            anti-Asian hate crimes continue to occur daily across North America.
                            These incidents often involve violence and robberies targeting Asian elders and businesses,
                            but they may not always be categorized as hate crimes.
                            It's important to recognize that these incidents are likely motivated by anti-Asian bias,
                            even if they don't meet specific legal definitions.
                            <br/>
                            <br/>
                            To raise awareness of this ongoing problem,
                            1 Thing Org created the Anti-Asian Hate Crime Tracker.
                            This first-of-its-kind website gathers anti-Asian crime incidents reported by credible news
                            sources,
                            providing insights into their trends and geographic distribution.
                        </p>

                        <div id="picture-container">
                            <img id="mac" src={mac} alt="mac"/>
                        </div>
                        <div id="button-container">
                            <Button className="tracker-button"
                                    href="/takeaction"

                            >
                                Visit Tracker Website
                            </Button>
                        </div>

                        </div>

                </Col>



            </Row>
        </Container>
    );
}

export default TopSection;
