import { Nav, Navbar,  NavDropdown, Offcanvas, Container, Row, Col, Collapse } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import NewLogo from "../../assets/NewLogo.svg";
import "./NavBar.css";
import { useState } from 'react';

function Page({
  title,
  links,
  className,
}: {
  title: string;
  links: string;
  className?: string;
}) {
  return (
    <LinkContainer to={links} className={`link ${className}`}>
      <Nav.Link>{title}</Nav.Link>
    </LinkContainer>
  );
}

function NavBar() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const handleMenuToggle = () => {
    setShowOffcanvas(!showOffcanvas);
  };
  return (
    <Navbar className="nav" expand="lg">
      <Container id="navbar-container">
        <LinkContainer to="/">
          <Col md={2}>
            <Navbar.Brand className="brand-container">
              <img
                className="logo"
                src={NewLogo}
                width="100"
                height="100"
                alt="1 Thing Org logo"
              />
              <Navbar.Text className="text-container">
                <div className="logo-text">
                  1 Thing
                  <br />
                  Against
                  <br />
                  Racism
                </div>
              </Navbar.Text>
            </Navbar.Brand>
          </Col>
        </LinkContainer>
        <Col md={5}>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            id="responsive-navbar-nav-control"
            onClick={handleMenuToggle}
            
          />
           {!showOffcanvas && (
          <Navbar.Collapse id="responsive-navbar-nav" >
         <Nav className="links-ms-auto">
   
              <Page
              title={"Take Action"}
              links={"/takeaction"}
              className={"inner-text"}
              ></Page>
              <Page
              title={"About Us"}
              links={"/aboutus"}
              className={"inner-text"}
              ></Page>
              <Page
              title={"Contact"}
              links={"/contact"}
              className={"inner-text"}
              ></Page>
              <Page
              title={"Testimonial"}
              links={"/testimonials"}
              className={"inner-text"}
              ></Page>
  
          </Nav>
         </Navbar.Collapse>
         )}
         <Offcanvas placement="end" show={showOffcanvas} onHide={() => setShowOffcanvas(false)} className={showOffcanvas ? "show" : "show"} >

           <Offcanvas.Header closeButton>
              <Offcanvas.Title> <img className="offcanvas-logo" src={NewLogo} alt="Logo" /></Offcanvas.Title>
            </Offcanvas.Header>

     
          <Offcanvas.Body >
      
            <Nav className="links-ms-auto">
   
              <Page
                title={"Take Action"}
                links={"/takeaction"}
                className={"inner-text"}
              ></Page>
              <Page
                title={"About Us"}
                links={"/aboutus"}
                className={"inner-text"}
              ></Page>
              <Page
                title={"Contact"}
                links={"/contact"}
                className={"inner-text"}
              ></Page>
              <Page
                title={"Testimonial"}
                links={"/testimonials"}
                className={"inner-text"}
              ></Page>
             
            </Nav>
            </Offcanvas.Body>
            </Offcanvas>
         
        </Col>
      </Container>
    </Navbar>
  );
}

export default NavBar;
