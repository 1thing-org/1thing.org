import React, {Component} from 'react'
import {Nav, Navbar, Container} from 'react-bootstrap';
import Logo from './../../assets/logo.png';
import './NavBar.css';

class NavBar extends Component{
    render(){
        return(
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={Logo} width="100" height="100" alt="1 Thing Org logo"/>
                    </Navbar.Brand>

                    {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
                    <Nav className="ml-auto">
                        <Nav.Link href="#takeaction">Take Action</Nav.Link>
                        <Nav.Link href="#testimonials">Testimonials</Nav.Link>
                        <Nav.Link href="#aboutus">About Us</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                    {/* </Navbar.Collapse> */}
                </Container>
            </Navbar>
        );
    }
}

export default NavBar;