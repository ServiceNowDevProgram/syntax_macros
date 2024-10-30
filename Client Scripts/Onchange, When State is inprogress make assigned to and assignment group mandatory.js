(function executeRule(current, previous /*null when async*/) {
    // Check if the new state is "In Progress"
    if (g_form.getValue('state') == '2') {
        // Make Assigned To and Assignment Group mandatory
        g_form.setMandatory('assigned_to', true);
        g_form.setMandatory('assignment_group', true);
    } else {
        // Make Assigned To and Assignment Group not mandatory when state is not "In Progress"
        g_form.setMandatory('assigned_to', false);
        g_form.setMandatory('assignment_group', false);
    }
})();
