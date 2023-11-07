import Card from "react-bootstrap/Card";
import "./VolunteerSection.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type Props = {
  name: string;
  quote: string;
  pic: string;
  interview: string;
};

function Volunteer(props: Props) {
  return (
    <Card id="volunteer">
      <Card.Img id="volunteer-profile-pic" src={props.pic} alt="Profile" />
      <Card.Text id="volunteer-name">{props.name}</Card.Text>
      <Card.Text id="volunteer-quote">{props.quote}</Card.Text>
      <Card.Link
        href={`/interviews/${props.name}/${encodeURIComponent(
          props.interview
        )}/${encodeURIComponent(props.pic)}/${encodeURIComponent(props.quote)}`}
        id="volunteer-interview"
      >
        Read More
      </Card.Link>
    </Card>
  );
}

export default Volunteer;
