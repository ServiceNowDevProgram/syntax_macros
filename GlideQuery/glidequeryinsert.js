var queryObj = new global.GlideQuery('table_name')
    .insert({
        field_name1: 'field_value1',
        field_name2: 'field_value2',
        field_name3: 'field_value3',
    }, ['additiona_field_1', 'additiona_field_2$DISPLAY'])
    .get();

//gs.info(JSON.stringify(queryObj, null, 2));
//gs.info(queryObj.additiona_field_2$DISPLAY);
