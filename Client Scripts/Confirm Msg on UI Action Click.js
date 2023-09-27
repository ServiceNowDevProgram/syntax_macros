//This onSubmit client script will produce a popup confirm message when a UI action is clicked.
//Use cases are when deleting a record or require a confirmation before the UI action is completed.

function onSubmit() {
    var action = g_form.getActionName();
    var answer;

    if (action == "UIACTIONNAME") {
            answer = confirm(getMessage("Are you sure you want to delete this record?"));
        if (answer != true)
            return false;
    }
}
