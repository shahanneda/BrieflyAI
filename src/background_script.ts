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

	// let panl = browser.windows.create({
	// 	type: "panel",
	// 	url: "summaryModal.html#detachedPanel",
	// 	width: 250,
	// 	height: 100
	// });
})



function onContextMenuCreated() {
	console.log("context created");
}