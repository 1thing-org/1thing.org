import './BottomSection.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import smallLogo from "../../../../assets/home-page/smallLogo.svg";
import businessPeopleTeamwork from "../../../../assets/project-tracker/businessPeopleTeamwork.png"
import { Container, Row, Col } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import Card from "react-bootstrap/Card";

function BottomSection() {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isDesktop = useMediaQuery({ minWidth: 768 });
    const title1 = `Self-reporting feature`;
    const descriptionText1 = `Recognizing the limitations of news media coverage,
                        1 Thing is also creating a self-reporting feature.
                        This will allow victims and witnesses of anti-Asian crimes to directly report incidents to the tracker,
                        offering a more comprehensive picture of the situation.
                        Stay informed about the feature's launch on the website.`;
    const title2 = `Support Fund for Victims`;
    const descriptionText2 = `1 Thing established a support fund for victims of anti-Asian hate crimes.
                            With over a thousand dollars already raised, the fund can assist individuals in need.
                            If you know someone who requires support, please reach out to 1 Thing.
                            You can also donate to the fund through the provided GoFundMe link.`;

    return (
        <Container id="projectTracker-container">
            {isDesktop && (
                <Row id="project-block">
                    <Col md={12} id="self-reporting-container">
                        <div className="project-h2">
                            <Card.Img
                                src={smallLogo}
                                style={{ width: "37.396px", height: "23.499px" }}
                            />

                            <Card.Title id="ProjectTracker-title-2">
                                {title1}
                            </Card.Title>
                        </div>
                    </Col>

                    <Col id="block-project">
                        <p className="working-text">
                            {descriptionText1}
                        </p>
                    </Col>

                    <Col md={12} id="support-fund-container">
                        <div className="project-h2">
                            <Card.Img
                                src={smallLogo}
                                style={{ width: "37.396px", height: "23.499px" }}
                            />

                            <Card.Title id="ProjectTracker-title-2">
                                {title2}
                            </Card.Title>
                        </div>
                    </Col>
                    <div id="support-fund-content-container">
                        <Col md={6} xs={12}>
                            <Card.Img
                                id="businessPeopleTeamwork" src={businessPeopleTeamwork} alt="businessPeopleTeamwork"
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        </Col>

                        <Col md={6} xs={12} >
                            <Card.Text id="hero-subtitle">
                                {descriptionText2}
                            </Card.Text>
                        </Col>
                    </div>
                </Row>
            )}

            {isMobile && (
                <Row>
                    <Col md={12} id="self-reporting-container">
                        <div className="project-h2">
                            <Card.Img
                                src={smallLogo}
                                style={{ width: "37.396px", height: "23.499px" }}
                            />

                            <Card.Title id="ProjectTracker-title-2">
                                {title1}
                            </Card.Title>
                        </div>
                    </Col>

                    <Col id="block-project">
                        <p className="working-text">
                            {descriptionText1}
                        </p>
                    </Col>

                    <Col md={12} id="support-fund-container">
                        <div className="project-h2">
                            <Card.Img
                                src={smallLogo}
                                style={{ width: "37.396px", height: "23.499px" }}
                            />

                            <Card.Title id="ProjectTracker-title-2">
                                {title2}
                            </Card.Title>
                        </div>
                    </Col>
                    <div id="support-fund-content-container">
                        <Col md={6} xs={12}>
                            <Card.Img
                                id="businessPeopleTeamwork" src={businessPeopleTeamwork} alt="businessPeopleTeamwork"
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                            <Card.Text id="hero-subtitle">
                                {descriptionText2}
                            </Card.Text>
                        </Col>
                    </div>
                </Row>
            )}
        </Container>
    );
}



export default BottomSection;