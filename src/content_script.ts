// Put all the javascript code here, that you want to execute after page load.
import { browser } from "webextension-polyfill-ts";


browser.runtime.onMessage.addListener((messege, sender) => {
	if (messege == "openSummaryModal") {
		alert("5")
		console.log("doing sut")

		var iframe = document.createElement('iframe');
		iframe.src = browser.runtime.getURL("summaryModal.html");
		// iframe.id = "myFrame";

		document.body.appendChild(iframe);

		// // inject javascript into iframe
		// var iframeDoc = iframe.contentDocument;
		// var s = iframeDoc.createElement('script');
		// s.type = 'text/javascript';
		// s.src = browser.runtime.getURL("summaryModal.js");
		// iframeDoc.body.appendChild(s)


	}
});

