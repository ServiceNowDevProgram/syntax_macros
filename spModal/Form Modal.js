if (typeof spModal != 'undefined') {
  	// showing form using form widget
    spModal.open({
        title: "MODAL_TITLE",
        widget: "form", // 'form' is a global widget which is used to show form using table name
        widgetInput: {
            table: "TABLE_NAME", // ex. 'incident'
            view: "FORM_VIEW", // optional parameter, using default view if not using it, ex. 'Major Incidents'
            sys_id: "RECORD_SYS_ID", // optional parameter to show specific record, ex. '6d744e3997343110f971ffb0f053af6f'
        },
        buttons: [] // hide default buttons.
    });

} else {
    g_form.addErrorMessage("MESSAGE_HERE");
}
