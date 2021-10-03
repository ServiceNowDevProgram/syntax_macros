var recordGr = new GlideRecord("table_name");
if (recordGr.get("field_name", "field_value")) {
    recordGr.setValue("field_name", "field_value");
    recordGr.setValue("field_name", "field_value");
    recordGr.setValue("field_name", "field_value");
    var id = recordGr.update("update_reason");
    //gs.info(id);
}
