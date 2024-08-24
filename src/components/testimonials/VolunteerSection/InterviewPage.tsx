import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Footer from "../../../components/footer/Footer";
import NavBar from "../../../components/navbar/NavBar";
import "./InterviewPage.css";

function InterviewPage() {
  const { name, pic, interview, quote } = useParams<{
    name?: string;
    quote?: string;
    pic?: string;
    interview?: string;
  }>();
  const paragraphs = interview
    ? decodeURIComponent(interview).split("\n\n")
    : [];

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
              {paragraphs.map((para, index) => (
                <p className="interview-paragraph" key={index}>
                  {para}
                </p>
              ))}
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
