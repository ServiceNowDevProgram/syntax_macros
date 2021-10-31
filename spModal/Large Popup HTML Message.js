if(typeof spModal != 'undefined'){
	spModal.open({
		"title" : "TITLE_HERE",
		"message" : "MESSAGE_HERE",
		"size" : "lg",
		"buttons" : [{label:'TEXT_TO_DISPLAY', primary: true}],
		"keyboard" : false,
		"backdrop" : "static"

	});

} else {
	g_form.addErrorMessage("MESSAGE_HERE");
}
