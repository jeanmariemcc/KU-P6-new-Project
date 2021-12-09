import "./Footer.css";

import React from "react";

class Footer extends React.Component {
	render() {
		// console.log(links);
		return (
			<footer className="header">
				{/* <footer> */}
				<div id="parent">
					<div id="left">
						<h2>CONTACT US</h2>
						<p>Request your free evaluation today!</p>
						<p>
							<br />
							We’re here for you when you need us. Call us to
							schedule an appointment and we’ll get back to you as
							soon as possible.
						</p>
						<p>Boynton Beach, FL 33435</p>
						<p>info@atlashealthandwellness.com</p>
						<p>(954) 93-ATLAS</p>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
