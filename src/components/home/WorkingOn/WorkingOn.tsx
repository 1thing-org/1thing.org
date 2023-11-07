
import "./WorkingOn.css";
import placeholderimg from "../../../assets//home-page/working-on-placeholder.svg";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React, { useState, useEffect } from "react";
import logo from "../../../assets/home-page/smallLogo.svg"
import project_together from '../../../assets/home-page/ProjectTogether.svg'
import { Container, Row, Col } from 'react-bootstrap'

function WorkingOn() {
  return (
    <div id="workingOn-section">
    <Container id="working-on-container">
      
        <img src={logo} style={{ width: '37px', height: '23.5px' }}></img>
        <h2 className="main-title">We're also Working on:</h2>
      
    </Container>

      <Col> 
      <img className="left-image" src={project_together} alt="Left Image" />
      <h2 className="title">Project Together</h2>
      <p className="working-text">
            A volunteer's social network, where everybody can share their actions, inspire or be inspired, and contribute to their favorite causes. The mobile app will serve as an online community where people can easily exercise 1 Thing idea, make real difference 1 thing at time.
          </p>
          <br></br>
          <Link to="/projects/project-together">Learn More</Link>
      </Col>

      <Col>
      <img className="right-image" src={placeholderimg} alt="Right Image" />
          <h2 className="title">Victim Support Fund</h2>
          <p className="working-text">
            As a non-profit organization, 1 Thing Org uses donations from individuals and corporations to support victims of anti-Asian hate crimes. We carefully plan and distribute the funds promptly to victims in urgent need. We are transparent and accountable in our disbursement of funds, regularly updating donors and the public on our progress and how we use the money.
          </p>
          <br></br>
          <Link to="/projects/victim-support-fund">Learn More</Link>
      </Col>


       {/* <div className="images">
      <div className="image-container"> */}
        
     {/* <div className="image-container"> */}
   </div>

  );
}
export default WorkingOn;
