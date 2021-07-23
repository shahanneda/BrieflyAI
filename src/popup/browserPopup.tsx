import { browser } from "webextension-polyfill-ts";

import "./browserPopup.css"

import React from "react";
import ReactDOM from "react-dom"
import { HashRouter, Link, Route, Switch } from "react-router-dom"
import Button from '@material-ui/core/Button';
import { BottomNavigationAction, BottomNavigation } from "@material-ui/core";
import {Home, AccountBox} from "@material-ui/icons"



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

						<div style={{padding: "100px"}}>
							</div>
						<NavigationBar currentPage="account"/>

					</Route>

					<Route path="/" >
						Home
						<button onClick={() => setOption(!option)}> Option: {Boolean(option).toString()} </button>
						<div style={{padding: "100px"}}>
							</div>
						<NavigationBar currentPage="home"/>
					</Route>
				</Switch>
			</HashRouter>
		</>
	);
}


type NavigationBarProps = {
	currentPage: string,
}

const NavigationBar = ({currentPage}: NavigationBarProps) => {
	console.log( window.location.hash);
	const [value, setValue] = React.useState('Recents');

	return (
		<>
			<BottomNavigation
				value={currentPage}
				onChange={(event, value) => console.log(value)}
			>
					<BottomNavigationAction
						component={Link}
						label="Home"
						to="/home"
						icon={<Home />}
						value="home"
					/>

					<BottomNavigationAction
						component={Link}
						to="/account"
						label="Account"
						icon={<AccountBox />}
						value="account"
					/>
			</BottomNavigation>
		</>
	);
}

console.log("browser popup");
ReactDOM.render(<App />, document.getElementById('app'));