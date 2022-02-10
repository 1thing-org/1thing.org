import React from "react";
import { Button } from "reactstrap";

import "../../assets/vendor/nucleo/css/nucleo.css"
import "../../assets/vendor/font-awesome/css/font-awesome.min.css";
import "../../assets/scss/argon-design-system-react.scss?v1.1.0";


import './Actions.scss'
import Smallactions from '../../assets/imag/Smallactions.png';
import Awareness from '../../assets/imag/Icon-raising awareness.png';
import Support from '../../assets/imag/Icon-support.png';
import Expertise from '../../assets/imag/Icon-expertise.png';
import Culture from '../../assets/imag/Icon-culture.png';


class Actions extends React.Component {
    
    // state = {
   
    // };
  
    
    render() {
      return (
          <>
        <div className="box">
          <div className="title">
          <img className="img1"  src={Smallactions} alt="SMALL ACTIONS BRING BIG CHANGES"/>
          <p className="p1">Take small actions consistently. Achieve racial equality eventually</p>
          <Button className="btn" outline color="onething" type="button"> Share what you've done</Button>
          <p className="p1">Get inspirations about what you can help. 👇</p>
          <div className="vector">
          <p className="down1"><i className="ni ni-bold-down"></i></p>
          <p className="down2"><i className="ni ni-bold-down"></i></p>
          </div>
          </div>

          <div className="details">

            <div className="box2">
            <div className="img2-left">
            <img src={Awareness} alt="AWARENESS" width={256} height={256}/>
            </div>
            <div className="word-right">
            <h3 className="title2">Raising Awareness</h3>
              <p><li>Tell a friend or colleage that you are concerned about going on the street nowadays because of anti-Asian hate</li></p>
              <p>crime incidents.</p>
              <p><li>Having 1-on-1 with coworkers to talk about the issue.</li></p>
              <p><li>In a team meeting, share with colleagues what you are doing to fight hate.</li></p>
              <p className="link2"><a className="vm2">View More &rarr;</a></p>
            </div>
            </div>

            <div className="box2">
            <div className="img2-right">
            <img src={Support} alt="SUPPORT" width={256} height={256}/>
            </div>
            <div className="word-left">
            <h3 className="title2">Supporting anti-Asian hate victims</h3>
              <p><li>Help effort to bring justice to victims.</li></p>
              <p><li>Tell a hate incident/crime victim that you want to listen to their feelings. Tell a hate crime victim that you are</li></p>
              <p> here to help.</p>
              <p><li>Donate to AAPI communities</li></p>
              <p className="link2"><a className="vm2">View More &rarr;</a></p>
              </div>
              </div>

            <div className="box2">
            <div className="img2-left">
            <img src={Expertise} alt="USE EXPERTISE" width={256} height={256}/>
            </div>
              <div className="word-right">
              <h3 className="title2">Using your profession, expertise to help</h3>
              <p><li>Make an art pice that reflects attitude to asian-hate and bias.</li></p>
              <p><li>Propose or participate projects.</li></p>
              <p><li>Create articles, arts, paintings, videos, music to advocate social equality. Or simply share those artifacts you</li></p>
              <p> found helpful.</p>
              <p className="link2"><a className="vm2">View More &rarr;</a></p>       
              </div>
              </div>

            <div className="box2">
            <div className="img2-right">
            <img src={Culture} alt="CROSS-CULTURAL UNDERSTANDING" width={256} height={256}/>
            </div>
              <div className="word-left">
              <h3 className="title2">Promote cross racial understanding</h3>
              <p><li>Ask a black/latinex/...friend about challenges they experienced while growing up and living in the US.  Try to </li></p>
              <p>relate to them and perhaps share your chanllenge with what the AAPI community is facing.</p>
              <p></p>
              <p><li>Invite friends from different ethnic groups to join your own ethnic group or team to tell their stories.</li></p>
              <p></p>
              <p className="link2"><a className="vm2">View More &rarr;</a></p>          
              </div>
            </div>

          </div>
        </div>
          </>
      );
    }
  }
  
  export default Actions;
  