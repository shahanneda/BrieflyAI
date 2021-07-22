import { converURLSearchParamsToObject } from "../helper/helper";
import setupDrag from "./summaryModalDrag";
import { SummaryModaOptions } from "./summaryModalTypes";

const parsedHash = new URLSearchParams(window.location.hash.substr(1));
// this is just so there is autocomplete for the summary modal input params from the background script
let option = converURLSearchParamsToObject(parsedHash) as unknown as SummaryModaOptions;

console.log(option)


// @ts-ignore ignore this since we are checking for something not in typescript types
const isChrome = !!window.chrome as boolean;


setupDrag();


function getSummaryFromApi(text: string) {
	fetch(option.apiUrl + "/getSummary?text=" + text)
		.then(res => res.json())
		.then(data => {
			console.log("data")
		});










