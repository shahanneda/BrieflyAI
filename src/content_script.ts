// Put all the javascript code here, that you want to execute after page load.
import { browser } from "webextension-polyfill-ts";


browser.runtime.onMessage.addListener((messege, sender) => {
	if (messege == "openSummaryModal") {
		var iframe = document.createElement('iframe');
		iframe.src = browser.runtime.getURL("summaryModal.html");
		iframe.id = "myFrame";
		document.body.appendChild(iframe);
	}
});
