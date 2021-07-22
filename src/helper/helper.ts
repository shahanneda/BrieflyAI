

export function converURLSearchParamsToObject(upath: URLSearchParams): { [key: string]: string } {
	let obj = {};
	for( let [key, value] of upath ) {
		obj[key] = value;
	}
	return obj;
}