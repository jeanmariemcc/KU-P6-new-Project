import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Create from "./pages/create/Create";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes, useParams } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Logout from "./pages/Logout";
import Aside from "./components/aside/Aside";

function App(props) {
	let admin = true;
	return (
		<div className="App Container">
			<Router>
				<Nav updateLogin={props.updateLogin}/>
				<Routes>
					<Route
						path="/"
						exact
						element={<Home updateLogin={props.updateLogin}/>}
					/>

					<Route
						path="/create"
						element={
							<Create
								updateLogin={props.updateLogin}
								admin={admin}
							/>
						}
					/>

					<Route
						path="/post/:id"
						element={<Single updateLogin={props.updateLogin}/>}
					/>

					<Route
						path="register"
						element={<Register updateLogin={props.updateLogin}/>} 
					/>

					<Route
						path="login"
						element={<Login updateLogin={props.updateLogin}/>}
					/>

					<Route
						path="logout"
						element={<Logout updateLogin={props.updateLogin}/>}
					/>

				</Routes>
			</Router>
		</div>
	);
}
export default App;
