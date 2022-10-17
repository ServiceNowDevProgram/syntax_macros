// Set 'field' to the field you want to check for

var gaCount = new GlideAggregate('tableName');
gaCount.addAggregate('COUNT', 'field');
gaCount.orderBy('field');
gaCount.query();
while(gaCount.next()) {
  var fieldCount = gaCount.getAggregate('COUNT', 'field');
    gs.info('Display the count {0}', [fieldCount]);
}
