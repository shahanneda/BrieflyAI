import { browser } from "webextension-polyfill-ts";

import "./browserPopup.css"

import React from "react";
import ReactDOM from "react-dom"
import { HashRouter, Link, Route, Switch } from "react-router-dom"



// document.getElementById('go-to-options').addEventListener('click', (e) => {
// 	browser.runtime.openOptionsPage();
// });

function App() {
	const [option, setOption] = React.useState(false);
	return (
		<>
			<HashRouter>
				<Switch>
					<Route path="/account" >
						Account
						<Link to="/">Home</Link>
					</Route>

					<Route path="/" >
						Home
						<Link to="/account">Account</Link>
						<button onClick={() => setOption(!option)}> Option: {Boolean(option).toString()} </button>
					</Route>
				</Switch>
			</HashRouter>
		</>
	);
}

console.log("browser popup");
ReactDOM.render(<App />, document.getElementById('app'));