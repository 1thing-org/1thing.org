import React, { Component, Fragment } from "react"
// import { ImageBackground } from "react-native";
import { Link, Switch, Route } from "react-router-dom";
import './TopSection.module.scss';
import styles from './TopSection.module.scss';
import Mailchimp from "../../utility/mailchimp";
import hero from '../../assets/img/brand/blue.png'
import {Button, NavItem, NavLink} from "reactstrap";


export default class Header extends Component {
    render() {
        return (
            <>
            {/* <Button color="warning" >
            <NavLink href="#chart" className="fa fa-angle-double-down"></NavLink></Button> */}
            <div className={styles.bg}>
                <section className={styles.topSection}>
                    <h1>Make small contributions<br />
                        Improve racial equality
                    </h1>
                    <h4>Action, Share, Inspire! Together, we can make differences.</h4>
                    <p><Link to="/actionpage">Click 1 thing you can do &rarr;</Link></p>
                    <section className={styles.subscribe}>
                        <p>Join mailing list and keep educating yourself. ✊</p>
                        <section className={styles.email}>
                        <Mailchimp />
                            {/* <input placeholder='Email address'></input>
                            <Button color="onething" type="button"> Subscribe</Button> */}
                        </section>
                    </section>
                </section >
            </div>
            <div className={styles.bgMobile}></div>
            <section className={styles.topSectionMobile}>
                <h1>Make small contributions<br />
                    Improve racial equality
                </h1>
                <h4>Action, Share, Inspire! Together, we can make differences.</h4>
               
                <p><Link to="/actionpage">Click 1 thing you can do &rarr;</Link></p>
                <section className={styles.subscribe}>
                    <p>Join mailing list and keep educating yourself. ✊</p>
                    <section className={styles.email}>
                    <Mailchimp className={styles.email}/>
                        {/* <Input placeholder='Email address'></Input>
                        <Button color="onething" type="button"> Subscribe</Button> */}
                    </section>
                </section>
            </section >
            </>
        )
    }

}
