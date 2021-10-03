var aggregateQueryObj = new global.GlideQuery('table_name')
    .where('field_name', 'field_value')
    .groupBy('group_by_field')
    .aggregate('aggregate_type', 'aggregate_field_name')
    .having('aggregate_type', 'aggregate_field_name', 'operator', 'number_value')
    .select()
    .forEach(function(g) {
        //gs.info(JSON.stringify(aggregateQueryObj, null, 2));
    });
