import React from "react";

import './Chart.scss'

class Chart extends React.Component {
    
    // state = {
   
    // };
  
    
    render() {
      return (
          <>
          <div className="word">

            <div className="childword">
            <p>*Anti-Asian hate crimes</p>
              <p>have increased</p>
              <h2><b>By 150%</b></h2>
              <p>*Note: data from 1 thing team</p>
            </div>
            <div className="childword">
              <p>*Anti-Asian hate crimes</p>
              <p> happen</p>
              <h2><b>Every Day</b></h2>
              </div>
              <div className="childword">
              <p>*Anti-Asian attacks have </p>
              <p>been reported since Jan</p>
              <h2><b>Over 3000</b></h2>
           
              </div>

          </div>
          </>
      );
    }
  }
  
  export default Chart;
  