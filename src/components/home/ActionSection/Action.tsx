import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Action.css';

type Props = {
    desc: string;
}

function Action(props: Props) {
    return (
        <Card id="action">
            <Card.Text id="action-content">{props.desc}</Card.Text>
            <Button id="button" variant="secondary" href="#">Action Type Icon</Button>
        </Card>
    )
}

export default Action;