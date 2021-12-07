import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Create from "./pages/create/Create";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes, useParams } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Logout from "./pages/Logout";

function App(props) {
	let admin = true;
	return (
		<div className="App Container">
			<Router>
				<Nav />
				<Routes>
					<Route
						path="/"
						exact
						element={<Home />}
					/>

					<Route
						path="/create"
						element={
							<Create
								
								admin={admin}
							/>
						}
					/>

					<Route
						path="/post/:id"
						element={<Single />}
					/>

					<Route
						path="register"
						element={<Register />} 
					/>

					<Route
						path="login"
						element={<Login />}
					/>

					<Route
						path="logout"
						element={<Logout />}
					/>

				</Routes>
			</Router>
		</div>
	);
}
export default App;
