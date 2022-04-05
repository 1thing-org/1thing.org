import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Input,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

class OneThingFooter extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer">
          <Container>
            <Row className="row-grid align-items-center mb-5">
              <Col lg="6">
                <h3 className=" text-primary font-weight-light mb-2">
                  Stay tune and sign up for newsletter.✊
                </h3>
                <Row>
                  <Col lg="9">
                    <Input placeholder="Email address"></Input>
                  </Col>
                  <Col lg="1">
                    <Button color="onething" type="button">
                      {" "}
                      Subscribe
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col className="text-lg-center align-items-lg-center" lg="6">
                <Nav className=" nav-footer justify-content-end">
                  <NavItem>
                    <NavLink href="mailto:info@1thing.org" target="_blank">
                      <i className="fa fa-envelope" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://twitter.com/1Thing_Org"
                      target="_blank"
                    >
                      <i className="fa fa-twitter" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://www.linkedin.com/company/1-thing-org/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin-square" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://www.facebook.com/One-Thing-Org-103418918935944"
                      target="_blank"
                    >
                      <i className="fa fa-facebook" />
                    </NavLink>
                  </NavItem>
                </Nav>
                <Row className=" nav-footer justify-content-end">
                  <span>1 Thing Agaist Racism © 2021</span>
                </Row>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default OneThingFooter;
