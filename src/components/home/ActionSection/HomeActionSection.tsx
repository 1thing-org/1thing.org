import React from "react";
import a1 from "../../../assets/home-page/a1.svg";
import a2 from "../../../assets/home-page/a2.svg";
import a3 from "../../../assets/home-page/a3.svg";
import a4 from "../../../assets/home-page/a4.svg";
import backgroundImage from "../../../assets/home-page/action.svg";
import "./HomeActionSection.css";
import { Button, Container, Image, Col, Row, Card } from "react-bootstrap";

function HomeActionSection() {
  return (
    <Container id="home-action-container">
      <Row className="align-items-center" id="action-row">
        <Col lg={6} md={12} className="p-0 text-start order-md-1">
          <div>
            <Image id="left-image" src={backgroundImage} />
          </div>
        </Col>

        <Col lg={6} md={8} className="p-0 text-start order-md-2">
          <Col id="right-side-container">
            <Col id="box-1">
              <Card.Title id="action-title">
                Small actions, big changes.
              </Card.Title>
              <Card.Text id="action-body-text">
                By encouraging everyone to make one small but meaningful
                contribution we can create significant change.
              </Card.Text>
            </Col>
            <Col id="small-action-container">
              <Row className="align-items-center">
                <Col id="step-action">
                  <Image src={a1} id="action-image" />
                  <Card.Text id="small-action-text">Raise awareness</Card.Text>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col id="step-action">
                  <Image src={a2} id="action-image" />
                  <Card.Text id="small-action-text">
                    Support victims of anti-Asian hate
                  </Card.Text>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col id="step-action">
                  <Image src={a3} id="action-image" />
                  <Card.Text id="small-action-text">
                    Use your expertise
                  </Card.Text>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col id="step-action">
                  <Image src={a4} id="action-image" />
                  <Card.Text id="small-action-text">
                    Promote cross-racial understanding
                  </Card.Text>
                </Col>
              </Row>
            </Col>
            <Button className="take-action-button" href="/takeaction">
              Take Action
            </Button>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeActionSection;
