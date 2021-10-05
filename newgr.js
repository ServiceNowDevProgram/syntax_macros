// A common pattern for instantiating a new record with default values and a sys_id
var newgr = new GlideRecord('table_name'); 
newgr.newRecord(); 
newgr.setValue('field','value');
newgr.insert();
