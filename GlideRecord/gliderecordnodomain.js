var tableGr = new GlideRecord("table_name");
tableGr.addQuery("field", "value");
tableGr.queryNoDomain();
while (tableGr.next()) {
  //
}
