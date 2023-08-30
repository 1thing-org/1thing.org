import React from "react";
import a1 from "../../../assets/home-page/a1.svg";
import a2 from "../../../assets/home-page/a2.svg";
import a3 from "../../../assets/home-page/a3.svg";
import a4 from "../../../assets/home-page/a4.svg";
import backgroundImage from "../../../assets/home-page/action.svg";
import "./HomeActionSection.css";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

function HomeActionSection() {
  return (
    <Container id="home-action-container">
      <Row className="m-0">
        <Col
          xs={3}
          md={6}
          className="p-0 text-start order-2 order-md-1"
          style={{ width: "50%" }}
        >
          <Card.Title id="action-title">Small Actions. Big Changes</Card.Title>
          <Card.Text id="action-body-text">
            By encouraging everyone to make one small but meaningful
            contribution we can create significant change.
          </Card.Text>
          <div id="small-action-container">
            <Row className="align-items-center">
              <Col xs={4} sm={5} md={3} className="p-0">
                <Image src={a1} id="action-image" />
              </Col>
              <Col xs={1} sm={1} md={8} className="p-0">
                <Card.Text id="small-action-text">Raise awareness</Card.Text>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col xs={4} sm={5} md={3} className="p-0">
                <Image src={a2} id="action-image" />
              </Col>
              <Col xs={1} sm={1} md={8} className="p-0">
                <Card.Text id="small-action-text">
                  Support victims of anti-Asian hate
                </Card.Text>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col xs={4} sm={5} md={3} className="p-0">
                <Image src={a3} id="action-image" />
              </Col>
              <Col xs={1} sm={1} md={8} className="p-0">
                <Card.Text id="small-action-text">Use your expertise</Card.Text>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col xs={4} sm={5} md={3} className="p-0">
                <Image src={a4} id="action-image" />
              </Col>
              <Col xs={1} sm={1} md={8} className="p-0">
                <Card.Text id="small-action-text">
                  Promote cross-racial understanding
                </Card.Text>
              </Col>
            </Row>
          </div>
        </Col>

        <Col md={6} className="p-0 text-end order-1 order-md-2">
          <div>
            <Image id="right-image" src={backgroundImage} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeActionSection;
