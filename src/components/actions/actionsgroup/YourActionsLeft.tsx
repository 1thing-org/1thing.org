import { Card, Container, Row, Col } from "react-bootstrap";
import "./YourActionsLeft.css";

type Props = {
  imgs: string;
  desc: string[];
  actionId: string;
};

function YourActionsLeft(props: Props) {
  return (
    <Container fluid>
      <Row>
        <Col md={6}>
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
        <Col md={6}>
          <div style={{ display: "flex", justifyContent: "left" }}>
            <Card.Img
              style={{ width: "592px", height: "334px" }}
              id={"image-" + props.actionId}
              src={props.imgs}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default YourActionsLeft;
