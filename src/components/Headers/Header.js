import React, { Component, Fragment, useState } from 'react'
import { Link, Switch, Route } from "react-router-dom";
import styles from './Header.module.scss';
import logo from '../../assets/imag/Logo.svg';
import SocialMediaPopup from "../SocialMedia/SocialMediaPopup/SocialMediaPopup";

export default class Header extends Component {
    state = {isShare : false}

    render() {
        return (
            <header>
                <section className={styles.header}>
                    <img className={styles.logo} src={logo}></img>
                    <nav>
                        <h4><Link to="/">Home</Link></h4>
                        {/* <h4>About</h4>
                        <h4>Donate</h4>
                        <h4>News</h4> */}
                        <h4><a target="_blank" href='https://docs.google.com/forms/d/1pWp89Y6EThMHml1jYGkDj5J0YFO74K_37sIlOHKkWo0/viewform?edit_requested=true'>Contact</a></h4>
                    </nav>
                    <section className={styles.socialMedia}>
                        <a><i className="fa fa-envelope" aria-hidden="true"></i></a>
                        <a target="_blank" href='https://twitter.com/1Thing_Org'><i className="fa fa-twitter" aria-hidden="true"></i></a>
                        <a target="_blank" href='https://www.linkedin.com/company/1-thing-org/'><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                        <a target="_blank" href='https://www.facebook.com/One-Thing-Org-103418918935944'><i className="fa fa-facebook" aria-hidden="true"></i></a>
                    </section>
                </section>
                {/* <SocialMediaPopup/> */}
            </ header>
        )
    }
}
