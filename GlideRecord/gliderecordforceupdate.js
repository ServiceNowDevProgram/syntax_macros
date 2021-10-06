//Force an update to all User records without changing field values
var gr = new GlideRecord('sys_user');
gr.query();
while (gr.next()) {
   gr.setWorkflow(false); //Do not run business rules
   gr.autoSysFields(false); //Do not update system fields
   gr.setForceUpdate(true); //Force the update
   gr.update();
}
