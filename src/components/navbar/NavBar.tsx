import React, { Component } from "react"
import { Link } from "react-router-dom"
import Logo from "../../assets/images/logo.svg"
import "./NavBar.css"

function Page({ title, links }: { title: string; links: string }) {
  return (
    <Link to={links} className="link">
      <div>{title}</div>
    </Link>
  )
}

class NavBar extends Component {
  render() {
    return (
      <div className="nav">
        <Link to="/">
          <div>
            <img src={Logo} width="100" height="100" alt="1 Thing Org logo" />
          </div>
        </Link>
        {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
        <div className="links ms-auto">
          <Page title={"Take Action"} links={"/takeaction"}></Page>
          <Page title={"Testimonials"} links={"/testimonials"}></Page>
          <Page title={"About Us"} links={"/aboutus"}></Page>
          <Page title={"Contact"} links={"/contact"}></Page>
        </div>
        {/* </Navbar.Collapse> */}
      </div>
    )
  }
}

export default NavBar
