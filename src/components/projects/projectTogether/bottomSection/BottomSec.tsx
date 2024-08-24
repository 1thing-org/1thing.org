import smallLogo from "../../../../assets/home-page/smallLogo.svg";
import { Container, Image, Col, Row, Card, Button } from "react-bootstrap";
import "./BottomSec.css";
import Bottom from "./Bottom";
import trumpet from "../../../../assets/home-page/trumpet.svg";
import news from "../../../../assets/home-page/news.svg";
import lightbulb from "../../../../assets/home-page/lightbulb.svg";
import puzzle from "../../../../assets/home-page/puzzle.svg";
const FeatureData: { name: string; quote: string }[] = [
  {
    name: "COMMUNITY",
    quote:
      "Find a community of people who share their passion for supporting the AAPI community.",
  },
  {
    name: "EAST NAVIGATION",
    quote: "Easily find and join projects that are already underway.",
  },
  {
    name: "INITIATE",
    quote:
      "Propose their own projects and find volunteers to help them implement them.",
  },
  {
    name: "TRACK PROGRESS",
    quote:
      "Be able to see how much progress is being made on each project, and how the project is impacting the AAPI community. ",
  },
  {
    name: "VOLUNTEER CONNECTION",
    quote:
      "It would be great to be able to connect with other volunteers who are working on similar projects. This could lead to collaboration and new ideas.",
  },
  {
    name: "SHARE EXPERIENCE",
    quote:
      "It would be great to be able to share stories and experiences of volunteering. This would help to inspire others and build a sense of community.",
  },
];
function BottomSec() {
  return (
    <div id="bottom-sections">
      <div id="core-features-section">
        <Container id="core-features-container">
          <img
            className="feature-logo"
            src={smallLogo}
            style={{ width: "37px", height: "23.5px" }}
            alt="1thing logo"
          ></img>
          <h2 className="core-features">Core Features</h2>
        </Container>
        <Container id="features">
          <Row>
            {FeatureData.map((feature, index) => (
              <Col md={6} key={index} style={{ padding: "0" }}>
                <Bottom name={feature.name} quote={feature.quote} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <div id="lower">
        <div id="core-features-lower-section">
          <Container id="core-features-container">
            <img
              className="feature-logo"
              src={smallLogo}
              style={{ width: "37px", height: "23.5px" }}
              alt="1thing logo"
            ></img>
            <h2 className="core-features">What We Can Bring</h2>
          </Container>
          <p className="bottom-text">
            There are many challenges that prevent the AAPI community and our
            allies from taking concrete actions to fight against the form of
            hate and discrimination we are facing:
          </p>
          <Row className="icon-row">
            <Col md={3} id="icon">
              <Image src={trumpet} id="icon-img" />
              <Card.Text id="icon-text">INSPIRATIONAL COMMUNITY</Card.Text>
            </Col>
            <Col md={3} id="icon">
              <Image src={news} id="icon-img" />
              <Card.Text id="icon-text">UPDATE NEWS</Card.Text>
            </Col>
            <Col md={3} id="icon">
              <Image src={lightbulb} id="icon-img" />
              <Card.Text id="icon-text">RICH IDEAS</Card.Text>
            </Col>
            <Col md={3} id="icon">
              <Image src={puzzle} id="icon-img" />
              <Card.Text id="icon-text">TRANSPARENCY</Card.Text>
            </Col>
          </Row>
        </div>
      </div>

      <div id="support">
        <div id="core-features-support-section">
          <Container id="core-features-container">
            <img
              className="feature-logo"
              src={smallLogo}
              style={{ width: "37px", height: "23.5px" }}
              alt="1thing logo"
            ></img>
            <h2 className="core-features">We appreciate your support!</h2>
          </Container>
          <p className="bottom-text">
            Project Together has the potential to make a real difference in the AAPI community.
            It will help to connect people who want to support the AAPI community and make a difference,
            and it will make it easier for people to find ways to help.
          </p>
          <Button
            id="donate-button"
            href="https://www.zeffy.com/donation-form/db8063f1-309d-4df7-a1a1-1a60c28fec49"
          >
            DONATE
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BottomSec;
