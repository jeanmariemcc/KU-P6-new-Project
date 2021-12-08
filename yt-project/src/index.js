import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import SiteStateObj from './components/SiteStateObj';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<SiteStateObj />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
