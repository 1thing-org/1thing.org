import React from "react";

import './Actions.scss'

class Actions extends React.Component {
    
    // state = {
   
    // };
  
    
    render() {
      return (
          <>
          <div className="details">

            <div className="childetail">
            <h3>Raising Awareness</h3>
              <p>Tell a friend or colleage that you are concerned about going on the street</p>
              <p>nowadays because of anti-Asian hate crime incidents</p>
              <p>Having 1-on-1 with coworkers to talk about the issue</p>
              <p>In a team meeting, share with colleagues what you are doing to fight hate</p>
              <a>View More</a>
            </div>
            <div className="childetail">
            <h3>Supporting anti-Asian hate victims</h3>
              <p>Help effort to bring justice to victims</p>
              <p>Tell a hate incident/crime victim that you want to listen to their feelings</p>
              <p>Donate to AAPI communities</p>
              <a>View More</a>
              </div>
              <div className="childetail">
              <h3>Using your profession, expertise to help</h3>
              <p>Make an art pice that reflects attitude to asian-hate and bias</p>
              <p>Propose or participate projects</p>
              <p>Create articles, arts, paintings, videos, music to advocate social equality. Or simply</p>
              <p>share those artifacts you found helpful</p>
              <a>View More</a>           
              </div>

          </div>
          </>
      );
    }
  }
  
  export default Actions;
  