import React, { Component } from "react";
import Header from "components/Headers";
import Footer from "components/Footers/Footer.js";
import ActionPageTop from "./ActionPageTop/ActionPageTop";
import ActionPageBody from "./ActionPageBody/ActionPageBody";

class ActionPage extends Component {
	render() {
		return (
			<>
				<div>
					<Header />
					<ActionPageTop />
					<ActionPageBody />
					<Footer />
				</div>
			</>
		);
	}
}

export default ActionPage;
