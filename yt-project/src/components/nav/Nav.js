import "./nav.css";
import React from "react";
import { Link } from "react-router-dom";

function LoggedInNav(props) {
	console.log(props);
	return (
		<nav className="Navigation">
			<div className="Navigation">
				<div className="topLeft">
					<div>
						<a href="/">
							<img
								class="center"
								src="../../img/atlasHealthLogo.webp"
								alt="Atlas logo"
							/>
						</a>
					</div>
				</div>
				<div className="topCenter">
					<ul className="topList">
						<li className="listItem">
							{/* Create */}
							<Link to="create">Create</Link>
						</li>
						<li className="listItem" id="register">
							Register
							{/* <Link to="Register">Register</Link> */}
						</li>
						<li className="listItem" id="login">
							Login
							{/* <Link to="Login">Login</Link> */}
						</li>

						<li className="listItem" id="logout">
							Logout
							{/* <Link to="logout">Logout</Link> */}
						</li>
					</ul>
				</div>
				<div className="topRight">
					<img
						className="topImg"
						src="../../img/Headshots-DavidHartwig.webp"
						alt="headshot"
					/>
					{/* <ul> */}
					{/* <li className="listItem"> */}
					<a
						href="http://instagram.com/atlas.health.and.wellness"
						target="_blank"
						rel="noreferrer"
					>
						<i class="topIcon fab fa-instagram"></i>
						{/* <img
							class="instagramlogo "
							src="./img/instagram-black-on-white.webp"
							alt="Instagram logo"
						></img> */}
					</a>
					{/* </li> */}
					{/* </ul> */}
				</div>

				{/* <Link to="logout">Logout</Link> */}
				{/* </li> */}
				{/* </ul> */}
				{/* </div> */}
			</div>
		</nav>
	);
}

// yt code
// export default function Nav() {
// 	return <div className="Navigation">Navigation Bar</div>;
// }
// yt end code

function Nav(props) {
	const loggedIn = props.loggedin;
	const admin = props.admin;

	return <LoggedInNav />;

	// if (loggedIn && admin) {
	//   return <AdminLoggedIn />;
	// } else if (loggedIn) {
	//   return <LoggedInNav />;
	// }else {
	//   return <LoggedOutNav />;
	// }
}

export default Nav;
