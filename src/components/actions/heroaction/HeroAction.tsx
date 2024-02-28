import Card from "react-bootstrap/Card";
import "./HeroAction.css";
import { Container } from "react-bootstrap";

type Props = {
  imageSrc: string;
};

function HeroSection(props: Props) {
  const { imageSrc } = props;

  return (
    <Container id="hero-wrapper-action">
      <Card.Text id="actionPage-text">
        There are many small actions we can take to
      </Card.Text>
      <Card.Text id="actionPage-text">
      make progress towards racial equality.
      </Card.Text>
    </Container>
  );
}

export default HeroSection;
