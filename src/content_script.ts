// Put all the javascript code here, that you want to execute after page load.
import { browser } from "webextension-polyfill-ts";


var mouseX = 0;
var mouseY = 0;

let oldiFrame: HTMLIFrameElement = null;

browser.runtime.onMessage.addListener((messege, sender) => {
	if (oldiFrame) {
		oldiFrame.remove();
	}

	if (messege && messege.name == "openSummaryModal") {
		// console.log("doing sut")
		var iframe = document.createElement('iframe');
		iframe.src = browser.runtime.getURL(`summaryModal.html#text=${messege.text}`);
		iframe.id = "briefai-summary-modal";
		iframe.style.position = "fixed";
		iframe.style.border = "none";
		iframe.style.width = "80vw";
		iframe.style.height = "80vh";
		iframe.style.resize = "both";
		// iframe.style.border = "5px solid black"
		// iframe.style.top = (mouseY + document.documentElement.clientHeight * 0.25) + "px";
		// iframe.style.left = (mouseX - document.documentElement.clientWidth * 0.25) + "px";


		iframe.style.zIndex = "9999";

		oldiFrame = iframe;
		document.body.appendChild(iframe);

		console.log(iframe.clientWidth)
		setiFramePosition(iframe, document.documentElement.clientWidth/2 , 0);
	}
});

document.addEventListener("drag-on-summary-iframe", (event) => {
	alert("drag");
});

document.addEventListener("dragover", (e) => {
	mouseX = e.clientX;
	mouseY = e.clientY;
	console.log("mouse x and y are", mouseX, mouseY);
});

window.addEventListener("message", (event) => {
	console.log(event.origin, event.data , event.target, event.type);
	if (event.data && event.data.name && event.data.name == "briefai-summary-drag-iframe" && oldiFrame) {
		console.log(event.data)
		setiFramePosition(oldiFrame);
	}

	if (event.data && event.data.name && event.data.name == "briefai-summary-dragstart-iframe" && oldiFrame) {
		oldiFrame.style.pointerEvents = "none"
	}
	if (event.data && event.data.name && event.data.name == "briefai-summary-dragend-iframe" && oldiFrame) {
		oldiFrame.style.pointerEvents = "auto"
	}
	if (event.data && event.data.name && event.data.name == "briefai-summary-close-iframe" && oldiFrame) {
		oldiFrame.remove()
	}
});

function setiFramePosition(iframe: HTMLIFrameElement, x: number = mouseX, y: number = mouseY) {

	console.log("stting postiion to" + x + " " + y);
	iframe.style.top = y+ "px";
	// iframe.style.top = mouseY- iframe.clientHeight/2 + "px";
	iframe.style.left = x - iframe.clientWidth/2+ "px";
	// iframe.style.left = mouseX - iframe.clientWidth/2+ "px";
}