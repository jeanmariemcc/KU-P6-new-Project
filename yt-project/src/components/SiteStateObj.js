import React from "react";
import Nav from "./nav/Nav";
import Footer from "./footer/Footer";
import App from "../App";
import Header from "./header/Header";

// ????

class LoginCheck extends React.Component {
	constructor(props) {
		super(props);
		let cookies =document.cookie.split("; ")// ["cookiename= value",'cookiename= value']
		let login = false;
		let user = {
			username: "",
			admin: false
		};
		if(cookies.length>1){
			login = cookies.find((cookie)=>{
				return cookie.includes("token")
			});
			user = cookies.find((cookie)=>{
				return cookie.includes("user")
			});
			login = JSON.parse(login.split("=")[1]);
			user = JSON.parse(user.split("=")[1]);
			console.log("login", login);
			console.log("user", user);
		}
		//console.log(document.cookie)
		
		this.state = {
			loggedin: (login) ? true : false,
			email: user.email,
			token: login,
			admin: (user.admin) ? true : false
		};
		this.updateLogin = this.updateLogin.bind(this);
	}
	
	updateLogin(logInfo) {
		let user;
		if (logInfo) {
			user = logInfo;
		}
		this.setState(() => {
			if (user) {	
				return {
					loggedin: (user.loggedin) ? true : false,
					email: user.email,
					token: user.loggedin,
					admin: (user.admin) ? true : false
				};
			} else {
				return {
					loggedin: false,
					username: "",
					token: "",
					admin:""
				};
			}
		});
		//console.log(this.state);
	}

	render() {
		console.log(this.state);
		return (
			<div>
				<Header />
				<Nav loggedin={this.state.loggedin} admin={this.state.admin} updateLogin={this.updateLogin} />

				<App
					loggedin={this.state.loggedin}
					user={this.state}
					admin={this.state.admin}
					updateLogin={this.updateLogin}
				/>

				<Footer />
			</div>
		);
	}
}
export default LoginCheck;