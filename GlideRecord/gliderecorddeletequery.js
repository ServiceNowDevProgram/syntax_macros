var recordGr = new GlideRecord("table_name");
recordGr.addEncodedQuery("encoded_query");
recordGr.query();
while (recordGr.next()) {
    var isDeleted = recordGr.deleteRecord();
    //gs.info(isDeleted); 
}
