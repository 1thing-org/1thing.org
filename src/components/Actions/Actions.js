import React from "react";
import { Button, Row, Col, Container } from "reactstrap";
import { Link } from "react-router-dom";

import './Actions.scss'
import Smallactions from '../../assets/imag/Smallactions.png';
import Awareness from '../../assets/imag/Icon-raising awareness.png';
import Support from '../../assets/imag/Icon-support.png';
import Expertise from '../../assets/imag/Icon-expertise.png';
import Culture from '../../assets/imag/Icon-culture.png';


class Actions extends React.Component {
  
    
    render() {
      return (
        <div className="box">
          <Container className="title">
            <Row>
            <Col>
            <img className="img1"  src={Smallactions} alt="SMALL ACTIONS BRING BIG CHANGES" />
            </Col>
            </Row>

            <Row>
            <Col>
            <p className="p1">Take small actions consistently. Achieve racial equality eventually</p>
            </Col>
            </Row>
            
            {/* hide button now and may use it in the future */}
            {/* <Row>
            <Col>
            <Button className="btn" outline color="onething" type="button"> Share what you've done</Button>
            </Col>
            </Row> */}

            <Row>
            <Col>
            <p className="p2">Get inspirations about what you can help. 👇</p>
            </Col>
            </Row>

            <Row>
              <Col className="vector">
              <i className="fa fa-angle-double-down" ></i>
              </Col>
            </Row>
          </Container>

          <Container className="details">
          <Row className="box2">
            <Col lg={4}> <img src={Awareness} alt="AWARENESS"/></Col>
            <Col lg={8}>
                <h3 className="title2">Raising Awareness</h3>
                <p className="p2"><li>Tell a friend or colleage that you are concerned about going on the street</li>
                &thinsp;&emsp;  nowadays because of anti-Asian hate crime incidents.
                <li>Having 1-on-1 with coworkers to talk about the issue.</li>
                <li>In a team meeting, share with colleagues what you are doing to fight hate.</li></p>
                <p className="link2"><Link to="/actionpage" className="vm2">View More &rarr;</Link></p>
            </Col>
          </Row>

          <Row className="box2">
            <Col lg={8}>
                <h3 className="title2">Supporting anti-Asian hate victims</h3>
                <p className="p2"><li>Help effort to bring justice to victims.</li>
                <li>Tell a hate incident/crime victim that you want to listen to their feelings. Tell a</li>
                &thinsp;&emsp; hate crime victim that you are here to help.
                <li>Donate to AAPI communities</li></p>
                <p className="link2"><a className="vm2"><Link to="/actionpage">View More &rarr;</Link></a></p>
            </Col>
            <Col lg ={4}> <img src={Support} alt="SUPPORT"/> </Col>
          </Row>

          <Row className="box2">
            <Col lg={4}><img src={Expertise} alt="USE EXPERTISE" /></Col>
            <Col lg={8}>
            <h3 className="title2">Using your profession, expertise to help</h3>
                <p className="p2"><li>Make an art pice that reflects attitude to asian-hate and bias.</li>
                <li>Propose or participate projects.</li>
                <li>Create articles, arts, paintings, videos, music to advocate social equality. Or </li>
                &thinsp;&emsp; simply share those artifacts you found helpful.</p>
                <p className="link2"><a className="vm2"><Link to="/actionpage">View More &rarr;</Link></a></p>
            </Col>
          </Row>

          <Row className="box2">
            <Col lg={8}>
            <h3 className="title2">Promote cross racial understanding</h3>
                <p className="p2"><li>Ask a black/latinex/...friend about challenges they experienced while growing </li>
                &thinsp;&emsp; up and living in the US. Try to relate to them and perhaps share your<br />
                &thinsp;&emsp; chanllenge with what the AAPI community is facing.
                <li>Invite friends from different ethnic groups to join your own ethnic group</li>
                &thinsp;&emsp; or team to tell their stories.</p>
                <p className="link2"><a className="vm2"><Link to="/actionpage">View More &rarr;</Link></a></p>
            </Col>
            <Col lg={4}> <img src={Culture} alt="CROSS-CULTURAL UNDERSTANDING"/> </Col>
          </Row>
          </Container>
        </div>
      );
    }
  }
  
  export default Actions;
  