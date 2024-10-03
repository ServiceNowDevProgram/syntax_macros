var ga = new GlideAggregate('$0'); //add the required table name
ga.addAggregate('COUNT', 'field');// set the counter on a field
ga.orderBy('field'); //orderby
ga.query();
while(ga.next()) {
  gs.info(ga.getAggregate('COUNT')); //print the count
}
