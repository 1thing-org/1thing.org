import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import './HeroSection.css';
import HeroImage from 'assets/hero-placeholder.png';

type Props = {
    heading: string;
    subheading: string;
}

class HeroSection extends Component<Props> {
    constructor(props: Props){
        super(props);
    }

    render() {
        return(
            <Card>
                <Card.Img id="hero-image" src={HeroImage}/>
                <Card.ImgOverlay id="hero-text">
                    <Card.Title id="hero-title">{this.props.heading}</Card.Title>
                    <Card.Text id="hero-subtitle">{this.props.subheading}</Card.Text>
                </Card.ImgOverlay>
            </Card>
            
        )
    }
}

export default HeroSection;