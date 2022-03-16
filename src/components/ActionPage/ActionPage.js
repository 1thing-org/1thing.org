import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from "components/Headers/Header.js";
import Footer from "components/Footers/Footer.js";
import ActionPageTop from './ActionPageTop/ActionPageTop';
import ActionPageBody from './ActionPageBody/ActionPageBody';

class ActionPage extends Component {
    render() {

        return (
            // <Router>
            <>
                <div>
                    <Header />
                    <ActionPageTop />
                    <ActionPageBody />
                    <Footer />
                </div>
            </>
            //</Router>
        )

    }
}

export default ActionPage;