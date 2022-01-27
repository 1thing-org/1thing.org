import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Chart from "components/HCTChart/Chart.js";
import Action from "components/Actions/Actions.js";



class Welcome extends Component {
    render() {
  
      return (
        <Router>
          <div className="App">
            <Chart />
            <Action/>
          </div>
        </Router>
      )
  
    }
  }
  
  export default Welcome