import React, { Component } from "react";
import styles from "./ActionPageBody.module.scss";

export default class ActionPageBody extends Component {
	render() {
		return (
			<div className={styles.ActionPageBody}>
				<div id="awareness">
					<h1>Raise awareness</h1>
					<ul>
						<li>
							Tell a friend or colleague that you are concerned about going on
							the street nowadays because of anti-Asian hate crime incidents.
						</li>
						<li>Having 1-on-1 with coworkers to talk about the issue.</li>
						<li>
							In a team meeting, share with colleagues what you are doing to
							fight hate.
						</li>
						<li>
							Tell a friend or colleague that you are concerned about going on
							the street nowadays because of anti-Asian hate crime and
							incidents.
						</li>
						<li>Having 1-on-1 with coworkers to talk about the issue.</li>
						<li>
							In a team meeting, share with colleagues what you are doing to
							fight hate.
						</li>
						<li>Share anti-hate materials to your team or organization.</li>
						<li>
							If you experienced a biased incident, tell your non-asian friends
							and colleagues about that. Share both facts and your feelings.
						</li>
						<li>
							Raise questions to the leadership of your organization, encourage
							concrete plans to address the problems.
						</li>
						<li>
							Inform your asian/non-asian friends about actions taken by
							governments and companies. Knowing that anti-Asian hate has drawn
							significant society-wise attention (not just among AAPI
							communities) will encourage everyone to do something.
						</li>
					</ul>
				</div>
				<div id="support">
					<h1>Support anti-Asian hate victims</h1>
					<ul>
						<li>Donate</li>
						<li>Help capture suspects</li>
						<li>Help effort to bring justice to victims</li>
						<li>
							Tell a hate incident/crime victim that you want to listen to their
							feelings.
						</li>
						<li>
							Tell a hate incident/crime victim that you are here to help.
						</li>
					</ul>
				</div>
				<div id="expertise">
					<h1>Use your profession & expertise to help</h1>
					<ul>
						<li>
							Make an art piece that reflects your attitude to asian-hate and
							bias
						</li>
						<li>
							Create articles, arts, paintings, vidoes, music to advocate social
							equality. Or simply share those artifacts you found helpful.
						</li>
						<li>Develop or share apps, websites.</li>
						<li>Help proofread articles, slides that other people created.</li>
						<li>Help improve UX for artifacts that other people created.</li>
						<li>
							Help fact-check, data crawling, data analysis, data visualization.
						</li>
						<li>Propose or participate projects.</li>
					</ul>
				</div>
				<div>
					<h1 id="culture">Promote cross racial understanding</h1>
					<ul>
						<li>
							Ask a black/latinx/... friend about challenges they experienced
							while growing up and living in the US. Try to relate to them and
							perhaps share your challenges with what the AAPI community is
							facing.
						</li>
						<li>
							Invite friends from different ethnic groups to join your own
							ethnic group or team to tell their stories.
						</li>
						<li>
							Recommend Asian storytelling movies. eg: Crazy Rich Asians, The
							Joy Luck Club, etc., to friends & colleagues
						</li>
						<li>Share something fun about Asian to your non-Asian friends.</li>
					</ul>
				</div>
			</div>
		);
	}
}
