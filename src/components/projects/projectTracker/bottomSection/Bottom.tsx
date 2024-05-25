import './BottomSec.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import smallLogo from "../../../../assets/home-page/smallLogo.svg";
import businessPeopleTeamwork from "../../../../assets/project-tracker/businessPeopleTeamwork.png"
import { Container, Row, Col } from 'react-bootstrap';
import Card from "react-bootstrap/Card";


function Bottom() {
    return (
        <Container id="feature-section">
            <Col md={12} id="feature-container">

                <img src={smallLogo} style={{ width: '37px', height: '23.5px' }} alt="smallLogo"></img>
                <h2 className="main-title">Self Reporting Feature</h2>

            </Col>

            <Row id="project-block">
                <Col id="block-project">

                        <p className="working-text">
                            For even greater accessibility, 1 Thing is developing a mobile app,
                            which will be available soon. Please check their website for updates.
                        </p>


                </Col>

                <Col md={12} id="feature-container">

                    <img src={smallLogo} style={{ width: '37px', height: '23.5px' }} alt="smallLogo"></img>
                    <h2 className="main-title">Support Fund for Victims</h2>
                    {/* Image Section */}
                    <Col md={6} xs={12}>
                        <Card.Img
                            id="businessPeopleTeamwork" src={businessPeopleTeamwork} alt="businessPeopleTeamwork"
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    </Col>

                    {/* text section */}

                    <Col md={12}>
                        <Card.Text id="hero-subtitle">1 Thing established a support fund for victims of anti-Asian hate crimes.
                            With over a thousand dollars already raised, the fund can assist individuals in need.
                            If you know someone who requires support, please reach out to 1 Thing.
                            You can also donate to the fund through the provided GoFundMe link.
                        </Card.Text>
                    </Col>

                </Col>


            </Row>
        </Container>

    );
}



export default Bottom;