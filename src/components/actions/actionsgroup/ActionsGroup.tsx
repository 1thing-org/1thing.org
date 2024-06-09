import raiseAwarenessRight from "../../../assets/take-action-page/raise-awareness-right.svg";
import supportVictim from "../../../assets/take-action-page/support-victim.svg";
import useSkillsRight from "../../../assets/take-action-page/use-skills-right.svg";
import promoteLeft from "../../../assets/take-action-page/promote-left.svg";
import smallLogo from "../../../assets/home-page/smallLogo.svg";
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
                <li><strong>Open up conversations:</strong> Share your concerns about safety in public spaces with friends and colleagues due to the rise in anti-Asian hate crimes.</li>
                <li><strong>Spark dialogue at work:</strong> Initiate conversations about anti-Asian racism with your colleagues to raise awareness and encourage understanding.</li>
                <li><strong>Be a role model:</strong> Share your personal actions against hate in team meetings to inspire others to take a stand.</li>
                <li><strong>Amplify anti-hate resources:</strong> Distribute or share anti-hate materials within your work team or organization to equip everyone with knowledge and resources.</li>
                <li><strong>Share your experiences:</strong> If you've experienced bias or discrimination, share your story and feelings with your friends and colleagues, both Asian and non-Asian, to build empathy and understanding.</li>
                <li><strong>Hold your organization accountable:</strong> Ask your leaders insightful questions about their plans to address anti-Asian racism and encourage them to take concrete action.</li>
                <li><strong>Foster informed collaboration:</strong> Inform your network about ongoing initiatives by governments and companies to combat anti-Asian racism, demonstrating broader societal concern and inspiring collective action.</li>
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
                <li><strong>Offer financial support:</strong> Contribute to organizations providing direct assistance to victims of anti-Asian hate crimes, like financial aid or legal support.</li>
                <li><strong>Participate in peaceful protests:</strong> Raise awareness and advocate for justice for victims while upholding peaceful and lawful conduct.</li>
                <li><strong>Volunteer your time:</strong> Assist established organizations working with victims by offering your skills and time for administrative support, translation services, or community outreach initiatives.</li>
                <li><strong>Practice active listening:</strong> Reach out to victims and offer a safe space to share their experiences without judgment, building trust and offering emotional support.</li>
                <li><strong>Extend a helping hand:</strong> Offer practical assistance to victims, such as helping with daily errands, transportation, or connecting them with relevant resources.</li>
                <li><strong>Remember:</strong> It's important to respect the privacy and preferences of victims. Avoid intruding or asking insensitive questions. Let the victims guide the interaction and offer support according to their needs.</li>
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
                <li><strong>Express your voice through art:</strong> Create artwork, such as paintings, drawings, or digital pieces, that convey your stance against anti-Asian hate, prejudice, and bias. Showcase your creativity and raise awareness through artistic expression.</li>
                <li><strong>Share resources:</strong>  Recommend or contribute art, websites, or books that inspire you and contribute to the fight against hate.  Use your knowledge and appreciation to connect others with valuable resources.</li>
                <li><strong>Offer pro bono support:</strong>  Utilize your analytical skills to offer free proofreading services for articles, slide decks, and other educational content.  Contribute your expertise to ensure clear and accurate information dissemination.</li>
                <li><strong>Become a data champion:</strong> Fact-check news articles, perform data analysis on relevant issues, or participate in data crawling initiatives to ensure access to accurate and insightful information.</li>
                <li><strong>Empower through technology:</strong> Develop apps, websites, or online platforms that promote understanding and combat discrimination. Use your tech skills for good.</li>
                <li><strong>Join the movement:</strong>  Propose solutions, collaborate on projects, or volunteer your time in community initiatives that address anti-Asian racism. Lend your abilities to support collective action and create positive change.</li>
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
                <li><strong>Encourage dialogue:</strong> Engage in open and respectful conversations with global majority friends about their experiences living in the US, focusing on understanding their perspectives and experiences.</li>
                <li><strong>Foster empathy:</strong> Actively listen and try to relate to the experiences and challenges faced by the AAPI community, fostering empathy and understanding.</li>
                <li><strong>Build bridges:</strong> Organize inclusive events or gatherings that bring together people from different ethnic backgrounds, creating opportunities for connection and mutual understanding.</li>
                <li><strong>Share diverse narratives:</strong>  Recommend movies, books, or other creative pieces that showcase Asian stories and cultural viewpoints, expanding your friends' and colleagues' perspectives on the diverse experiences within the AAPI community.</li>
                <li><strong>Celebrate cultural richness:</strong>  Share your appreciation for  aspects of Asian culture that you find interesting or enjoyable, inviting your non-Asian friends to explore and appreciate these diverse cultural expressions.</li>
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
