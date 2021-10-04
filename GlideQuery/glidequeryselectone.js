var selectQueryObj = new global.GlideQuery('table_name')
    .where('field_name1', 'field_value1')
    .selectOne('field_name1', 'field_name2', 'field_name3$DISPLAY')
    .ifPresent(function(selectQueryObj) {
        //gs.info(JSON.stringify(selectQueryObj));
    });
