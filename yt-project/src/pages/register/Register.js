import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../index.css";
import Aside from "../../components/aside/Aside";

function isNewUser(email) {
	const userURL = "http://localhost:9999/atlas/users/";
	return fetch(userURL)
		.then((res) => res.json())
		.then((users) => {
			let hasUser = users.find((user) => {
				console.log(user.email);
				return user.email === email;
			});
			if (hasUser === undefined) {
				return true;
			}
			return false;
		});
}
function registerUser(email, password) {
	const url = "http://localhost:9999/atlas/users/register";
	let data = JSON.stringify({
		email,
		password,
		admin: false,
	});
	console.log("register data");
	console.log(data);
	let resources = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: data,
	};
	console.log(data);
	return fetch(url, resources).then((res) => res.json());
}

function Register(props) {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [repass, setRePass] = useState("");
	const [error, setError] = useState("");
	//todo fetch the first 11 posts to get the links to the pages

	const submitHandler = (event) => {
		event.preventDefault();
		if (password !== repass) {
			setError("Both Passwords must be the same!");
			return;
		}
		isNewUser(email).then((bool) => {
			if (!bool) {
				setError("Email address is already in use!");
				return;
			}
			registerUser(email, password).then((res) => {
				console.log(res);
				navigate("/login");
			});
		});
	};
	//console.log(links);
	return (
		<div className="register">
			{/* <img
					className="registerImg"
					src="https://s3-us-west-2.amazonaws.com/courses-images/wp-content/uploads/sites/115/2016/06/03173421/figure7_2_1-e1464977654496.jpg"
					alt=""
				/> */}

			<h1 className="register">Register</h1>
			<form className="createForm" onSubmit={submitHandler}>
				<div className="createFormGroup">
					<input
						className="createInput"
						placeholder="Email"
						type="text"
						autoFocus={true}
						name="email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
				</div>
				<div className="createFormGroup">
					<input
						className="createInput"
						placeholder="Password"
						name="imageURL"
						type="password"
						autoFocus={true}
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
				</div>
				<div className="createFormGroup">
					<input
						className="createInput"
						placeholder="Repeat Password"
						name="imageURL"
						type="password"
						autoFocus={true}
						value={repass}
						onChange={(e) => {
							setRePass(e.target.value);
						}}
					/>
				</div>

				<div className="createFormGroup">
					<button className="registerSubmit" type="submit">
						Register
					</button>
				</div>
			</form>
		</div>
	);
}

export default Register;
