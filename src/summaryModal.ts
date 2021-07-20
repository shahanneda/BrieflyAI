document.body.style.backgroundClip = "blue"
document.getElementById("heading1").innerHTML = window.location.hash;
console.log("inside!")


document.getElementById("drag").addEventListener("drag", (e) => {
	console.log("drag middle f" + e.clientX+ " " + e.pageY); 
	window.parent.postMessage({name:"briefai-summary-drag-iframe"}, "*");
	// window.parent.document.dispatchEvent(new CustomEvent("drag-on-summary-iframe"));
});

document.getElementById("drag").addEventListener("dragstart", (e) => {
	window.parent.postMessage({name:"briefai-summary-dragstart-iframe"}, "*");
});
document.getElementById("drag").addEventListener("dragend", (e) => {
	window.parent.postMessage({name:"briefai-summary-dragend-iframe"}, "*");
});

window.addEventListener("dragover", (e) => {
	// window.parent.postMessage({name:"briefai-summary-drag-over-iframe", x: e.clientX, y:e.clientY}, "*");

});
