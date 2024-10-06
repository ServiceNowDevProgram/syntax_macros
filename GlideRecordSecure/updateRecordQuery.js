// Create a new GlideRecordSecure object for the specified table
var recordGr = new GlideRecordSecure("table_name");

// Add an encoded query to filter records based on specified criteria
recordGr.addEncodedQuery("encoded_query");

// Execute the query to retrieve matching records
recordGr.query();

// Loop through each record returned by the query
while (recordGr.next()) {
    // Set the value for the first field to a specified value
    recordGr.setValue("field_name", "field_value");
    
    // Set the value for a second field to a specified value
    //recordGr.setValue("field_name", "field_value");
    
    // Set the value for a third field to a specified value
    r//ecordGr.setValue("field_name", "field_value");
    
    // Update the record with a reason for the update and store the record ID
    var id = recordGr.update("update_reason");
    
    // Optionally log the updated record ID for debugging purposes
    // gs.info(id); 
}
