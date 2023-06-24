import Card from "react-bootstrap/Card";
import { Container, Col, Row } from "react-bootstrap";
import "./HeroSection.css";

type Props = {
  heading?: string;
  subheading?: string;
  imageSrc: string;
};

function HeroSection(props: Props) {
  const { heading, subheading, imageSrc } = props;

  return (
    <div
      className="hero-wrapper"
      style={{ position: "relative", maxWidth: "1440px" }}
    >
      <Card.Img id="hero-image" src={imageSrc} style={{ width: "100%" }} />

      {/* Check if heading is present before rendering the overlay container */}
      {heading && (
        <div className="overlay-container">
          <Container>
            <Row className="justify-content-center align-items-center">
              <Col xs={12} sm={8} md={6} lg={4} xl={3}>
                <Card.ImgOverlay id="hero-text-container">
                  <Card.Title id="hero-title">{heading}</Card.Title>
                  <Card.Text id="hero-subtitle">{subheading}</Card.Text>
                </Card.ImgOverlay>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
}

export default HeroSection;
