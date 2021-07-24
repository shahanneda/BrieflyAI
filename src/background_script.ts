// var browser = require("webextension-polyfill");

// Put all the javascript code here, that you want to execute in background.


import firebase from "firebase";
import { browser } from "webextension-polyfill-ts";
import { SummaryModaOptions } from "./contentScripts/summaryModalTypes";


browser.contextMenus.removeAll()
browser.contextMenus.create({
	id: "briefai-summary-context-menu",
	title: "Summary",
	contexts: ["selection"]
}, onContextMenuCreated);



// var provider = new firebase.auth.EmailAuthProvider();
// firebase
// 	.auth()
// 	.signInWithPopup(provider)

browser.runtime.onMessage.addListener((msg, sender) => {
	if (msg && msg.name == "login-request") {
		let panel = browser.windows.create({
			type: "normal",
			url: "http://localhost:8080/login",
			// width: 1000
			// height: 1000
		});
	}

	if (msg && msg.name == "briefai-auth-result") {
		gotLoginDataFromAuth(msg);
	}
});

browser.contextMenus.onClicked.addListener((info, tab) => {
	if (info.selectionText) {
		browser.tabs.sendMessage(tab.id, { name: "openSummaryModal", text: info.selectionText });
	}

	// let panel = browser.windows.create({
	// 	type: "panel",
	// 	url: "popup/browserPopup.html",
	// 	width: 1000,
	// 	height: 1000
	// });
})



function onContextMenuCreated() {
	console.log("context created");
}


function gotLoginDataFromAuth(msg){
		let userAuthObject = msg.user;
		let idToken = userAuthObject.oauthIdToken;
		let fbAuthObject = firebase.auth.AuthCredential.fromJSON(userAuthObject);

		console.log("got the sign in cred, trying firebase login");

		firebase.auth().signInWithCredential(fbAuthObject).then( userCred => {
			console.log("GOT USER CREDS in BG Script", userCred)

			// browser.storage.local.set({userCred: userCred});
			// browser.storage.local.set({userBill: "bill haha" });
			console.log("set data")
		});
}