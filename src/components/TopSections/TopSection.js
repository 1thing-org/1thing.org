import React, { Component, Fragment } from 'react'
// import { ImageBackground } from "react-native";
import { Link, Switch, Route } from "react-router-dom";
import styles from './TopSection.module.css';
import hero from '../../assets/img/brand/blue.png'
import { Button, Input } from "reactstrap";


export default class Header extends Component {


    render() {
        return (
            <section className={styles.topSection}>
                <h1>Make small contributions <br /> Improve racial equality</h1>
                <h4>Action, Share, Inspire! Together, we can make differences.</h4>
                <a>Click 1 thing you can do &rarr;</a>
                <section className={styles.subscribe}>
                    <p>Join mailing list and keep educating yourself. ✊</p>
                    <section className={styles.email}>
                        <input placeholder='Email address'></input>
                        <Button color="onething" type="button"> Subscribe</Button>
                        {/* <button>Subscribe</button> */}
                    </section>
                </section>
            </section >

        )
    }
}
