/**
* @Description : caseSensitiveFilter : Syntax_macro to apply case sensitive filter on a table.
* @table_name : Name of the table on which filter needs to be applied.
* @encoded_query : Filter condition that we want to apply on records.
**/

var gr = new GlideRecord('<table_name>');
gr.query();
var condition = '<encoded_query>';
var glideFilter = new GlideFilter(condition, 'filterCondition');
while (gr.next()) {
    if (glideFilter.match(gr, true))
        gs.info("Result : " + gr.getDisplayValue());
}
