import Card from "react-bootstrap/Card";
import "./Story.css";

type Props = {
  name: string;
  quote: string;
  picUrl: string;
  link: string;
};

function Story(props: Props) {
  return (
    <Card id="story">
      <Card.Img id="profile-pic" src={props.picUrl} />
      <Card.Text id="story-name">{props.name}</Card.Text>
      <Card.Text id="story-quote">{props.quote}</Card.Text>
      <Card.Link id="story-link" href={props.link}>
        Read More
      </Card.Link>
    </Card>
  );
}

export default Story;
