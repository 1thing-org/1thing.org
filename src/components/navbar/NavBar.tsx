import React, {Component} from 'react'
import {Nav, Navbar, Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import Logo from './../../assets/logo.png';
import './NavBar.css';

class NavBar extends Component{
    render(){
        return(
            <Navbar bg="light" expand="lg" className="nav" >
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <img src={Logo} width="100" height="100" alt="1 Thing Org logo"/>
                    </Navbar.Brand>
                </LinkContainer>

                {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
                <Nav className="links ms-auto">
                    <LinkContainer to="/takeaction" className="link">
                        <Nav.Link>Take Action</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/testimonials" className="link">
                        <Nav.Link>Testimonials</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/aboutus" className="link">
                        <Nav.Link>About Us</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contact" className="link">
                        <Nav.Link>Contact</Nav.Link>
                    </LinkContainer>
                </Nav>
                {/* </Navbar.Collapse> */}
            </Navbar>
        );
    }
}

export default NavBar;