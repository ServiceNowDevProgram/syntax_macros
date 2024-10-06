// Retrieve a specific record from a specified table using its sys_id
var tableGR = new GlideRecordSecure('Table_name'); // Create a GlideRecordSecure object for the specified table
if (tableGR.get('sys_id')) { // Attempt to retrieve the record with the specified sys_id
    // Code/logic for processing the found record goes here

} else {
    gs.info('Message: No record found!'); // Log a message if no record is found
}
