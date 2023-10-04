/*
empty(String reason)
Returns an empty Optional object. Use this method in an Else clause to handle a query that might not return a result.

*/

var now_GR = new GlideRecord('task');
now_GR.addQuery('approval', 'not requested'); 
now_GR.query();
var optional;
if (now_GR.next()) {
optional = Optional.of(now_GR.getUniqueValue());
} else {
    optional = Optional.empty("no results");
}

gs.info(optional.get());
