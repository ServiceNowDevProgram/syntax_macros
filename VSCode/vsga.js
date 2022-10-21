var int${1:Label} = 0;
var ga$1 = new GlideAggregate('${2:tbl}');
ga$1.addQuery('${3:column_name}', '${4:value}');
ga$1.addAggregate('${5|COUNT,SUM,AVG,MIN,MAX,STDDEV|}', '${6:column_name}'); $LINE_COMMENT repeat for each aggregate
ga$1.setGroup(${7|true,false|});
ga$1.query();
if (ga$1.next()) {
    int$1 = ga$1.getAggregate('$5', '$6'); $LINE_COMMENT repeat for each aggregate
$0
}