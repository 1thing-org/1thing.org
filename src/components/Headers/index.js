import React from "react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
	UncontrolledCollapse,
	Button,
	NavbarBrand,
	Navbar,
	NavItem,
	NavLink,
	Nav,
	Container,
	Row,
	Col,
	UncontrolledTooltip,
} from "reactstrap";
import logo from "../../assets/imag/Logo.svg";
import "./Header.scss";
import Share from "../Share/Share";

class OneThingNavbar extends React.Component {
	componentDidMount() {
		let headroom = new Headroom(document.getElementById("navbar-main"));
		// initialise
		headroom.init();
	}
	state = {
		collapseClasses: "",
		collapseOpen: false,
		couldScroll: true,
	};

	onExiting = () => {
		this.setState({
			collapseClasses: "collapsing-out",
		});
	};

	onExited = () => {
		this.setState({
			collapseClasses: "",
		});
	};

	render() {
		return (
			<>
				<header className="header-global">
					<Navbar
						className="navbar-main navbar-transparent navbar-light headroom"
						expand="lg"
						id="navbar-main">
						<Container className="onething-header-container">
							<NavbarBrand className="mr-lg-5 logo" to="/" tag={Link}>
								<img
									className=""
									alt="..."
									src={require("assets/imag/Logo.svg")}
								/>
							</NavbarBrand>
							<button className="navbar-toggler" id="navbar_global">
								<span className="navbar-toggler-icon" />
							</button>
							<UncontrolledCollapse
								toggler="#navbar_global"
								navbar
								className={this.state.collapseClasses}
								onExiting={this.onExiting}
								onExited={this.onExited}>
								<div className="navbar-collapse-header">
									<Row>
										<Col className="collapse-brand" xs="6">
											<Link to="/">
												<img alt="..." src={require("assets/imag/Logo.svg")} />
											</Link>
										</Col>
										<Col className="collapse-close" xs="6">
											<button className="navbar-toggler" id="navbar_global">
												<span />
												<span />
											</button>
										</Col>
									</Row>
								</div>
								<Nav className="navbar-nav-hover align-items-lg-center" navbar>
									<NavLink tag={Link} className="nav-link" to="/">
										<span className="nav-link-inner--text">Home</span>
									</NavLink>
									<NavLink tag={Link} to="/actionPage">
										<span className="nav-link-inner--text">Action</span>
									</NavLink>
									<NavLink
										href="https://docs.google.com/forms/d/1pWp89Y6EThMHml1jYGkDj5J0YFO74K_37sIlOHKkWo0/viewform?edit_requested=true"
										target="_blank">
										<span className="nav-link-inner--text">Contact</span>
									</NavLink>
								</Nav>
								<Nav
									className="align-items-lg-center ml-lg-auto onething-header-social-media"
									navbar>
									<NavItem>
										<NavLink
											className="nav-link-icon"
											href="mailto:info@1thing.org"
											id="tooltip333589074"
											target="_blank">
											<i className="fa fa-envelope" />
											<span className="nav-link-inner--text d-lg-none ml-2">
												Email
											</span>
										</NavLink>
										<UncontrolledTooltip delay={0} target="tooltip333589074">
											Email us
										</UncontrolledTooltip>
									</NavItem>
									<NavItem>
										<NavLink
											className="nav-link-icon"
											href="https://twitter.com/1Thing_Org"
											id="tooltip356693867"
											target="_blank">
											<i className="fa fa-twitter" />
											<span className="nav-link-inner--text d-lg-none ml-2">
												Twitter
											</span>
										</NavLink>
										<UncontrolledTooltip delay={0} target="tooltip356693867">
											Follow us on Twitter
										</UncontrolledTooltip>
									</NavItem>
									<NavItem>
										<NavLink
											className="nav-link-icon"
											href="https://www.linkedin.com/company/1-thing-org/"
											id="tooltip184698705"
											target="_blank">
											<i className="fa fa-linkedin-square" />
											<span className="nav-link-inner--text d-lg-none ml-2">
												LinkedIn
											</span>
										</NavLink>
										<UncontrolledTooltip delay={0} target="tooltip184698705">
											Follow us on LinkedIn
										</UncontrolledTooltip>
									</NavItem>
									<NavItem>
										<NavLink
											className="nav-link-icon"
											href="https://www.facebook.com/One-Thing-Org-103418918935944"
											id="tooltip112445449"
											target="_blank">
											<i className="fa fa-facebook" />
											<span className="nav-link-inner--text d-lg-none ml-2">
												Facebook
											</span>
										</NavLink>
										<UncontrolledTooltip delay={0} target="tooltip112445449">
											Like us on Facebook
										</UncontrolledTooltip>
									</NavItem>
									<NavItem id="tooltipshare">
										<Share />
										<span className="nav-link-inner--text d-lg-none ml-2">
											Share
										</span>
										<UncontrolledTooltip delay={0} target="tooltipshare">
											Share our homepage
										</UncontrolledTooltip>
									</NavItem>
								</Nav>
							</UncontrolledCollapse>
						</Container>
					</Navbar>
				</header>
			</>
		);
	}
}

export default OneThingNavbar;
