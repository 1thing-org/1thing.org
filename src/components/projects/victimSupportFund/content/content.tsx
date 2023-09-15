import React from "react";
import "./content.css";
import { Container, Col } from "react-bootstrap";

function Content() {
  return (
    <div className="background">
      <Container id="content-container">
        <Col>
          <p className="content-title">Victim Support Fund</p>
        </Col>
        <Col>
          <p className="content-text">
            <p>Why we have this fund</p>
            <p> Where’s the money from - Donate now!</p>
            <p>Where’s the money going - total donation for X victims</p>
            1thing.org receives donations from individuals and corporations like
            Google. We disburse the funds to victims of anti-Asian hate crimes
            in a transparent and accountable manner, and provide regular updates
            to donors and the public on the progress of the fundraising campaign
            and how the funds are being used. With careful planning and
            execution, we ensure that the funds are used effectively and
            efficiently. We ensure that victims receive support and resources to
            address their needs and challenges.
          </p>
        </Col>
      </Container>
    </div>
  );
}
export default Content;
