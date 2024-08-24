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
  const getCardLink = (name: string) => {
    // page url format example: name: "Li M." => "LiM"
    return name.slice(0, -1).split(" ").join("");
  };

  return (
    <Card id="volunteer">
      <Card.Img id="volunteer-profile-pic" src={props.pic} alt="Profile" />
      <Card.Text id="volunteer-name">{props.name}</Card.Text>
      <Card.Text id="volunteer-quote">"{props.quote}"</Card.Text>
      <Card.Link
        href={`/interviews/${getCardLink(props.name)}`}
        id="volunteer-interview"
      >
        Read More
      </Card.Link>
    </Card>
  );
}

export default Volunteer;
