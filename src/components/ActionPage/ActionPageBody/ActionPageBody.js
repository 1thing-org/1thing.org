import React, { Component } from "react";
import styles from "./ActionPageBody.module.scss";
import { Row, Container } from "reactstrap";

export default class ActionPageBody extends Component {
	render() {
		return (
			<div className={styles.ActionPageBody}>
				<Container id="awareness">
					<Row>
						<h1>Raise awareness</h1>
					</Row>
					<ul>
						<li>
							Tell a friend or colleague that you are concerned for your safety
							out in the streets nowadays because of Anti-Asian hate crime
							incidents.
						</li>
						<li>Talk about this issue with coworkers.</li>
						<li>In a team meeting, share what you are doing to fight hate.</li>
						<li>Share anti-hate materials to your team or organization.</li>
						<li>
							If you experienced a biased incident, tell your non-asian friends
							and colleagues about that. Share both facts and your feelings.
						</li>
						<li>
							Raise questions to the leaders of your organization, encourage
							concrete plans to address this issue.
						</li>
						<li>
							Inform your asian/non-asian friends about actions taken by
							governments and companies. Knowing that anti-Asian hate has drawn
							significant society-wise attention (not just among AAPI
							communities) will encourage everyone to do something.
						</li>
					</ul>
				</Container>
				<Container id="support">
					<Row>
						<h1>Support anti-Asian hate victims</h1>
					</Row>
					<ul>
						<li>Donate to anti-Asian hate victims.</li>
						<li>Help capture suspects.</li>
						<li>Help effort to bring justice to victims.</li>
						<li>
							Tell a hate incident/crime victim that you want to listen to their
							feelings.
						</li>
						<li>
							Tell a hate incident/crime victim that you are here to help.
						</li>
					</ul>
				</Container>
				<Container id="expertise">
					<Row>
						<h1>
							Use your professional skills & expertise to make a difference
						</h1>
					</Row>
					<ul>
						<li>Create: paint, draw, or digitally make a piece of art that reflects your attitude towards asian-hate, prejudice, and bias.</li>
						<li>Share: art, websites, or books that inspire and help you.</li>
						<li>Support: use your analytical skills to proofread articles, slide decks, and other educational content.</li>
						<li>Research: fact-check news articles, perform data analysis, or implement data crawling.</li>
						<li>Develop: create apps, websites, or online platforms.</li>
						<li>Collaborate: propose solutions, help with projects, or volunteer out in the community.</li>
					</ul>
				</Container>
				<Container id="culture">
					<Row>
						<h1>Promote cross racial understanding</h1>
					</Row>
					<ul>
						<li>Communicate: as a minority friend about their experience living in the US.</li>
						<li>Empathize: try to relate to others, share the challenges the APPI community is facing.</li>
						<li>Connect: host inclusive gatherings to connect with friends from different ethnic groups.</li>
						<li>Recommend: Asian storytelling movies. Eg: Crazy Rich Asians, The Joy Luck Club, to friends &amp; colleagues.</li>
						<li>Invite: share something fun about Asian culture with non-Asian friends.</li>
					</ul>
				</Container>
			</div>
		);
	}
}
