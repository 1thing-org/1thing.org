import raiseAwarenessRight from "../../../assets/take-action-page/raise-awareness-right.svg";
import supportVictim from "../../../assets/take-action-page/support-victim.svg";
import useSkillsRight from "../../../assets/take-action-page/use-skills-right.svg";
import promoteLeft from "../../../assets/take-action-page/promote-left.svg";
import smallLogo from "../../../assets/home-page/smallLogo.svg"
import { Card, Row, Col } from "react-bootstrap";
import "./ActionsGroup.css";

function ActionsGroup() {
  return (
    <div
      style={{ width: "100%", maxWidth: "1440px", margin: "0 auto" }}
      id="action-section"
    >
      <h3
        style={{
          marginTop: "96px",
          fontFamily: "sans-serif ",
          fontSize: "32px",
          fontStyle: "normal",
          fontWeight: "800",
          lineHeight: "40px",
          letterSpacing: "0.4px",
          marginBottom: "48px",
        }}
      >
        <img
          src={smallLogo}
          style={{ width: "37.4px", height: "23.5px" }}
          alt="1 Thing Logo"
        />
        Raise awareness
      </h3>
      <Row>
        <Col md={1}></Col>
        <Col md={3}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Card.Img
              style={{ maxWidth: "100%", height: "auto" }}
              src={raiseAwarenessRight}
            />
          </div>
        </Col>
        <Col md={7} className="d-flex align-items-center">
          <Card.Body>
            <Card.Text className="text">
              <ul>
                <li>Talk to a friend or colleague about feeling unsafe due to Anti-Asian hate crimes.</li>
                <li>Discuss the issue with coworkers.</li>
                <li>Share your efforts to combat hate in a team meeting.</li>
                <li>Distribute anti-hate resources within your team or organization.</li>
                <li>If you face bias, inform non-Asian friends and colleagues, sharing both facts and your feelings.</li>
                <li>Ask organizational leaders for concrete plans to address the issue.</li>
                <li>Keep both Asian and non-Asian friends informed about government and corporate actions against anti-Asian hate, emphasizing that this affects everyone in society.</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Col>
        <Col md={1}></Col>
      </Row>

      <h3
        style={{
          marginTop: "48px",
          fontFamily: "sans-serif",
          fontSize: "32px",
          fontStyle: "normal",
          fontWeight: "800",
          lineHeight: "40px",
          letterSpacing: "0.4px",
          marginBottom: "48px",
        }}
      >
        <img
          src={smallLogo}
          style={{ width: "37.4px", height: "23.5px" }}
          alt="1 Thing Logo"
        />
        Support Anti-Asian hate crime victims
      </h3>
      <Row>
        <Col md={1}></Col>
        <Col md={7} className="d-flex align-items-center">
          <Card.Body>
            <Card.Text className="text">
              <ul>
                <li>Donate to Anti-Asian hate crime victims.</li>
                <li>Help capture suspects.</li>
                <li>Help effort to bring justice to victims.</li>
                <li>Tell a hate incident/crime victim that you want to listen to their feelings.</li>
                <li>Tell a hate incident/crime victim that you are here to help.</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Col>
        <Col md={3}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Card.Img
              style={{ maxWidth: "100%", height: "auto" }}
              src={supportVictim}
            />
          </div>
        </Col>
        <Col md={1}></Col>
      </Row>
      <h3
        style={{
          marginTop: "48px",
          fontFamily: "sans-serif",
          fontSize: "32px",
          fontStyle: "normal",
          fontWeight: "800",
          lineHeight: "40px",
          letterSpacing: "0.4px",
          marginBottom: "48px",
        }}
      >
        <img
          src={smallLogo}
          style={{ width: "37.4px", height: "23.5px" }}
          alt="1 Thing Logo"
        />
        Use your skills
      </h3>
      <Row>
        <Col md={1}></Col>
        <Col md={3}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Card.Img
              style={{ maxWidth: "100%", height: "auto" }}
              src={useSkillsRight}
            />
          </div>
        </Col>
        <Col md={7} className="d-flex align-items-center">
          <Card.Body>
            <Card.Text className="text">
              <ul>
                <li>Create: paint, draw, or digitally make a piece of art that reflects your attitude towards asian-hate, prejudice, and bias.</li>
                <li>Share: art, websites, or books that inspire and help you.</li>
                <li>Support: use your analytical skills to proofread articles, slide decks, and other educational content.</li>
                <li>Research: fact-check news articles, perform data analysis, or implement data crawling.</li>
                <li>Develop: create apps, websites, or online platforms.</li>
                <li>Collaborate: propose solutions, help with projects, or volunteer out in the community.</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Col>
        <Col md={1}></Col>
      </Row>

      <h3
        style={{
          marginTop: "48px",
          fontFamily: "sans-serif",
          fontSize: "32px",
          fontStyle: "normal",
          fontWeight: "800",
          lineHeight: "40px",
          letterSpacing: "0.4px",
          marginBottom: "48px",
        }}
      >
        <img
          src={smallLogo}
          style={{ width: "37.4px", height: "23.5px" }}
          alt="1 Thing Logo"
        />
        Promote cross racial understanding
      </h3>
      <Row>
        <Col md={1}></Col>
        <Col md={7} className="d-flex align-items-left">
          <Card.Body>
            <Card.Text className="text">
              <ul>
                <li>Communicate: as a minority friend about their experience living in the US.</li>
                <li>Empathize: try to relate to others, share the challenges the APPI community is facing.</li>
                <li>Connect: host inclusive gatherings to connect with friends from different ethnic groups.</li>
                <li>Recommend: Asian storytelling movies. Eg: Crazy Rich Asians, The Joy Luck Club, to friends & colleagues.</li>
                <li>Invite: share something fun about Asian culture with non-Asian friends.</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Col>
        <Col md={3}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Card.Img
              style={{ maxWidth: "100%", height: "auto" }}
              src={promoteLeft}
            />
          </div>
        </Col>
        <Col md={1}></Col>
      </Row>
    </div>
  );
}

export default ActionsGroup;
