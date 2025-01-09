import "./MiddleSection.css"
import { Container, Col, Row, Card } from "react-bootstrap";
import { useMediaQuery } from 'react-responsive';
import smallLogo from "../../../../assets/home-page/smallLogo.svg";
import iphones from "../../../../assets/project-tracker/iphones.png";
import imgAppStore from "../../../../assets/project-tracker/appstore.png"
import imgGooglePlay from "../../../../assets/project-tracker/googleplay.png"


type Props = {
    heading?: string;
    secondheading?: string;
    subheading?: string;
    hideHeroText?: boolean;
};

function MiddleSection(props: Props) {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const appDescription = `For even greater accessibility, 
                              1 Thing is developing a mobile app, which will be available soon. 
                              Please check their website for updates.`;
    const title = `Mobile App`;

    return (
        <Container id="projectTracker-container">
            <Row>
                <Col
                    md={6}
                    xs={12}
                    className="mb-5 mb-md-0"
                    style={{
                        paddingLeft: "40px",
                        display: "flex",
                        justifyContent: "flex-start",
                    }}
                >
                    <div
                        className="text-section"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-start",
                        }}
                    >
                        <div className="project-h2">
                            <Card.Img
                                src={smallLogo}
                                style={{ width: "37.396px", height: "23.499px" }}
                            />

                            <Card.Title id="ProjectTracker-title-2">
                                {title}
                            </Card.Title>
                        </div>
                        <Row>
                            <Col md={12}>
                                <Card.Text id="working-text">
                                    {appDescription}
                                </Card.Text>
                            </Col>
                            <Col sm={6}>
                                <a href="https://apps.apple.com/us/app/anti-asian-hate-crime-tracker" target="_blank">
                                    <Card.Img
                                        id="appstore"
                                        src={imgAppStore}
                                        alt="App Store"
                                        style={{
                                            maxWidth: "100%",
                                            height: "auto",
                                            marginTop: isMobile ? '20px' : '0'
                                        }}
                                    />
                                </a>
                            </Col>
                            <Col sm={6}>
                                <a href="https://play.google.com/store/apps/details?id=org.onething.hatecrimetracker" target="_blank">
                                    <Card.Img
                                        id="googleplay"
                                        src={imgGooglePlay}
                                        alt="Google Play Store"
                                        style={{
                                            maxWidth: "100%",
                                            height: "auto",
                                            marginTop: isMobile ? '20px' : '0'
                                        }}
                                    />
                                </a>
                            </Col>
                        </Row>
                    </div>
                </Col>

                <Col md={6} xs={12}>
                    <Card.Img
                        id="iphones"
                        src={iphones}
                        alt="iphones"
                        style={{
                            maxWidth: isMobile ? '80%' : '100%',
                            height: "auto",
                            margin: isMobile ? '0 auto' : '0',
                            marginBottom: isMobile ? '80px' : '0'
                        }}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default MiddleSection;
