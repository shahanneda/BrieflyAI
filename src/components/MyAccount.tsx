import { AppContext } from '@/popup/browserPopup';
import { Button, createStyles, makeStyles, withStyles } from '@material-ui/core';
import React, { useContext } from 'react'

interface MyAccountProps {
}


const useStyles = makeStyles({
	headerStyles: {
		marginBottom: '1em',
		color: "blue"
	},
});

const MyAccount = ({ }: MyAccountProps) => {
	const appContext = useContext(AppContext);
	const classes = useStyles();


	return (
		<div>
			<h1 className={classes.headerStyles}> My Account Page </h1>

			<div>
				You are currently {appContext.loggedIn ? 'logged in' : 'not logged in'}.
			</div>
			<Button variant="contained" color="primary" >Login</Button>

		</div>
	)
}

export default MyAccount
