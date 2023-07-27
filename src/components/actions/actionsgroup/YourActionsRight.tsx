import { Card, Container, Row, Col } from "react-bootstrap";
import "./YourActionsRight.css";

type Props = {
  imgs: string;
  desc: string[];
  actionId: string;
};

function YourActionsRight(props: Props) {
  return (
    <Container fluid>
      <Row>
        <Col md={1}></Col>
        <Col md={5}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Card.Img
              style={{ maxWidth: "100%", height: "auto" }}
              id={"image-" + props.actionId}
              src={props.imgs}
            />
          </div>
        </Col>
        <Col md={5} className="d-flex align-items-center">
          <Card.Body id={"body-" + props.actionId}>
            <Card.Text className="text">
              <ul>
                {props.desc.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </Card.Text>
          </Card.Body>
        </Col>
        <Col md={1}></Col>
      </Row>
    </Container>
  );
}

export default YourActionsRight;
