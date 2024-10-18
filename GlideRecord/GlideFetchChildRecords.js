// Description : This macro syntax GlideRecord the specific table to retrieve and process child records from that table
// Modify parent_sys_id, 'table_name',parent_reference_field_name according to your requirement
 
// code
var parent_sys_id = 'parent_sys_id'; // parent sys_id
var childRecord = new GlideRecord('table_name');  // Glide record the table
childRecord.addQuery('parent_reference_field_name', parent_sys_id); // filter the record according to parent sys_id
childRecord.query(); // query the table
while(childRecord.next()){
    gs.info(" Child Record Number " + childRecord.getValue('number'));  // child record number
    gs.info(" Child Record Short Description " + childRecord.getValue('short_description')); // child record short description
}
 
// Example
var parent_sys_id = 'a623cdb073a023002728660c4cf6a768'; // parent sys_id
var childRecord = new GlideRecord('incident'); // Glide record the incident table
childRecord.addQuery('parent_incident', parent_sys_id);  // filter the record according to parent sys_id
childRecord.query(); // query the table
while(childRecord.next()){
     gs.info(" Child Record Number : " + childRecord.getValue('number'));   // child incident record number
     gs.info(" Child Record Short Description : " + childRecord.getValue('short_description')); // child incident short description
}
