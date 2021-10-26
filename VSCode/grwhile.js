var gr${1:Label} = new GlideRecord('${2:tbl}');
gr$1.addQuery('${3:column_name}', '${4:value}');
gr$1.query();
while (gr$1.next()) {
$0 $LINE_COMMENT do something
}