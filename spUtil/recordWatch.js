/*
	spUtil.recordWatch() is used to register a listener to notified when table records are insrted, deleted or updated
	- table_name can be a any table for ex. 'incident', for which you have to register listener
  - filter can be any condition like 'active=true' to filter only active record
*/

spUtil.recordWatch($scope, "table_name", "filter", function(name) {
    console.log(name); //Returns information about the event that has occurred
    console.log(name.data); //Returns the data inserted or updated on the table
});
