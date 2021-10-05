var updateMultiple = new global.GlideQuery('table_name')
    .where('field_name1', 'field_value1')
    .where('field_name2', 'field_value2')
    .whereNull('field_name3')
    .updateMultiple({
        update_field1: 'update_field_value1',
        update_field2: 'update_field_value2',
    });

//gs.info(JSON.stringify(updateMultiple));
