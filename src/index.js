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
import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from './serviceWorker'
import './i18n';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "assets/vendor/font-awesome/css/font-awesome.min.css";

import Welcome from "components/Welcome.js";
import ActionPage from "components/ActionPage/ActionPage";

ReactDOM.render(

  <BrowserRouter>
  <Switch>
  <Route path="/" exact render={props => <Welcome {...props} />} />
  <Route path="/actionpage" exact render={props => <ActionPage {...props} />} />
       <Redirect to="/" />
       </Switch>
   </BrowserRouter>,

  document.getElementById("root")
);

serviceWorker.unregister()
