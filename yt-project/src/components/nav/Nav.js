import "./nav.css";
import React from "react";
import { Link } from "react-router-dom";

function LoggedInNav() {
  //console.log(props);
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
            <li className="listItem" id="logout">
              <Link to="logout">Logout</Link>
            </li>
          </ul>
        </div>
        <div className="topRight">
          <img
            className="topImg"
            src="../../img/Headshots-DavidHartwig.webp"
            alt="headshot"
          />
          <a
            href="http://instagram.com/atlas.health.and.wellness"
            target="_blank"
            rel="noreferrer"
          >
            <i class="topIcon fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}

function AdminLoggedIn() {
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
            <li className="listItem" id="logout">
              <Link to="logout">Logout</Link>
            </li>
          </ul>
        </div>
        <div className="topRight">
          <img
            className="topImg"
            src="../../img/Headshots-DavidHartwig.webp"
            alt="headshot"
          />
          <a
            href="http://instagram.com/atlas.health.and.wellness"
            target="_blank"
            rel="noreferrer"
          >
            <i class="topIcon fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}

function LoggedOutNav() {
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
            <li className="listItem" id="register">
              <Link to="register">Register</Link>
            </li>
            <li className="listItem" id="login">
              <Link to="login">Login</Link>
            </li>
          </ul>
        </div>
        <div className="topRight">
          <img
            className="topImg"
            src="../../img/Headshots-DavidHartwig.webp"
            alt="headshot"
          />
          <a
            href="http://instagram.com/atlas.health.and.wellness"
            target="_blank"
            rel="noreferrer"
          >
            <i class="topIcon fab fa-instagram"></i>
          </a>
        </div>
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
//   let cookies = document.cookie.split(';')
// 	.map(cookie=> cookie.split('='))
// 	.reduce((accumulator, [key, value]) => ({...accumulator, [key.trim()]: decodeURIComponent(value)}),
// 	{});

// 	//console.log(cookies);

// 	let user = cookies.user; 
// 	console.log(user);

console.log(props);

  const loggedIn = props.loggedin;
  const admin = props.admin;

  if (loggedIn && admin) {
    return <AdminLoggedIn />;
  } else if (loggedIn) {
    return <LoggedInNav />;
  } else {
    return <LoggedOutNav />;
  }
}

export default Nav;
