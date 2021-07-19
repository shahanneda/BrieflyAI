// var browser = require("webextension-polyfill");

// Put all the javascript code here, that you want to execute in background.


import { browser } from "webextension-polyfill-ts";


browser.contextMenus.removeAll()
browser.contextMenus.create({
	id: "briefai-summary-context-menu",
	title: "Summargyr",
	contexts: ["selection"]
      }, onContextMenuCreated);




function onContextMenuCreated(){
	console.log("context created");
}