var deleteQuery = new global.GlideQuery('table_name')
    .where('field_name1', 'field_value1')
    .where('field_name2', 'field_value2')
    .deleteMultiple();
