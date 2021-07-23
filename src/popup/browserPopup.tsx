import { browser } from "webextension-polyfill-ts";

import "./browserPopup.css"

import React from "react";
import ReactDOM from "react-dom"
import { HashRouter, Route, Switch } from "react-router-dom"
import Button from '@material-ui/core/Button';
import NavigationBar, { Page } from "@/components/BottomNavigator";
import MyAccount from "@/components/MyAccount";



// document.getElementById('go-to-options').addEventListener('click', (e) => {
// 	browser.runtime.openOptionsPage();
// });

interface AppContextInterface {
	loggedIn: boolean;
}


export const AppContext = React.createContext<AppContextInterface>(null);


function App() {
	const [option, setOption] = React.useState(false);
	const [currentPage, setCurrentPage] = React.useState("home");

	const [appContext, setAppContext] = React.useState<AppContextInterface>({
		loggedIn: false,
	});









	return (
		<>
			<HashRouter>
				<AppContext.Provider value={appContext} >
					<Switch>
						<Route path="/account" >
							<MyAccount />
							<NavigationBar currentPage={Page.account} />
						</Route>

						<Route path="/" >
							Home
							<button onClick={() => setOption(!option)}> Option: {Boolean(option).toString()} </button>
							<div style={{ padding: "100px" }}>
							</div>

							<NavigationBar currentPage={Page.home} />
						</Route>
					</Switch>
				</AppContext.Provider>
			</HashRouter>
		</>
	);
}


console.log("browser popup");
ReactDOM.render(<App />, document.getElementById('app'));