// Put all the javascript code here, that you want to execute after page load.
import { browser } from "webextension-polyfill-ts";


var mouseX = 0;
var mouseY = 0;

let oldiFrame: HTMLIFrameElement = null;

browser.runtime.onMessage.addListener((messege, sender) => {
	if (oldiFrame) {
		oldiFrame.remove();
	}

	if (messege == "openSummaryModal") {
		// console.log("doing sut")
		var iframe = document.createElement('iframe');
		iframe.src = browser.runtime.getURL(`summaryModal.html#x:${mouseX}y:${mouseY}`);
		iframe.id = "briefai-summary-modal";
		iframe.style.position = "fixed";
		iframe.style.border = "none";
		iframe.style.width = "50vw";
		iframe.style.height = "50vh";
		iframe.style.border = "5px solid black"
		// iframe.style.top = (mouseY + document.documentElement.clientHeight * 0.25) + "px";
		// iframe.style.left = (mouseX - document.documentElement.clientWidth * 0.25) + "px";

		setiFramePosition(iframe);
		iframe.style.zIndex = "9999";

		oldiFrame = iframe;
		document.body.appendChild(iframe);
	}
});

document.addEventListener("drag-on-summary-iframe", (event) => {
	alert("drag");
});

document.addEventListener("dragover", (e) => {
	mouseX = e.clientX;
	mouseY = e.clientY;
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
});

function setiFramePosition(iframe: HTMLIFrameElement) {
	console.log("stting postiion to" + mouseX + " " + mouseY);
	iframe.style.top = mouseY + "px";
	iframe.style.left = mouseX + "px";
}