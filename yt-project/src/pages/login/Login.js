import React from "react";
import loginHelper from "../../Helpers/loginHelper";
// import LoginCheck from "./SiteStateObj";

class Login extends React.Component {
	constructor(props){
		super(props);
		this.state ={
			email:'',
			password:''
		}
		this.changeHandler = this.changeHandler.bind(this);
		this.submitHandler = this.submitHandler.bind(this);
	}
	//todo fetch the first 11 posts to get the links to the pages
	changeHandler(event) {
		//console.log(event.target)
		if(event.target.name==="email"){
			this.setState({email: event.target.value});	
		}else if(event.target.name==="password"){
		this.setState({password: event.target.value});
		}
	}
	submitHandler(event) {
		loginHelper(this.state)
		.then(data=>{
			//console.log(data);
			document.cookie = `x-auth-token=`+JSON.stringify(data.token);
			document.cookie = `user={"username":"${data.user.email}","admin":${data.user.admin}}`
			//console.log(data.user.posts)
			this.props.updateLogin({
				loggedin: data.token,
				email: data.user.email,
				admin: data.user.admin
			})
		})
		
		//add the updateLogin function
		//need to save the email and the # of posts from the user
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
				{/* <img
					className="loginImg"
					src="https://s3-us-west-2.amazonaws.com/courses-images/wp-content/uploads/sites/115/2016/06/03173421/figure7_2_1-e1464977654496.jpg"
					alt=""
				/> */}
				
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