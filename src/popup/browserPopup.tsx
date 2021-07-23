import { browser } from "webextension-polyfill-ts";

import "./browserPopup.css"

import React from "react";
import ReactDOM from "react-dom"
import { HashRouter, Link, Route, Switch } from "react-router-dom"
import Button from '@material-ui/core/Button';
import { BottomNavigationAction, BottomNavigation } from "@material-ui/core";
import { Favorite, Restore } from "@material-ui/icons"



// document.getElementById('go-to-options').addEventListener('click', (e) => {
// 	browser.runtime.openOptionsPage();
// });

function App() {
	const [option, setOption] = React.useState(false);
	const [currentPage, setCurrentPage] = React.useState("home");

	return (
		<>
			<HashRouter>
				<Switch>
					<Route path="/account" >
						Account
						<Link to="/">Home</Link>
						<NavigationBar />

					</Route>

					<Route path="/" >
						Home
						<Link to="/account">Account</Link>
						<button onClick={() => setOption(!option)}> Option: {Boolean(option).toString()} </button>
						<NavigationBar />
					</Route>
				</Switch>
			</HashRouter>
		</>
	);
}


type NavigationBarProps = {
	// currentPage: string,
	// setCurrentPage: (page: string) => void,
}

const NavigationBar = ({ }: NavigationBarProps) => {
	const [value, setValue] = React.useState('Recents');

	return (
		<>
			<BottomNavigation
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
			>
					<BottomNavigationAction
						component={Link}
						label="Recents"
						to="/"
						icon={<Favorite />}
					/>

					<BottomNavigationAction
						component={Link}
						to="/account"
						label="Favorites"
						icon={<Favorite />}
					/>
			</BottomNavigation>
		</>
	);
}

console.log("browser popup");
ReactDOM.render(<App />, document.getElementById('app'));