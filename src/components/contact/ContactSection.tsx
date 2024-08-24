import Card from "react-bootstrap/Card";
import "./ContactSection.css";
import smallLogo from "../../assets/home-page/smallLogo.svg";
import { Container, Col, Row, Button } from "react-bootstrap";
import contactimg from "../../assets/contact.svg";
import ContactOneThing from "../about/ContactUs";
type Props = {
  heading?: string;
  subheading?: string;
  imageSrc: string;
  hideHeroText?: boolean;
};

function ContactSection(props: Props) {
  const { heading, subheading, imageSrc, hideHeroText } = props;

  return (
    <Container id="contact-container">
      <Col id="title-Container">
        <Row>
          <Card.Title id="contact-title">{heading}</Card.Title>
        </Row>
        <Row>
          <p className="subtitlep">
            We ensure that victims receive support and resources to address
            their needs and challenges.
          </p>
        </Row>
      </Col>

      {/* Image + text Section */}
      <Container id="how-we-can-help-container">
        <Container id="help-container">
          <img
            className="feature-logo"
            src={smallLogo}
            style={{ width: "37px", height: "23.5px" }}
            alt="1thing logo"
          ></img>
          <h2 className="core-features">How can we help</h2>
        </Container>
        <Row id="imageSection">
          <Col sm={12} md={6} className="imgSec">
            <Card.Img src={contactimg} className="imgSec" />
          </Col>
          <Col sm={12} md={6} className="textSec">
            <p className="img-text">
              1thing.org receives donations from individuals and corporations
              like Google. We disburse the funds to victims of anti-Asian hate
              crimes in a transparent and accountable manner, and provide
              regular updates to donors and the public on the progress of the
              fundraising campaign and how the funds are being used. With
              careful planning and execution, we ensure that the funds are used
              effectively and efficiently. We ensure that victims receive
              support and resources to address their needs and challenges.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ContactSection;
