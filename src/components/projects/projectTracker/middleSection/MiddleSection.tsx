import "./MiddleSection.css"
import { Container, Col, Row, Card } from "react-bootstrap";
import smallLogo from "../../../../assets/home-page/smallLogo.svg";
import iphones from "../../../../assets/project-tracker/iphones.png";
import stores from "../../../../assets/project-tracker/stores.png"


type Props = {
    heading?: string;
    secondheading?: string;
    subheading?: string;

    hideHeroText?: boolean;
};

function MiddleSection(props: Props) {

    return (
        <Container id="projectTogether-container" fluid>
            <Row>
                {/* Text Section */}
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
                                Mobile App is on its way
                            </Card.Title>
                        </div>
                        <Col md={12}>
                            <Card.Text id="hero-subtitle"> For even greater accessibility,
                                1 Thing is developing a mobile app,
                                which will be available soon.
                                Please check their website for updates.</Card.Text>
                        </Col>
                        <Card.Img
                            id="stores" 
                            src={stores} 
                            alt="stores"
                            style={{ maxWidth: "100%", height: "auto" }}
                        />
                    </div>
                </Col>

                {/* Image Section */}
                <Col md={6} xs={12}>
                    <Card.Img
                        id="iphones" 
                        src={iphones} 
                        alt="iphones"
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default MiddleSection;
