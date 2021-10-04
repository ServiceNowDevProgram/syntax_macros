var recordGr = new GlideRecord("table_name");
if (recordGr.get("field_name", "field_value")) {
    var isDeleted = recordGr.deleteRecord();
    //gs.info(isDeleted); 
}
