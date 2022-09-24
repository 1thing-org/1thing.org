import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./TopSection.module.scss";
import styles from "./TopSection.module.scss";
import Mailchimp from "../../utility/mailchimp";

export default class Header extends Component {
	render() {
		return (
			<>
				<div className={styles.bg}>
					<section className={styles.topSection}>
						<h1>
							Even small actions can
							<br />
							improve racial equality.
						</h1>
						<h4>Do, Share, Inspire! Together, we can make a difference.</h4>
						<p>
							<Link to="/actionpage">
								Find 1 thing you can do to help &rarr;
							</Link>
						</p>
						<section className={styles.subscribe}>
							<p>
								Join our mailing list and keep educating yourself.{" "}
								<span role="img" aria-label="come on">
									✊
								</span>
							</p>
							<section className={styles.email}>
								<Mailchimp />
							</section>
						</section>
					</section>
				</div>
				<div className={styles.bgMobile}></div>
				<section className={styles.topSectionMobile}>
					<h1>
						Make small contributions
						<br />
						Improve racial equality
					</h1>
					<h4>Action, Share, Inspire! Together, we can make differences.</h4>
					<p>
						<Link to="/actionpage">Check 1 thing you can do &rarr;</Link>
					</p>
					<section className={styles.subscribe}>
						<p>
							Join mailing list and keep educating yourself.{" "}
							<span role="img" aria-label="come on">
								✊
							</span>
						</p>
						<section className={styles.email}>
							<Mailchimp className={styles.email} />
						</section>
					</section>
				</section>
			</>
		);
	}
}
