var updateQueryObj = new global.GlideQuery('table_name')
    .where('sys_id', 'xxxxxxxxxxxxxxx')
    .update({
        field_name1: 'field_value1',
        field_name2: 'field_value2',
    });
