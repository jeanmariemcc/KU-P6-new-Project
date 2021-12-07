import React from "react";
import loginHelper from "../../Helpers/loginHelper";
// import LoginCheck from "./SiteStateObj";

class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			email:'',
			password:'',
			admin: false
		}
		this.changeHandler = this.changeHandler.bind(this);
		this.submitHandler = this.submitHandler.bind(this);
	}
	//todo fetch the first 11 posts to get the links to the pages
	changeHandler(event) {
		console.log(event.target)
		if(event.target.name==="email"){
			this.setState({email: event.target.value});	
		}else if(event.target.name==="password"){
		this.setState({password: event.target.value});
		}
	}
	submitHandler(event) {
		//fetch api
		loginHelper(this.state)
		.then(data=>{
			console.log(data);
			document.cookie = `x-auth-token=`+ JSON.stringify(data.token);
			document.cookie = `user={"email":"${data.user.email}","admin":${data.user.admin}}, "loggedin":true`;
			//console.log(data.user.posts)
			//add the updateLogin function
            // let cookies = document.cookie.split(';')
	// .map(cookie=> cookie.split('='))
	// .reduce((accumulator, [key, value]) => ({...accumulator, [key.trim()]: decodeURIComponent(value)}),
	// {});

	// //console.log(cookies);

	// let user = cookies.user; 
	// console.log(user);
			this.props.updateLogin({
				loggedin: data.token,
				email: data.user.email,
				admin: data.admin
			})
			console.log(this.props);
			if (data.user.admin === true) {
				window.location.reload(true);
			} 
		})
		
		//need to save the email
		event.preventDefault();
		// Doing some AJAX with the data...
		//run the updateLogin method
	}
	

	render() {
		//console.log(links);
		const {email,password} = this.state;
		//console.log(this.state)
		return (
			<div className="login">
				
				<img
					className="loginImg"
					src="https://s3-us-west-2.amazonaws.com/courses-images/wp-content/uploads/sites/115/2016/06/03173421/figure7_2_1-e1464977654496.jpg"
					alt=""
				/>
				
				<h1 className="login">Login</h1>
				<form className="createForm" onSubmit={this.submitHandler}>
				<div className="createFormGroup">
					<input
						className="createInput"
						placeholder="Email"
						type="text"
						name="email"
						value={email}
                        onChange={this.changeHandler}
					/>
				</div>
				<div className="createFormGroup">
					<input
						className="createInput"
						placeholder="Password"
						name="password"
						type="password"
						value={password}	
                        onChange={this.changeHandler}
					/>
				</div>

				<div className="createFormGroup">
					<button className="createSubmit" type="submit">
						Login
					</button>
				</div>
				</form>
			</div>
		);
	}
}

export default Login;