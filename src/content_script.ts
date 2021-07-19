// Put all the javascript code here, that you want to execute after page load.
import { browser } from "webextension-polyfill-ts";


var mouseX;
var mouseY;

let oldiFrame: HTMLIFrameElement= null;

browser.runtime.onMessage.addListener((messege, sender) => {
	if(oldiFrame) {
		oldiFrame.remove();
	}

	if (messege == "openSummaryModal") {
		console.log("doing sut")

		var iframe = document.createElement('iframe');
		iframe.src = browser.runtime.getURL("summaryModal.html");
		// iframe.id = "myFrame";
		iframe.style.position = "fixed";
		iframe.style.border = "none";
		iframe.style.width = "50vw";
		iframe.style.height = "50vh";
		iframe.style.top = (mouseY +  document.documentElement.clientHeight * 0.25) + "px";
		iframe.style.left = (mouseX -  document.documentElement.clientWidth * 0.25) + "px";
		iframe.style.zIndex = "9999";

		oldiFrame = iframe;
		document.body.appendChild(iframe);
	}
});

document.addEventListener("mousemove", (e) => {
	mouseX = e.clientX;
	mouseY = e.clientY;
});

