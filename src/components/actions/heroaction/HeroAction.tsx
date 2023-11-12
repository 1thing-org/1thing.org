import Card from "react-bootstrap/Card";
import "./HeroAction.css";

type Props = {
  imageSrc: string;
};

function HeroSection(props: Props) {
  const { imageSrc } = props;

  return (
    <div
      className="hero-wrapper-action"
      style={{ position: "relative", maxWidth: "1440px" }}
    >
      <Card.Img id="hero-image" src={imageSrc} style={{ width: "100%" }} />
    </div>
  );
}

export default HeroSection;
