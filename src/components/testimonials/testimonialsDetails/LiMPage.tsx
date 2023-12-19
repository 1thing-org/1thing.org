import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../footer/Footer";
import NavBar from "../../navbar/NavBar";
import { volunteerData } from "../VolunteerSection/VolunteerSection";
import "../VolunteerSection/InterviewPage.css";

function LiMPage() {
  const name = volunteerData[0].name;
  const quote = volunteerData[0].quote;
  const pic = volunteerData[0].pic;
  const interview = volunteerData[0].interview;
  const paragraphs = interview.split("\n");

  return (
    <div>
      <NavBar />
      <Container className="interview-container">
        <Container className="interview-introduction">
          <Row>
            <Col md={5} className="interview-profile-container">
              <img
                className="interview-profile"
                src={decodeURIComponent(pic)}
                alt={`${name}'s pic`}
              />
            </Col>
            <Col md={7} className="interview-brief-introduction">
              <h1 className="interview-name">{name}</h1>
              <p className="interview-quote">"{quote}"</p>
            </Col>
          </Row>
        </Container>
        <Container className="interview-detials-container">
          <Container className="interview-paragraph-container">
            <Col className="interview-paragraph">
              {paragraphs.map((para, index) => (
                <p className="interview-paragraph" key={index}>
                  {para}
                  <br />
                </p>
              ))}
              <br />
              <p className="interview-paragraph interview-name-bottom">
                {name}
              </p>
            </Col>
          </Container>
        </Container>
      </Container>

      <Footer />
    </div>
  );
}
export default LiMPage;
