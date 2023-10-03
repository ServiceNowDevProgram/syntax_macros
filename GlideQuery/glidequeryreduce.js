// use the reduce method to convert the stream to an array
// alternative to toArray without needing to know the size of the array
var gqTable = new global.GlideQuery('table_name')
    .where('field_1', 'query_value')
    .select(['field_1', 'field_1$DISPLAY', 'field_2'])
    .reduce(function (arr, e) { arr.push(e); return arr; }, []);
