import React from "react";
import { Row, Col, Container, NavLink } from "reactstrap";
import { HashLink as Link } from "react-router-hash-link";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Actions.scss";
import Smallactions from "../../assets/imag/Smallactions.png";
import Awareness from "../../assets/imag/Icon-raising awareness.png";
import Support from "../../assets/imag/Icon-support.png";
import Expertise from "../../assets/imag/Icon-expertise.png";
import Culture from "../../assets/imag/Icon-culture.png";

const Actions = () => {
	//responsive
	const [dimensions, setDimensions] = React.useState({
		height: window.innerHeight,
		width: window.innerWidth,
	});
	const handleResize = () => {
		setDimensions({
			height: window.innerHeight,
			width: window.innerWidth,
		});
	};
	React.useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	});

	return (
		<div className="box">
			<Container fluid className="title">
				<Row>
						<img
							className="img1"
							src={Smallactions}
							alt="SMALL ACTIONS BRING BIG CHANGES"
						/>
				</Row>

				<Row>
					<Col>
						<p className="p1">
							Take small actions consistently. Achieve racial equality
							eventually
						</p>
					</Col>
				</Row>

				{/* hide button now and may use it in the future */}
				<Row>
					<Col>
						{/* <Button className="btn" outline color="onething" type="button"> Share what you've done</Button> */}
					</Col>
				</Row>

				<Row>
					<Col>
						<p className="p2">Get inspirations about what you can help. 
						<span role="img" aria-label="point down">👇</span>
						</p>
					</Col>
				</Row>

				<Row>
					<Col className="vector">
						<NavLink href="#actions">
							<i className="fa fa-angle-double-down"></i>
						</NavLink>
					</Col>
				</Row>
			</Container>

			{dimensions.width < 576 ? (
				<Container fluid className="details1" id="actions">

					<Row className="justify-content-center">
						<img src={Awareness} alt="AWARENESSawareness" />
					</Row>
					
						<Row className="title2 justify-content-center">Raising Awareness</Row>
						<Container>
						<p className="p2">
							<li>
								Tell a friend or colleague that you are concerned about going on
								the street nowadays because of anti-Asian hate crime incidents.
							</li>
							<li>Having 1-on-1 with coworkers to talk about the issue.</li>
							<li>
								In a team meeting, share with colleagues what you are doing to
								fight hate.
							</li>
						</p>
						<p className="link2">
							<Link to="/actionpage#awareness" target="_blank" className="vm2">
								View More &rarr;
							</Link>
						</p>
						</Container>
				

					<Row className="justify-content-center">
						<img src={Support} alt="SUPPORT" />
					</Row>
					
					<Row className="title2 justify-content-center">Supporting anti-Asian hate victims</Row>
					<Container>
						<p className="p2">
							<li>Help effort to bring justice to victims.</li>
							<li>
								Tell a hate incident/crime victim that you want to listen to
								their feelings. Tell a hate crime victim that you are here to
								help.
							</li>
							<li>Donate to AAPI communities</li>
						</p>
						<p className="link2">
								<Link to="/actionpage#support" target="_blank" className="vm2">View More &rarr;</Link>
						</p>
					</Container>

					<Row className="justify-content-center">
						<img src={Expertise} alt="USE EXPERTISE" />
					</Row>
					
						<Row className="title2 justify-content-center">Using your profession, expertise to help</Row>
						<Container>
						<p className="p2">
							<li>
								Make an art pice that reflects attitude to asian-hate and bias.
							</li>
							<li>Propose or participate projects.</li>
							<li>
								Create articles, arts, paintings, videos, music to advocate
								social equality. Or simply share those artifacts you found
								helpful.
							</li>
						</p>
						<p className="link2">
								<Link to="/actionpage#expertise" target="_blank" className="vm2">View More &rarr;</Link>
						</p>
						</Container>
				

					<Row className="justify-content-center">
						<img src={Culture} alt="CROSS-CULTURAL UNDERSTANDING" />
					</Row>

						<Row className="title2 justify-content-center">Promote cross racial understanding</Row>
						<Container>
						<p className="p2">
							<li>
								Ask a minority friend about challenges they experienced
								while growing up and living in the US. Try to relate to them and
								perhaps share your challenge with what the AAPI community is
								facing.
							</li>
							<li>
								Invite friends from different ethnic groups to join your own
								ethnic group or team to tell their stories.
							</li>
						</p>
						<p className="link2">
								<Link to="/actionpage#culture" target="_blank" className="vm2">View More &rarr;</Link>
						</p>
						</Container>
				</Container>
			) : (
				<Container fluid className="details" id="actions">
					<Row className="box2 align-items-center">
						<Col className="text-center" lg={4} md={4} sm={4}>
							<img src={Awareness} alt="AWARENESS" />
						</Col>
						<Col lg={8} md={8} sm={8}>
							<h3 className="title2">Raising Awareness</h3>
							<p className="p2">
								<li>
									Tell a friend or colleague that you are concerned about going
									on the street nowadays because of anti-Asian hate crime
									incidents.
								</li>
								<li>Having 1-on-1 with coworkers to talk about the issue.</li>
								<li>
									In a team meeting, share with colleagues what you are doing to
									fight hate.
								</li>
							</p>
							<p className="link2">
								<Link to="/actionpage#awareness" className="vm2" target="_blank">
									View More &rarr;
								</Link>
							</p>
						</Col>
					</Row>

					<Row className="box2 align-items-center">
						<Col lg={8} md={8} sm={8}>
							<h3 className="title2">Supporting anti-Asian hate victims</h3>
							<p className="p2">
								<li>Help effort to bring justice to victims.</li>
								<li>
									Tell a hate incident/crime victim that you want to listen to
									their feelings. Tell a hate crime victim that you are here to
									help.
								</li>
								<li>Donate to AAPI communities</li>
							</p>
							<p className="link2">
									<Link to="/actionpage#support" className="vm2" target="_blank">View More &rarr;</Link>
							</p>
						</Col>
						<Col className="text-center" lg={4} md={4} sm={4}>
							<img src={Support} alt="SUPPORT" />
						</Col>
					</Row>

					<Row className="box2 align-items-center">
						<Col className="text-center" lg={4} md={4} sm={4}>
							<img src={Expertise} alt="USE EXPERTISE" />
						</Col>
						<Col lg={8} md={8} sm={8}>
							<h3 className="title2">
								Using your profession, expertise to help
							</h3>
							<p className="p2">
								<li>
									Make an art pice that reflects attitude to asian-hate and
									bias.
								</li>
								<li>Propose or participate projects.</li>
								<li>
									Create articles, arts, paintings, videos, music to advocate
									social equality. Or simply share those artifacts you found
									helpful.
								</li>
							</p>
							<p className="link2">								
									<Link to="/actionpage#expertise" className="vm2" target="_blank">View More &rarr;</Link>
							</p>
						</Col>
					</Row>

					<Row className="box2 align-items-center">
						<Col lg={8} md={8} sm={8}>
							<h3 className="title2">Promote cross racial understanding</h3>
							<p className="p2">
								<li>
									Ask a minority friend about challenges they
									experienced while growing up and living in the US. Try to
									relate to them and perhaps share your challenge with what the
									AAPI community is facing.
								</li>
								<li>
									Invite friends from different ethnic groups to join your own
									ethnic group or team to tell their stories.
								</li>
							</p>
							<p className="link2">
									<Link to="/actionpage#culture" className="vm2" target="_blank">View More &rarr;</Link>					
							</p>
						</Col>
						<Col className="text-center" lg={4} md={4} sm={4}>
							<img src={Culture} alt="CROSS-CULTURAL UNDERSTANDING" />
						</Col>
					</Row>
				</Container>
			)}
		</div>
	);
};
export default Actions;
