var ga = new GlideAggregate('incident');
ga.groupBy('category');
ga.addAggregate('COUNT', 'number');
ga.query();

while (ga.next()) {
  var category = ga.get('category');
  var count = ga.get('result');
  gs.info('Category: ' + category + ', Count: ' + count);
}
