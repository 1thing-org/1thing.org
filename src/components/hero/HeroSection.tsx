import Card from 'react-bootstrap/Card';
import HeroImage from 'assets/hero.svg';
import {Container, Col, Row} from 'react-bootstrap';
import './HeroSection.css'

type Props = {
    heading: string;
    subheading: string;
}

function HeroSection(props:Props) {
    return(
<Card id ="hero-card">
<div className="hero-wrapper" style={{ position: 'relative', maxWidth: '1440px' }}>
    <Card.Img id="hero-image" src={HeroImage}  style={{ width: '100%' }}  />
    <div className="overlay-container">
      <Container>
        <Row className="justify-content-center align-items-center">
        <Col xs={12} sm={8} md={6} lg={4} xl={3}>
            <Card.ImgOverlay id="hero-text-container" >
            
              <Card.Title id="hero-title">{props.heading}</Card.Title>
          
              <Card.Text id="hero-subtitle">{props.subheading}</Card.Text>
              
            </Card.ImgOverlay>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
</Card>
    )
}

export default HeroSection;