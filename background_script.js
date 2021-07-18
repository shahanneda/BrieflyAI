// Put all the javascript code here, that you want to execute in background.


browser.contextMenus.create({
	id: "log-selection2",
	title: "context menu",
	contexts: ["selection"]
      }, onContextMenuCreated);

function onContextMenuCreated(e){
	console.log("context created", e);


}