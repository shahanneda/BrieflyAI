/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./src/background_script.js ***!
  \**********************************/
// var browser = require("webextension-polyfill");

// Put all the javascript code here, that you want to execute in background.



browser.contextMenus.removeAll()
browser.contextMenus.create({
	id: "briefai-summary-context-menu",
	title: "Summargyr",
	contexts: ["selection"]
      }, onContextMenuCreated);


function onContextMenuCreated(e){
	console.log("context created", e);
}
/******/ })()
;