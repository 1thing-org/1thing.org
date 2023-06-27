import React from "react";
import "./content.css";
import { Container, Row, Col } from "react-bootstrap";

function Content() {
  return (
    <div className="background">
      <Container id="content-container">
        <Col>
          <p className="content-title">Project Together</p>
        </Col>
        <Col>
          <p className="content-text">
            <p>
              Project Together is a mobile app that connects people who want to
              support the AAPI community. With Project Together, users can:
              <ul>
                <li>
                  Find a community of people who share their passion for
                  supporting the AAPI community.
                </li>
                <li>
                  Easily find and join projects that are already underway.
                </li>
                <li>
                  Propose their own projects and find volunteers to help them
                  implement them.
                </li>
              </ul>
            </p>
          </p>
        </Col>
      </Container>
    </div>
  );
}
export default Content;
