import Card from 'react-bootstrap/Card';
import './HeroSection.css';
import HeroImage from 'assets/hero.svg';

type Props = {
    heading: string;
    subheading: string;
}

function HeroSection(props:Props) {
    return(
        <Card>
            <Card.Img id="hero-image" src={HeroImage}/>
            <Card.ImgOverlay id="hero-text">
                <Card.Title id="hero-title">{props.heading}</Card.Title>
                <Card.Text id="hero-subtitle">{props.subheading}</Card.Text>
            </Card.ImgOverlay>
        </Card>
    )
}

export default HeroSection;