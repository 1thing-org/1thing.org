import React from "react";

import './Chart.scss'

import "../../assets/vendor/nucleo/css/nucleo.css"
import "../../assets/vendor/font-awesome/css/font-awesome.min.css";
import "../../assets/scss/argon-design-system-react.scss?v1.1.0";

class Chart extends React.Component {
    
    // state = {
   
    // };
  
    
    render() {
      return (
          <>
    
          <div className="word">

            <div className="childword">
            <p className="t1">*Anti-Asian hate crimes</p>
              <p className="t1">have increased</p>
              <h2 className="t2">By 150%</h2>
              <p className="t3">*Note: data from 1 thing team</p>
            </div>

            <div className="childword">
              <p className="t1">*Anti-Asian hate crimes</p>
              <p className="t1"> happen</p>
              <h2 className="t2">Every Day</h2>
              </div>

              <div className="childword">
              <p className="t1">*Anti-Asian attacks have </p>
              <p className="t1">been reported since Jan</p>
              <h2 className="t2">Over 3000</h2>
              </div>

              <div className="link1">
              <a className="vm1">View More &rarr;</a></div>
          </div>

          </>
      );
    }
  }
  
  export default Chart;
  