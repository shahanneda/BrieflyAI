// Put all the javascript code here, that you want to execute after page load.
import { browser } from "webextension-polyfill-ts";


browser.runtime.onMessage.addListener((messege, sender) => {
	if (messege == "openSummaryModal") {
		console.log("doing sut")

		var iframe = document.createElement('iframe');
		iframe.src = browser.runtime.getURL("summaryModal.html");
		// iframe.id = "myFrame";
		iframe.style.position = "fixed";
		iframe.style.border = "none";
		iframe.style.width = "50vw";
		iframe.style.height = "50vh";
		iframe.style.top = "0";
		iframe.style.left = "0";
		iframe.style.zIndex = "9999";


		document.body.appendChild(iframe);



	}
});

