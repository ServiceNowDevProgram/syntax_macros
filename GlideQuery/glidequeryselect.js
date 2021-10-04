var selectQueryStream = new global.GlideQuery('table_name')
    .where('field_name1', 'field_value1')
    .where('field_name2', 'operator', 'field_value2')
    .select('field_name1', 'field_name2', 'field_name3$DISPLAY')
    .forEach(function(row) {
        //gs.info(JSON.stringify(row));
    });
