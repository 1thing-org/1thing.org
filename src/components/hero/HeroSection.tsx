import Card from "react-bootstrap/Card";
import "./HeroSection.css";
import smallLogo from "../../assets/home-page/smallLogo.svg";
import { Container, Col, Row, Button } from "react-bootstrap";

type Props = {
  heading?: string;
  subheading?: string;
  imageSrc: string;
  hideHeroText?: boolean;
};

function HeroSection(props: Props) {
  const { heading, subheading, imageSrc, hideHeroText } = props;

  return (
    <Container id="hero-container" fluid>
      <Row id="middle">
        <Col className="titleContainer" md={12} xxl={12}>
          <Card.Title id="hero-title">{heading}</Card.Title>
          <p className="p2">Together we can make a real difference.</p>
        </Col>

        {/* Image Section */}
        <Card.Img
          src={imageSrc}
          style={{ width: "100%", maxWidth: "522px", objectFit: "cover" }}
        />

        {/* Text Section */}
        {!hideHeroText && (
          <Col
            md={4}
            xs={12}
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
                padding: "0",
                gap: "4px",
              }}
            >
              <div className="h2">
                <Card.Img
                  src={smallLogo}
                  style={{ width: "37.396px", height: "23.499px" }}
                />
                <Card.Title className="title-2">Who We Are?</Card.Title>
              </div>
              <Col md={12}>
                <Card.Text id="hero-subtitle">{subheading}</Card.Text>
              </Col>
              <Button className="hero-button" href="/takeaction">
                Take Action
              </Button>
            </div>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default HeroSection;
