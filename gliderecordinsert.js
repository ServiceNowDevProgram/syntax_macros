var recordGr = new GlideRecord("table_name");
recordGr.newRecord();
recordGr.setValue("field_name", "field_value");
recordGr.setValue("field_name", "field_value");
recordGr.setValue("field_name", "field_value");
var id = recordGr.insert();
gs.info(id);
