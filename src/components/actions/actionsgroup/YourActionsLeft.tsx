import Card from "react-bootstrap/Card";
import "./YourActionsLeft.css";

type Props = {
  imgs: string;
  desc: string[];
  actionId: string;
};

function YourActionsLeft(props: Props) {
  return (
    <Card className="your-actions-left" id={props.actionId}>
      <Card.Body id={"body-" + props.actionId}>
        <Card.Text className="text">
          <ul>
            {props.desc.map((item, index) => {
              return (
                <li key={index}>
                  <span>{index + 1}.</span> &nbsp;{item}
                </li>
              );
            })}
          </ul>
        </Card.Text>
      </Card.Body>
      <Card.Img id={"image-" + props.actionId} src={props.imgs} />
    </Card>
  );
}

export default YourActionsLeft;
