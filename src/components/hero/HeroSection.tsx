import Card from "react-bootstrap/Card";
import "./HeroSection.css";

type Props = {
  heading?: string;
  subheading?: string;
  imageSrc: string;
};

function HeroSection(props: Props) {
  const { heading, subheading, imageSrc } = props;

  return (
    <Card id="hero-card">
      <div className="title-container">
        <Card.Title id="hero-title">{heading}</Card.Title>
        <p className="p2">Together we can make a real difference.</p>
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
