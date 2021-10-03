var recordGr = new GlideRecord("table_name");
recordGr.addEncodedQuery("encoded_query");
recordGr.query();
while (recordGr.next()) {
    //gs.info(recordGr.getUniqueValue());
}
