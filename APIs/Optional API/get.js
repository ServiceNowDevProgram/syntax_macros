/*
get()
Returns the record inside the Optional object, or throws an error if the query does not return a record.

*/


var value = new global.GlideQuery('sys_user')
.selectOne('first_name') //Returns the result of the query inside an Optional object
.get(); //Calls Optional.get() on the Optional object

gs.info(JSON.stringify(value));
