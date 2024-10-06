// Fetch all records that meet the specified criteria and delete them in bulk
var tableGR = new GlideRecordSecure('table_name'); // Instantiate a GlideRecordSecure object for the designated table
tableGR.addQuery('field', value); // Add a query to filter records according to a specific condition
tableGR.deleteMultiple(); // Deletes all records that correspond to the query in the record set
