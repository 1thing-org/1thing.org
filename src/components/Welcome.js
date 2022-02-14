import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import moment from 'moment';
import { useContext, useEffect, useState } from 'react';

import ChartView from "components/HCTChart/ChartView.js";

import Action from "components/Actions/Actions.js";



class Welcome extends Component {
    render() {
  
      return (
        <Router>
          <div>
            
            <ChartView />
           
            <Action/>
          </div>
        </Router>
      )
  
    }
  }
  
  export default Welcome