import "./WorkingOn.css";
import supportFund from "../../../assets//home-page/supportFund.png";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import logo from "../../../assets/home-page/smallLogo.svg";
import project_together from '../../../assets/home-page/ProjectTogether.svg';
import { Container, Row, Col } from 'react-bootstrap';

function WorkingOn() {
  return (
    <Container id="workingOn-section">
      <Col md={12} id="working-on-container">
      
        <img src={logo} style={{ width: '37px', height: '23.5px' }} alt="1thinglogo"></img>
        <h2 className="main-title">We're also Working on:</h2>
        
      </Col>

      <Row id="project-block">
        <Col id="block-project">
          <img id="workingOn-pic" src={project_together} alt="Project Together"/>
          <div id="inner">
            <h2 className="title">Together</h2>
            <p className="working-text">
              Together is a volunteers' social network we are developing, where everybody can share their actions, 
              inspire or be inspired, and contribute to their favorite causes. The mobile app will serve as an 
              online community where people can easily implement the 1 Thing idea, and make real difference 1 Thing at a time.
            </p>
            <Link className="link" to="/projects/project-together">Learn More</Link>
          </div>
        </Col>

        <Col id="block-supporting">
          <img id="supportFund-pic" src={supportFund} alt="Victim Support Fund" />
          <div id="inner">
            <h2 className="support-fund-title">Victim Support Fund</h2>
            <p className="working-text">
              As a non-profit organization, 1 Thing Org uses donations from individuals and corporations to support victims of anti-Asian hate crimes. We carefully plan and distribute the funds promptly to victims in urgent need. We are transparent and accountable in our disbursement of funds, regularly updating donors and the public on our progress and how we use the money.
            </p>
            <Link className="link" to="/projects/victim-support-fund">Learn More</Link>
          </div>
        </Col>
      </Row>
    </Container>

  );
}
export default WorkingOn;
