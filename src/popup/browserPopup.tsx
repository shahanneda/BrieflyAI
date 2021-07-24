import { browser } from "webextension-polyfill-ts";

import "./browserPopup.css"

import React from "react";
import ReactDOM from "react-dom"
import { HashRouter, Route, Switch } from "react-router-dom"
import Button from '@material-ui/core/Button';
import NavigationBar, { Page } from "@/components/BottomNavigator";
import MyAccount from "@/components/MyAccount";
import { CardHeader, makeStyles } from "@material-ui/core";




const useStyles = makeStyles({
	root: {
		width: "100%",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent:"space-between"

	},
	header: {
	},
})


interface AppContextInterface {
	loggedIn: boolean;
}
export const AppContext = React.createContext<AppContextInterface>(null);


function getLoginData(){
	browser.storage.local.get("userCred").then( userCred => {
		console.log("GOT USER CRED IN POPUP", userCred);
	});;
}

getLoginData();

function App() {
	const [option, setOption] = React.useState(false);
	const [currentPage, setCurrentPage] = React.useState("home");

	const [appContext, setAppContext] = React.useState<AppContextInterface>({
		loggedIn: false,
	});

	const classes  = useStyles();










	return (
		<div className={classes.root}>
			<HashRouter >
				<AppContext.Provider value={appContext} >
					<Switch>
						<Route path="/account" >
							<CardHeader title="My Account" class={classes.header} />
							<MyAccount />
							<NavigationBar currentPage={Page.account} />
						</Route>

						<Route path="/" >
							<CardHeader title="BriefAI" class={classes.header} />
							<button onClick={() => setOption(!option)}> Option: {Boolean(option).toString()} </button>
							<div style={{ padding: "100px" }}>
							</div>

							<NavigationBar currentPage={Page.home} />
						</Route>
					</Switch>
				</AppContext.Provider>
			</HashRouter>
		</div>
	);
}



console.log("browser popup");
ReactDOM.render(<App />, document.getElementById('app'));