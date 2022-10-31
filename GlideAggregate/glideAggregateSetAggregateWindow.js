//Limits the number of rows in a table that the aggregate query can include.

var ga = new GlideAggregate('incident');
ga.addAggregate('COUNT', 'category');
ga.setAggregateWindow(0, 10);
ga.query();
while (ga.next()) {
   var incidentCount = ga.getAggregate('COUNT', 'category');
   gs.info('{0} count: {1}', [ga.getValue('category'), incidentCount]);
}