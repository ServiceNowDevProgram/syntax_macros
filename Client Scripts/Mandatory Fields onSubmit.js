//This is an onSubmit client script to make fields mandatory when a UI action is clicked. Ideally use a UI policy if possible.
//However this use case is to allow the user to save the form if the data can't be filled in presently or is awaiting information.

function onSubmit() {
    g_form.clearMessages();
    var action = g_form.getActionName();
    var error = false;
    var errorFields = [];
    var mandFields = [];
	
    switch (action) {
		case "ui_action_name":
            mandFields = ['reviewing_group', 'assessors', 'description'];
            break;
		case "ui_action_name_2":
			mandFields = ['outcome', 'close_notes'];
    }
	
    for (var index = 0; index < mandFields.length; index++) {
        if (g_form.getValue(mandFields[index]).trim() == "") {
            g_form.setMandatory(mandFields[index], true);
            error = true;
            errorFields.push(g_form.getLabelOf(mandFields[index]));
        }
    }

    if (error && (errorFields.length > 0)) {
        g_form.addErrorMessage(getMessage("The following fields are mandatory: ") + ": " + errorFields.join(", "));
    }
    return !error;
}
