import React, { Component } from "react";
import styles from "./Footer.module.scss";
import Mailchimp from "../../utility/mailchimp";

export default class Footer extends Component {
	render() {
		return (
			<footer>
				<div className={styles.footerContainer}>
					<section className={styles.subscribe}>
						<h3>Stay tune and sign up for newsletter. ✊</h3>
						<section className={styles.email}>
							<Mailchimp className={styles.email} />
						</section>
					</section>

					<section className={styles.rightSide}>
						<section className={styles.socialMedia}>
							<a href="mailto:info@1thing.org">
								<i className="fa fa-envelope" aria-hidden="true"></i>
							</a>
							<a target="_blank" href="https://twitter.com/1Thing_Org">
								<i className="fa fa-twitter" aria-hidden="true"></i>
							</a>
							<a
								target="_blank"
								href="https://www.linkedin.com/company/1-thing-org/">
								<i className="fa fa-linkedin-square" aria-hidden="true"></i>
							</a>
							<a
								target="_blank"
								href="https://www.facebook.com/One-Thing-Org-103418918935944">
								<i className="fa fa-facebook" aria-hidden="true"></i>
							</a>
						</section>

						<article>1 Thing Agaist Racism © 2021</article>
					</section>
				</div>
			</footer>
		);
	}
}
