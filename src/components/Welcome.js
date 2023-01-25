import React, { Component } from "react"

import ChartView from "components/HCTChart/ChartView.js"

import Action from "components/Actions/Actions.js"
import TopSection from "components/TopSections/TopSection.js"
import Footer from "components/Footers/Footer.js"
import OneThingNavbar from "./Headers/index"

class Welcome extends Component {
	componentDidMount() {
		// <!-- Google tag (gtag.js) -->
		const script1 = document.createElement("script")
		script1.src = "https://www.googletagmanager.com/gtag/js?id=G-0GVEVQC6V3"
		script1.async = true

		const script2 = document.createElement("script")
		script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-0GVEVQC6V3');`

		document.body.appendChild(script1)
		document.body.appendChild(script2)
	}
	render() {
		return (
			<>
				<div>
					<OneThingNavbar />
					<TopSection />
					<ChartView />
					<Action />
					<Footer />
				</div>
			</>
		)
	}
}
export default Welcome
