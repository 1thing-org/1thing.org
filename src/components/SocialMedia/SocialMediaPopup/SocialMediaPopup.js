import React, { Component, Fragment } from 'react'
import { Link, Switch, Route } from "react-router-dom";
import styles from './SocialMediaPopup.module.css';

export default class SocialMediaPopup extends Component {
    render() {
        return (
            <div className={styles.SocialMediaPopup}>
                <h4>Share 1 Thing website with your social Community</h4>
                <i className="fa fa-twitter" aria-hidden="true"></i>
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                <i className="fa fa-facebook" aria-hidden="true"></i>
            </div>
        )
    }
}
