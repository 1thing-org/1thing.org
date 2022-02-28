import React, { Component, Fragment } from 'react'
import { Button, Input } from "reactstrap";
import { Link, Switch, Route } from "react-router-dom";
import styles from './ActionPageTop.module.css';

export default class ActionPageTop extends Component {
    render() {
        return (
            <div className={styles.ActionPageTop}>
                <h1>Do 1 thing to mitigate social inequality.</h1>
                <button>Share what you’ve done</button>
            </div>
        )
    }
}
