import React, { Component } from "react"
import styles from "./Footer.module.scss"
import Mailchimp from "../../utility/mailchimp"

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <section className={styles.subscribe}>
          <h3>Stay tune and sign up for newsletter. ✊</h3>
          <section className={styles.email}>
            <Mailchimp className={styles.email} />
          </section>
        </section>

        <section className={styles.rightSide}>
          <section className={styles.socialMedia}>
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </section>

          <article>1 Thing Agaist Racism © 2021</article>
        </section>
      </footer>
    )
  }
}
