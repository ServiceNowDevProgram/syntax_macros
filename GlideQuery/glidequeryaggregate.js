var aggregateQueryObj = new global.GlideQuery('table_name')
    .where('field_name', 'field_value')
    .groupBy('group_by_field')
    .aggregate('aggregate_type', 'aggregate_field_name')
    .having('aggregate_type', 'aggregate_field_name', 'operator', number_value)
    .select()
    .forEach(function(row) {
        //gs.info(JSON.stringify(row, null, 2));
    });
