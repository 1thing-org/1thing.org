import Card from "react-bootstrap/Card";
import { Container, Col, Row } from "react-bootstrap";
import "./HeroSection.css";
import { title } from "process";

type Props = {
  heading?: string;
  subheading?: string;
  imageSrc: string;
};

function HeroSection(props: Props) {
  const { heading, subheading, imageSrc, } = props;

  return (
    <Card id="hero-card">
      <div className="title-container">
        <Card.Title id="hero-title">{heading}</Card.Title>
      </div>

      <div className="hero-image-container">
        <Card.Img src={imageSrc} />
        <div className="hero-text-container">
          <Card.Title className="title-2">1 Thing Against Racism</Card.Title>
          <Card.Text id="hero-subtitle">{subheading}</Card.Text>
        </div>
      </div>
    </Card>
  );
}

export default HeroSection;
