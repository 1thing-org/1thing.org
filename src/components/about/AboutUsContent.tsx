import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import heartImg from "../../assets/AboutUs/1thing heart.png";
import NavBar from '../navbar/NavBar';



const aboutUsData: {
  name: string;
  desc: string;
}[] = [
  {
    name: "About Us",
    desc: "1 Thing, a non-profit dedicated to combating Anti-Asian Hate, was founded by Li Ma, a Technical Lead Manager at Google. Recognizing the urgent need to address this social issue, Li Ma created the Anti-Asian Hate Crime Tracker to document cases and analyze hate crime trends, spreading awareness far and wide. What began as a small team of two has now grown into a dedicated group of 20 individuals, and the organization is officially registered as a non-profit company. The organization advocates for small contributions that collectively enhance racial equality.",
  },
  {
    name: "Our Mission",
    desc: "To mobilize individuals and communities to take small actions against racism and hate, and to inspire others to join the movement. Through a chain of action, sharing, and inspiration, we aim to create a positive feedback loop that aggregates small efforts into a large social movement that can make real differences in our society.",
  },
  {
    name: "Our Vision",
    desc: "Our vision is a world where everyone is treated with respect and dignity, regardless of their race, ethnicity, or background. We advocate the 1 Thing idea and use our members' expertise to create a platform that supports individuals and communities to easily implement the 1 Thing idea. We believe that by working together, we can create a more just and equitable society for all.",
  },
];

function AboutUsSection() {
  return (
    <Container id="about-us-container">
      <NavBar />
      <img className="heart"
        // src={}
        style={{
          borderRadius: '0',
         
        }}

      />
     
     
      <Row className="about-us-row">
        <Col xs={2} className="about-us-title">{aboutUsData[0].name}</Col>
        <Col xs={8} className="about-paragraph">{aboutUsData[0].desc}</Col>
      </Row>
      <Row className="about-us-row">
        <Col xs={2} className="subtitle">{aboutUsData[1].name}</Col>
        <Col xs={8} className="about-paragraph">{aboutUsData[1].desc}</Col>
      </Row>
      <Row className="about-us-row">
        <Col xs={2} className="subtitle">{aboutUsData[2].name}</Col>
        <Col xs={8} className="about-paragraph">{aboutUsData[2].desc}</Col>
      </Row>

    </Container>
  );
}

export default AboutUsSection;
