import { Nav, Navbar, Container, Row, Col, Collapse } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import NewLogo from "../../assets/NewLogo.svg";
import "./NavBar.css";

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
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Col md={9}>
            <Nav className="links-ms-auto">
              <Page
                title={"Take Action"}
                links={"/takeaction"}
                className={"inner-text"}
              ></Page>
              <Page
                title={"Testimonials"}
                links={"/testimonials"}
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
            </Nav>
          </Col>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
