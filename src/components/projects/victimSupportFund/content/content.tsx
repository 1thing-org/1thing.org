import "./content.css";
import { Container, Col, Card, Row, Button } from "react-bootstrap";
import sideLogo from "../../../../assets/home-page/smallLogo.svg";
import section1 from "../../../../assets/supportFund/section1.svg";
import section2 from "../../../../assets/supportFund/section2.svg";
type Props = {
  heading?: string;
  subheading?: string;
  imageSrc: string;
  paragrah1?: string;
  paragrah2?: string;
};

function SupportFundContent(props: Props) {
  const { heading, subheading, imageSrc, paragrah1, paragrah2 } = props;

  return (
    <Container id="SupportFund-container" fluid>
      <Col id="support-titleContainer" xs={12} md={12} xxl={12}>
        <Card.Img id="hands" src={imageSrc} alt="hands" />
        <Card.Title id="topSection-title">{heading}</Card.Title>
        <Card.Title className="p2">{subheading}</Card.Title>
      </Col>

      <Container fluid>
        <Row id="support-sections">
          <Container id="main-support-content">
            <Col id="supportHeading-container">
              <Card.Img id="support-sideLogo" src={sideLogo} />
              <Card.Text id="supportHeadingText">
                Why we have this fund
              </Card.Text>
            </Col>

            <Container fluid>
              <Container className="contentRow">
                <Col xs={12} md={6}>
                  <Card.Img src={section1} />
                </Col>
                <Col xs={12} md={6}>
                  <Card.Body className="support-contents">
                    {paragrah1}
                  </Card.Body>
                </Col>
              </Container>
            </Container>
          </Container>

          <Container fluid>
            <Container id="main-support-content">
              <Col id="supportHeading-container">
                <Card.Img id="support-sideLogo" src={sideLogo} />
                <Card.Text id="supportHeadingText">
                  Where's the money from
                </Card.Text>
              </Col>

              <Container fluid>
                <Container className="contentRow">
                  <Col xs={12} md={6}>
                    <Col id="support-section2-text-container">
                      <Card.Text className="s1">
                        1thing.org receives donations from individuals and
                        corporations like Google.
                      </Card.Text>
                      <Col id="p1">
                        <span id="symbol">|</span>
                        <Card.Text className="s2">
                          Individual Online donation
                        </Card.Text>
                      </Col>
                      <Col id="p1">
                        <span id="symbol">|</span>
                        <Card.Text className="s2">
                          Corporations’ support
                        </Card.Text>
                      </Col>

                      <Col md={6} id="button-container">
                        <Button
                          id="Donate-button"
                          href="https://www.zeffy.com/donation-form/db8063f1-309d-4df7-a1a1-1a60c28fec49"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="chart-button-text">Donate Now</div>
                        </Button>
                      </Col>
                    </Col>
                  </Col>
                  <Col md={6}>
                    <Card.Img src={section2} />
                  </Col>
                </Container>
              </Container>
            </Container>
          </Container>

          <Container fluid>
            <Container id="main-support-content">
              <Col id="supportHeading-container">
                <Card.Img id="support-sideLogo" src={sideLogo} />
                <Card.Text id="supportHeadingText">
                  Where's the money going
                </Card.Text>
              </Col>

              <Container className="money-gose-content">
                <Container id="support-number">
                  <Col md={6} className="childword">
                    <h3 className="t-cases">$40,414 Funds</h3>
                    <p className="t1">Being effectively distributes</p>
                  </Col>

                  <Col md={6} className="childword">
                    <h3 className="t-cases">15 Victims</h3>
                    <p className="t1">Received help from 1thing</p>
                  </Col>
                </Container>
              </Container>
              <Card.Text id="support-paragrah">{paragrah2}</Card.Text>
            </Container>
          </Container>
        </Row>
      </Container>
    </Container>
  );
}

export default SupportFundContent;
