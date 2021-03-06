import { converURLSearchParamsToObject } from "../helper/helper";
import {setupDrag, setupClose} from "./summaryModalHelpers";
import { SummaryModaOptions } from "./summaryModalTypes";

const parsedHash = new URLSearchParams(window.location.hash.substr(1));
// this is just so there is autocomplete for the summary modal input params from the background script
let option = converURLSearchParamsToObject(parsedHash) as unknown as SummaryModaOptions;

import "../css/summaryModal.css"




// @ts-ignore ignore this since we are checking for something not in typescript types
const isChrome = !!window.chrome as boolean;


setupDrag();
setupClose();

// showSummaryToUser("test");

getSummaryFromApi(option.text).then(sum => {
	showSummaryToUser(sum);
});


async function getSummaryFromApi(text: String): Promise<String> {
	let res = await (await fetch(option.apiUrl + "/getSummary?text=" + text)).json();

	if (res.status == "success") {
		return res.summary;
	} else {
		let error  = (res.error ? (`:${res.error}  <span class="text-danger"> (len ${text.length})</span>`) : "") + ".";
		return "Could not summerize text" + error;
	}
}


function showSummaryToUser(summary: String) {
	document.getElementById("summary").innerHTML = summary.toString();
}









