import React from "react";
import { Link } from "react-router-dom";
import { BottomNavigationAction, BottomNavigation } from "@material-ui/core";
import { Home, AccountBox } from "@material-ui/icons";

type NavigationBarProps = {
	currentPage: Page;
};
export enum Page {
	home,
	account
}
export default ({ currentPage }: NavigationBarProps) => {
	console.log(window.location.hash);
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
					value={Page.home} />

				<BottomNavigationAction
					component={Link}
					to="/account"
					label="Account"
					icon={<AccountBox />}
					value={Page.account} />
			</BottomNavigation>
		</>
	);
};
