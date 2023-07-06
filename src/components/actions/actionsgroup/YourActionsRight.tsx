import Card from "react-bootstrap/Card";
import "./YourActionsRight.css";

type Props = {
  imgs: string;
  desc: string[];
  actionId: string;
};

function YourActionsRight(props: Props) {
  return (
    <Card className="your-actions-right" id={props.actionId}>
      <Card.Img id={"image-" + props.actionId} src={props.imgs} />
      <Card.Body id={"body-" + props.actionId}>
        <Card.Text className="text">
          <ul>
            {props.desc.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </Card.Text>
      </Card.Body>{" "}
      {/* image url in css */}
    </Card>
  );
}

export default YourActionsRight;
