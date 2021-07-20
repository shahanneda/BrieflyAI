document.body.style.backgroundClip = "blue"
document.getElementById("heading1").innerHTML = window.location.hash;
console.log("inside!")


document.getElementById("drag").addEventListener("drag", (e) => {
	window.parent.postMessage({name:"briefai-summary-drag-iframe"}, "*");
	// window.parent.document.dispatchEvent(new CustomEvent("drag-on-summary-iframe"));
});

document.getElementById("drag").addEventListener("dragstart", (e) => {
	window.parent.postMessage({name:"briefai-summary-dragstart-iframe"}, "*");
	e.dataTransfer.setData('text/html', "summary data drag"); //cannot be empty string


});
document.getElementById("drag").addEventListener("dragend", (e) => {
	window.parent.postMessage({name:"briefai-summary-dragend-iframe"}, "*");
});

document.getElementById("close").addEventListener("click", (e) => {
	window.parent.postMessage({name:"briefai-summary-close-iframe"}, "*");
});

window.addEventListener("dragover", (e) => {
	// window.parent.postMessage({name:"briefai-summary-drag-over-iframe", x: e.clientX, y:e.clientY}, "*");
});
