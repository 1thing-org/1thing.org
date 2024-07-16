import './BottomSection.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import smallLogo from "../../../../assets/home-page/smallLogo.svg";
import businessPeopleTeamwork from "../../../../assets/project-tracker/businessPeopleTeamwork.png"
import { Container, Row, Col } from 'react-bootstrap';
import Card from "react-bootstrap/Card";



function BottomSection() {
    return (
        <Container id="bottom-section">
            <Row id="project-block">
                <Col md={12} id="self-reporting-container">
                    <div className="project-h2">
                        <Card.Img
                            src={smallLogo}
                            style={{ width: "37.396px", height: "23.499px" }}
                        />

                        <Card.Title id="ProjectTracker-title-2">
                            Self-reporting feature
                        </Card.Title>
                    </div>
                </Col>


                <Col id="block-project">

                    <p className="working-text">
                        Recognizing the limitations of news media coverage,
                        1 Thing is also creating a self-reporting feature.
                        This will allow victims and witnesses of anti-Asian crimes to directly report incidents to the tracker,
                        offering a more comprehensive picture of the situation.
                        Stay informed about the feature's launch on the website.
                    </p>


                </Col>

                <Col md={12} id="support-fund-container">
                    <div className="project-h2">
                        <Card.Img
                            src={smallLogo}
                            style={{ width: "37.396px", height: "23.499px" }}
                        />

                        <Card.Title id="ProjectTracker-title-2">
                            Support Fund for Victims
                        </Card.Title>
                    </div>
                </Col>
                <div id="support-fund-content-container">
                    {/* Image Section */}
                    <Col md={6} xs={12}>
                        < Card.Img
                            id="businessPeopleTeamwork" src={businessPeopleTeamwork} alt="businessPeopleTeamwork"
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />

                    </Col>

                    {/* text section */}

                    <Col md={6} xs={12} >
                        <Card.Text id="hero-subtitle">1 Thing established a support fund for victims of anti-Asian hate crimes.
                            With over a thousand dollars already raised, the fund can assist individuals in need.
                            If you know someone who requires support, please reach out to 1 Thing.
                            You can also donate to the fund through the provided GoFundMe link.
                        </Card.Text>
                    </Col>
                </div>




            </Row>
        </Container>

    );
}



export default BottomSection;