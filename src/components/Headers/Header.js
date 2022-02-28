import React, { Component, Fragment } from 'react'
import { Link, Switch, Route } from "react-router-dom";
import styles from './Header.module.css';
import logo3 from '../../assets/img/logo3.png';

export default class Header extends Component {
    render() {
        return (
            <header>
                <section className={styles.header}>
                    <img className={styles.logo} src={logo3}></img>
                    <nav>
                        <h4>Home</h4>
                        <h4>About</h4>
                        <h4>Donate</h4>
                        <h4>News</h4>
                        <h4>Contact</h4>
                    </nav>
                    <section className={styles.socialMedia}>
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                    </section>
                </section>
            </ header>
        )
    }
}
