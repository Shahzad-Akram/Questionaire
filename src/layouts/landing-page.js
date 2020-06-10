import React from 'react';

import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

import { fadeInLeftBig } from 'react-animations';
import { fadeInUpBig } from 'react-animations';

import Radium, { StyleRoot } from 'radium';

export default function LandingPage() {
	return (
		<StyleRoot>
			<Container fluid className="homeTimeline">
				<Row className="vh-100 overflow-auto">
					<div style={styles.fadeInUpBig} className="col-md-8 col-lg-7 bg-black bg-hide">
						<Navbar className="mb-5 pb-3 pb-md-5">
							<Navbar.Brand href="/">
								<img
									style={styles.fadeInLeftBig}
									src="https://footprint.wwf.org.uk/images/new/wwf-logo3.jpg"
									width="200px"
									height="100px"
									className="d-inline-block align-top"
									alt="React Bootstrap logo"
								/>
							</Navbar.Brand>
						</Navbar>

						<Col lg={7} className="mx-xl-auto text-white">
							<h1 style={styles.fadeInUpBig}>HOW BIG IS YOUR ENVIRONMENTAL FOOTPRINT?</h1>
							<p style={styles.fadeInUpBig15}>
								The planet is in crisis - from climate change to the pollution in our oceans and
								devastation of our forests. It's up to all of us to fix it. Take your first step with
								our environmental footprint calculator.
							</p>
							<div
								style={styles.fadeInUpBig2}
								className="col-12 col-sm-6 col-md-8 col-lg-12 col-xl-10 px-0"
							>
								<Button block size="lg" href="/question-page" variant="orange">
									Take the questionaire
								</Button>
								<Button href="/" variant="link">
									Retake questionaire
								</Button>
							</div>
						</Col>
					</div>
				</Row>
			</Container>
		</StyleRoot>
	);
}

// =========================

const styles = {
	fadeInUpBig: {
		animation: 'x 0.5s',
		animationName: Radium.keyframes(fadeInUpBig, 'fadeInUpBig')
	},
	fadeInUpBig15: {
		animation: 'x 1s',
		animationName: Radium.keyframes(fadeInUpBig, 'fadeInUpBig')
	},
	fadeInUpBig2: {
		animation: 'x 1.1s',
		animationName: Radium.keyframes(fadeInUpBig, 'fadeInUpBig')
	},
	fadeInLeftBig: {
		animation: 'x 0.9s',
		animationName: Radium.keyframes(fadeInLeftBig, 'fadeInLeftBig')
	}
};
