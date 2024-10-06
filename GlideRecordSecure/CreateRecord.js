// A common pattern for instantiating a new record with default values and a sys_id
var newgr = new GlideRecordSecure('table_name'); 
//uncomment accordingly either of initialize vs newRecord line as per requirement
//newgr.initialize(); //Creates an empty record suitable for population before an insert.
newgr.newRecord(); //Creates a GlideRecord, set the default values for the fields and assign a unique id to the record.
newgr.setValue('field','value');
newgr.insert();
