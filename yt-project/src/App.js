import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Create from "./pages/create/Create";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes, useParams } from "react-router-dom";

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
						element={<Home updateLogin={props.updateLogin} />}
					></Route>

					<Route
						path="/create"
						element={
							<Create
								updateLogin={props.updateLogin}
								admin={admin}
							/>
						}
					>
						{/* <Route path="/create">
						{admin ? <Create /> : <Home />} */}
					</Route>
					<Route
						path="/post/:id"
						element={<Single updateLogin={props.updateLogin} />}
					></Route>
				</Routes>
			</Router>
		</div>
	);
}
export default App;
