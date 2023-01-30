import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import * as serviceWorker from "./serviceWorker"

import ActionPage from "components/ActionPage/ActionPage"
import Welcome from "components/Welcome.js"
import "./utility/i18n"

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={(props) => <Welcome {...props} />} />
      <Route path="/actions" exact render={(props) => <ActionPage {...props} />} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
)

serviceWorker.unregister()
