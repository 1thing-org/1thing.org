import { Nav, Navbar, Offcanvas, Container, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../../assets/logo.svg";
import "./NavBar.css";
import { useState } from "react";
import Page from "./Page";
import Dropdown from "./Dropdown";

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
                src={logo}
                width="100"
                height="100"
                alt="1 Thing Org logo"
              />
            </Navbar.Brand>
          </Col>
        </LinkContainer>
        <Col sm={7} md={5} className="link-container">
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            id="responsive-navbar-nav-control"
            onClick={handleMenuToggle}
          />
          {!showOffcanvas && (
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="links-ms-auto">
                <Page
                  title={"About Us"}
                  links={"/aboutus"}
                ></Page>
                <Page
                  title={"Take Action"}
                  links={"/takeaction"}
                ></Page>
                <Dropdown
                  title="Our Projects"
                  dropdownItems={[
                    {
                      title: "Hate Crime Tracker",
                      links: "/projects/project-tracker"
                    },
                    {
                      title: "Victim Support Fund",
                      links: "/projects/victim-support-fund"
                    },
                    {
                      title: "Project Together",
                      links: "/projects/project-together"
                    }
                  ]}
                ></Dropdown>
                <Page
                  title={"Testimonial"}
                  links={"/testimonials"}
                ></Page>
                <Page
                  title={"Contact"}
                  links={"/contact"}
                ></Page>
              </Nav>
            </Navbar.Collapse>
          )}
          <Offcanvas
            placement="end"
            show={showOffcanvas}
            onHide={() => setShowOffcanvas(false)}
            className={showOffcanvas ? "show" : "show"}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                {" "}
                <img className="offcanvas-logo" src={logo} width="100"
                  height="100" alt="Logo" />
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="fixed-nav">
                <Page
                  title={"About Us"}
                  links={"/aboutus"}
                ></Page>
                <Page
                  title={"Take Action"}
                  links={"/takeaction"}
                ></Page>
                <Page
                  title={"Testimonial"}
                  links={"/testimonials"}
                ></Page>
                <Page
                  title={"Contact"}
                  links={"/contact"}
                ></Page>
                <Dropdown
                  title="Our Projects"
                  dropdownItems={[
                    {
                      title: "Hate Crime Tracker",
                      links: "/projects/project-tracker"
                    },
                    {
                      title: "Victim Support Fund",
                      links: "/projects/victim-support-fund"
                    },
                    {
                      title: "Project Together",
                      links: "/projects/project-together"
                    }
                  ]}
                ></Dropdown>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </Col>
      </Container>
    </Navbar>
  );
}

export default NavBar;
