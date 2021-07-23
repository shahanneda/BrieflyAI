// var browser = require("webextension-polyfill");

// Put all the javascript code here, that you want to execute in background.


import { browser } from "webextension-polyfill-ts";
import { SummaryModaOptions } from "./contentScripts/summaryModalTypes";


browser.contextMenus.removeAll()
browser.contextMenus.create({
	id: "briefai-summary-context-menu",
	title: "Summary",
	contexts: ["selection"]
}, onContextMenuCreated);



browser.contextMenus.onClicked.addListener((info, tab) => {
	if (info.selectionText) {
		browser.tabs.sendMessage(tab.id, {name:"openSummaryModal", text:info.selectionText});
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