import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Footer from "../../../components/footer/Footer";
import NavBar from "../../../components/navbar/NavBar";
import "./InterviewPage.css";

function InterviewPage() {
  const { name, pic, interview } = useParams<{
    name?: string;
    quote?: string;
    pic?: string;
    interview?: string;
  }>();
  const paragraphs = interview
    ? decodeURIComponent(interview).split("\n\n")
    : [];

  if (!name || !pic || !interview) {
    // Handle the case when name or quote is undefined
    return <div>Invalid URL parameters.</div>;
  }

  return (
    <div>
      <NavBar />
      <Container>
        <Row>
          <Col>
            <h1 className="interview-title">{name}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              className="interview-profile"
              src={decodeURIComponent(pic)}
              alt={`${name}'s pic`}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            {paragraphs.map((para, index) => (
              <p className="interview-paragraph" key={index}>
                {para}
              </p>
            ))}
            {/* Display the interview content here */}
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
export default InterviewPage;
