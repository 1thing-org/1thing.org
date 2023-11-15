import "./TopSection.css"
import Card from "react-bootstrap/Card";
import { Container, Col, Row, Button } from "react-bootstrap";
import smallLogo from "../../../../assets/home-page/smallLogo.svg";
import ProjectTogether from "../../../../assets/home-page/ProjectTogether.svg";

type Props = {
  heading?: string;
  secondheading?: string;
  subheading?: string;
  imageSrc: string;
  hideHeroText?: boolean;
};

function TopSection(props: Props) {
  const { heading, secondheading, subheading, imageSrc, hideHeroText } = props;
 
  return (
    <Container id="projectTogether-container" fluid>
      <Row>
        <Col className="pj-titleContainer" md={12} xxl={12}>
          <Card.Img id="hands" src={ProjectTogether} alt="hands"/>
          <Card.Title id="topSection-title">{heading}</Card.Title>

          <Card.Title className="p2">{secondheading}</Card.Title>
        </Col>

        {/* Image Section */}
        <Col md={6} xs={12}>
          <Card.Img
            src={imageSrc}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Col>

        {/* Text Section */}
        {!hideHeroText && (
          <Col
            md={6}
            xs={12}
            style={{
              paddingLeft: "40px",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <div
              className="text-section"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <div className="project-h2">
                <Card.Img
                  src={smallLogo}
                  style={{ width: "37.396px", height: "23.499px" }}
                />

                <Card.Title id="ProjectTogehter-title-2">
                  What is Project Together?
                </Card.Title>
              </div>
              <Col md={12}>
                <Card.Text id="hero-subtitle">{subheading}</Card.Text>
              </Col>
              <Button
                href="/takeaction"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  backgroundColor: "#FFC530",
                  borderColor: "#FFC530",
                  borderRadius: "2px",
                  width: "201px",
                  height: "61px",
                  fontSize: "20px",
                  color: "#372A06",
                  textAlign: "center",
                  fontFamily: "sans-serif",
                  fontStyle: "normal",
                  fontWeight: "700",
                  textTransform: "uppercase",
                }}
              >
                Try Our App
              </Button>
            </div>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default TopSection;
