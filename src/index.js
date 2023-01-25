/*!
=========================================================
* Argon Design System React - v1.1.0
=========================================================
* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"

import "assets/scss/argon-design-system-react.scss?v1.1.0"
import "assets/vendor/font-awesome/css/font-awesome.min.css"
import "assets/vendor/nucleo/css/nucleo.css"

import "./i18n"
import * as serviceWorker from "./serviceWorker"

import "assets/vendor/font-awesome/css/font-awesome.min.css"

import ActionPage from "components/ActionPage/ActionPage"
import Welcome from "components/Welcome.js"

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path="/" exact render={props => <Welcome {...props} />} />
			<Route
				path="/actionpage"
				exact
				render={props => <ActionPage {...props} />}
			/>
			<Redirect to="/" />
		</Switch>
	</BrowserRouter>,

	document.getElementById("root")
)

serviceWorker.unregister()
