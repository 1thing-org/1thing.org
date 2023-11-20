import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { InterviewContext } from "./InterviewContext";
import "./VolunteerSection.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type Props = {
  name: string;
  quote: string;
  pic: string;
  interview: string;
};

function Volunteer(props: Props) {
  const { setInterviewData } = useContext(InterviewContext);
  const navigate = useNavigate();

  const handleNavigate = () => {
    setInterviewData({
      name: props.name,
      interview: props.interview,
      pic: props.pic,
      quote: props.quote,
    });
    navigate(`/interviews/${props.name}`);
  };

  return (
    <Card id="volunteer">
      <Card.Img id="volunteer-profile-pic" src={props.pic} alt="Profile" />
      <Card.Text id="volunteer-name">{props.name}</Card.Text>
      <Card.Text id="volunteer-quote">{props.quote}</Card.Text>
      <Card.Link onClick={handleNavigate} id="volunteer-interview">
        Read More
      </Card.Link>
    </Card>
  );
}

export default Volunteer;
