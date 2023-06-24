import React from 'react';
import './WhoWeAre.css';
import { Container, Row, Col } from "react-bootstrap";

function WhoWeAre() {
    return (
        <div className='background'>
            <Container id='who-container'>
                <Col>
                    <p className='who-title'>1 Thing Against Racism</p>
                </Col>
                <Col>
                    <p className='who-text'>We’re a grassroots, non-profit organization of volunteers dedicated to fighting anti-Asian racism.
                        We believe ending all forms of racism and hate begins with uniting people through compassion, awareness,
                        and advocacy. Together we can make the world a more beautiful place — one thing at a time.
                    </p>
                </Col>
            </Container>
        </div>
    )
}
export default WhoWeAre;