/*
orElse(Any defaultValue)
Adds a default value within the Optional object if the query does not return any results.

*/


var user = new global.GlideQuery('sys_user')
.get('1234', ['first_name', 'last_name'])
.orElse({ first_name: 'Default', last_name: 'User' });

gs.info(JSON.stringify(user))