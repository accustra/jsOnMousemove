function downloadJSAtOnload() {
var element = document.createElement("script");
element.src = "https://storage.ko-fi.com/cdn/scripts/overlay-widget.js";
document.body.appendChild(element);
	
kofiWidgetOverlay.draw('YOUR_KO-FI_USERNAME', {
		'type': 'floating-chat',
		'floating-chat.donateButton.text': 'Support Us',
		'floating-chat.donateButton.background-color': '#f45d22',
		'floating-chat.donateButton.text-color': '#fff'
	});
}
	
var run = 0;	
if (window.addEventListener)
window.addEventListener("mousemove", function(){
	if(run<1){
		downloadJSAtOnload();
	}
	run = run +1;
}, false);
