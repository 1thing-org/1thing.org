import React, { Component } from "react";
import styles from "./ActionPageTop.module.scss";

export default class ActionPageTop extends Component {
  render() {
    return (
      <div className={styles.ActionPageTop}>
        <h1>Do 1 thing to mitigate social inequality.</h1>
        {/* <Button color="onething" type="button">
					Share what you’ve done{" "}
				</Button> */}
      </div>
    );
  }
}
