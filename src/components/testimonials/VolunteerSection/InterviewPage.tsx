import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../footer/Footer";
import NavBar from "../../navbar/NavBar";
import { InterviewContext } from "./InterviewContext";
import "./InterviewPage.css";

function InterviewPage() {
  const { interviewData } = useContext(InterviewContext);
  const name = interviewData.name;
  const pic = interviewData.pic;
  const interview = interviewData.interview;
  const quote = interviewData.quote;
  if (!name || !pic || !interview || !quote) {
    // Handle the case when name or quote is undefined
    return <div>Invalid URL parameters.</div>;
  }

  return (
    <div>
      <NavBar />
      <Container className="interview-container">
        <Container className="interview-introduction">
          <Row>
            <Col md={5}>
              <img
                className="interview-profile"
                src={decodeURIComponent(pic)}
                alt={`${name}'s pic`}
              />
            </Col>
            <Col className="interview-brief-introduction">
              <h1 className="interview-name">{name}</h1>
              <p className="interview-quote">"{quote}"</p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row></Row>
          <Row>
            <Col>
              <p className="interview-paragraph">{interview}</p>
              <p className="interview-paragraph interview-name-bottom">
                {name}
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      
      <Footer />
    </div>
  );
}
export default InterviewPage;
