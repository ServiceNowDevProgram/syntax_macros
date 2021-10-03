var recordGr = new GlideRecord("table_name");
recordGr.addEncodedQuery("encoded_query");
recordGr.query();
while (recordGr.next()) {
    recordGr.setValue("field_name", "field_value");
    recordGr.setValue("field_name", "field_value");
    recordGr.setValue("field_name", "field_value");
    var id = recordGr.update("update_reason");
    //gs.info(id);
}
