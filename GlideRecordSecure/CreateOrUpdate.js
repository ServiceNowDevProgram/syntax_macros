// Description: This macro verifies the presence of a record in a specified table using a defined query. 
//              If the record exists, it updates a designated field with a new value. If the record does not exist, 
//              it initializes a new record and inserts it into the table. 
//              Users should customize 'table_name', 'field_name', 'field_to_update', and the relevant values as necessary.

// Code
var tableGR = new GlideRecordSecure('table_name'); // Instantiate a GlideRecordSecure object for the specified table
tableGR.addQuery('field_name', 'value'); // Add a query to locate existing records
tableGR.query(); // Execute the query

if (tableGR.next()) {
    // Update the found record
    tableGR.field_to_update = 'new_value'; // Set the new value for the specified field
    tableGR.update(); // Commit the changes to the existing record
    //gs.info('Updated record: ' + tableGR.sys_id); // Log the sys_id of the updated record
} else {
    // Insert a new record
    tableGR.initialize(); // Prepare the GlideRecord for creating a new entry
    tableGR.field_name = 'value'; // Assign the value for the new record's field
    var newRecordID = tableGR.insert(); // Insert the new record into the database
    //gs.info('Inserted new record: ' + newRecordID); // Log the ID of the newly created record
}
