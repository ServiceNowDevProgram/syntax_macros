//Description: This macro checks if a record exists based on a specific query. 
//             If it does, it updates the designated field; if not, it creates a new record. 
//             Make sure to modify table_name, field_name, field_to_update, and the associated values as needed.


//Code
var gr = new GlideRecord('table_name');
gr.addQuery('field_name', 'value');
gr.query();

if (gr.next()) {
    // Update existing record
    gr.field_to_update = 'new_value';
    gr.update();
    gs.info('Updated record: ' + gr.sys_id);
} else {
    // Insert new record
    gr.initialize();
    gr.field_name = 'value';
    var newRecordID = gr.insert();
    gs.info('Inserted new record: ' + newRecordID);
}



//Example
var gr = new GlideRecord('incident');
gr.addQuery('short_description', 'Test GR');
gr.query();

if (gr.next()) {
    // Update existing record
    gr.description = 'Updated Successfully';
    gr.update();
    gs.info('Updated record: ' + gr.sys_id);
} else {
    // Insert new record
    gr.initialize();
    gr.short_description = 'Test GR';
    gr.description = 'Inserted Successfully';
    var newRecordID = gr.insert();
    gs.info('Inserted new record: ' + newRecordID);
}
