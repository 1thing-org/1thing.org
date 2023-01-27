import React, {Component} from 'react'
import {Nav, Navbar, Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import Logo from './../../assets/logo.png';
import './NavBar.css';

function Page({title, links} : {title: string, links: string}){
    return (
        <LinkContainer to={links} className="link">
            <Nav.Link>{title}</Nav.Link>
        </LinkContainer>
    )
}

class NavBar extends Component{
    render(){
        return(
            <Navbar className="nav" bg="light" expand="lg">
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <img src={Logo} width="100" height="100" alt="1 Thing Org logo"/>
                    </Navbar.Brand>
                </LinkContainer>
                {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
                <Nav className="links ms-auto">
                    <Page title={'Take Action'} links={'/takeaction'}></Page>
                    <Page title={'Testimonials'} links={'/testimonials'}></Page>
                    <Page title={'About Us'} links={'/aboutus'}></Page>
                    <Page title={'Contact'} links={'/contact'}></Page>
                </Nav>
                {/* </Navbar.Collapse> */}
            </Navbar>
        );
    }
}

export default NavBar;