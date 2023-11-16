import Card from 'react-bootstrap/Card';
import './BottomSec.css';

type Props = {

    name: string;
    quote: string;
}

function Bottom(props: Props) {
    return (
        <Card id="feature">
            <Card.Text id="feature-name">
                <span className="symbol-style">|</span>{props.name}
            </Card.Text>
            <Card.Text id="feature-quote">{props.quote}</Card.Text>
        </Card>
    )
}

export default Bottom;